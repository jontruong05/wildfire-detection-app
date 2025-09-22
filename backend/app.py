# python -m flask run --port=5000

# Flask, SQLAlchemy, and dotenv imports
from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import desc
from dotenv import load_dotenv
import os
from pathlib import Path
from PIL import Image
from datetime import datetime

# Import prediction functions
from prediction_model.lite_model import lite_predict
from prediction_model.pro_model import pro_predict

# Load environment variables from .env file
env_path = Path(__file__).resolve().parent / ".env"
load_dotenv(dotenv_path=env_path)

app = Flask(__name__)
CORS(app, origins=['http://localhost:3000'])

# Configurations
app.config['SQLALCHEMY_DATABASE_URI'] = f"postgresql://postgres:{os.getenv('POSTGRES_PASSWORD')}@localhost:5432/wildfiredetectionapp"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# Tables
class ImgPredictions(db.Model):
    __tablename__ = 'ImgPredictions'

    prediction_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    uid = db.Column(db.String(100), nullable=False)
    img_name = db.Column(db.String(100), nullable=False)
    model = db.Column(db.String(4), nullable=False)
    prediction = db.Column(db.String(13), nullable=False)
    upload_time = db.Column(db.DateTime, nullable=False)

@app.route('/')
def index():
    return "Welcome to the Wildfire Detection App!"

@app.route('/uploadimages', methods=['POST'])
def upload_images():

    # Get model choice, uid, and file from frontend
    model_choice = request.form.get('model')
    uid = request.form.get('uid')
    file = request.files.get('img')
    file_name = request.form.get('img_name')

    if not file or not model_choice:
        return jsonify({"error": "Missing file or model choice"}), 400

    image = Image.open(file.stream)

    # Run prediction
    if model_choice == 'lite':
        prediction = lite_predict(image)
    elif model_choice == 'pro':
        prediction = pro_predict(image)
    else:
        return jsonify({"error": "Invalid model choice"}), 400

    # Store results into database
    prediction_entry = ImgPredictions(uid=uid,
                                      img_name=file_name,
                                      model=model_choice,
                                      prediction=prediction,
                                      upload_time=datetime.now())
    db.session.add(prediction_entry)
    db.session.commit()
    return jsonify({
        'prediction': prediction
    }), 200

@app.route('/viewhistory', methods=['GET', 'DELETE'])
def view_history():
    if request.method == 'GET':
        # Send current user's uid from frontend when request method is GET (request.form.get)
        uid = request.args.get('uid')
        query_result = (db.session.query(
            ImgPredictions.img_name,
            ImgPredictions.model,
            ImgPredictions.prediction,
            ImgPredictions.upload_time
        )
        .filter(ImgPredictions.uid == uid)
        .order_by(desc(ImgPredictions.upload_time))
        .all()
        )

        query_result = [
            {
                "img_name": row.img_name,
                "model": row.model,
                "prediction": row.prediction,
                "upload_time": row.upload_time.isoformat()  # convert datetime to string
            }
            for row in query_result
        ]

        return query_result# jsonify([p.to_dict() for p in query_result])
    elif request.method == 'DELETE':
        # Send current user's uid, the image name, the prediction, and the upload time when request is DELETE (request.form.get)
        uid = request.form.get('uid')
        img_name = request.form.get('img_name')
        prediction = request.form.get('prediction')
        upload_time = request.form.get('upload_time')
        db.session.execute(db.delete(ImgPredictions).where((ImgPredictions.uid == uid) and
                                                           (ImgPredictions.img_name == img_name) and
                                                           (ImgPredictions.prediction == prediction) and
                                                           (ImgPredictions.upload_time == upload_time)))
        db.session.commit()
        return "Deleted an entry from the database."

if __name__ == '__main__':
    app.run()