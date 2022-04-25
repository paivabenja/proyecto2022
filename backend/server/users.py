from . import db
from flask_login import UserMixin

class User(db.Model, UserMixin):
    id = db.Column('id', db.Integer, primary_key=True)
    nombre = db.Column(db.String(30))
    email = db.Column(db.String(100))
    contraseña = db.Column(db.String(30))

    def __init__(self, nombre, contraseña, email):
        self.nombre = nombre
        self.email = email
        self.contraseña = contraseña
    
    def __str__(self):
        return f'{self.id} {self.nombre} {self.mail} {self.contraseña}'

def new_user(nombre, email, contraseña):
    user = User(nombre=nombre, email=email, contraseña=contraseña)
    db.session.add(user)
    db.session.commit()
    return user