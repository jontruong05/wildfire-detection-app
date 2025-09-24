# from app import db, app

# with app.app_context():
#     db.create_all()
#     print("Database initialized!")

def initialize_db():
    from app import db
    db.create_all()
    print("Database initialized!")