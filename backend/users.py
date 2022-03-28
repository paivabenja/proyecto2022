from flask import Flask, render_template, session, request, Blueprint, current_app
from flask_sqlalchemy import SQLAlchemy

database = Blueprint('database', __name__)

current_app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database/users.db'
current_app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(database)

class users(db.Model):
    _id = db.Column('id', db.Integer, primary_key=True)
    nombre = db.Column(db.String(30))
    email = db.Column(db.String(100))
    contraseña = db.Column(db.String(30))

    def __init__(self, nombre, contraseña, email):
        self.nombre = nombre
        self.email = email
        self.contraseña = contraseña
    
    def __str__(self):
        return f'{self.id} {self.nombre} {self.mail} {self.contraseña}'