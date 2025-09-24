# from app import db, app

# with app.app_context():
#     db.create_all()
#     print("Database initialized!")

from app import app
from database import db

def initialize_db():
    with app.app_context():
        db.create_all()
        print("Database initialized!")

if __name__ == "__main__":
    initialize_db()