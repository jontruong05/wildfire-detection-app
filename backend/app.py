from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from dotenv import load_dotenv
import os
from pathlib import Path

# Load environment variables from .env file
env_path = Path(__file__).resolve().parent / ".env"
load_dotenv(dotenv_path=env_path)

app = Flask(__name__)

# Configurations
app.config['SQLALCHEMY_DATABASE_URI'] = f"postgresql://postgres:{os.getenv('POSTGRES_PASSWORD')}@localhost:5432/wildfiredetectionapp"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# Tables
class ImgPredictions(db.Model):
    __tablename__ = 'ImgPredictions'

    uid = db.Column(db.String(100), primary_key=True)
    img_name = db.Column(db.String(100), nullable=False)
    prediction = db.Column(db.String(13), nullable=False)
    upload_time = db.Column(db.DateTime, nullable=False)

@app.route('/')
def index():
    return "Welcome to the Wildfire Detection App!"

if __name__ == '__main__':
    app.run()