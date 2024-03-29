from .. import db
from flask_login import UserMixin


class User(db.Model, UserMixin):
    id = db.Column('id', db.Integer, primary_key=True)
    nombre = db.Column(db.String(30))
    email = db.Column(db.String(100))
    contraseña = db.Column(db.String(100))
    watchlist = db.Column(db.String(100), nullable=False)

    def __init__(self, nombre, contraseña, email, watchlist=[]):
        self.nombre = nombre
        self.email = email
        self.contraseña = contraseña
        self.watchlist = watchlist

    def __str__(self):
        return f'{self.id} {self.nombre} {self.email} {self.contraseña}'

    def __asdict__(self):
        return {'id': self.id, 'nombre': self.nombre, 'email': self.email, 'contraseña': self.contraseña}

    def string_watchlist(self):
        return self.watchlist


def new_user(nombre, email, contraseña):
    user = User(nombre=nombre, email=email,
                contraseña=contraseña, watchlist='[]')
    db.session.add(user)
    db.session.commit()
    return user
