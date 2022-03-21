from flask import Flask, render_template, session, request
import flask_sqlalchemy import SQLAlchemy
from app import db

class users(db.Model):
    _id = db.Column('id', db.Integer, primary_key=True)
    nombre = db.Column(db.String(30))
    email = db.Column(db.String(100))
    contraseña = db.Column(db.String(30))

    def __init__(self, nombre, contraseña, email):
        self.nombre = nombre
        self.email = email
        self.contraseña = contraseña