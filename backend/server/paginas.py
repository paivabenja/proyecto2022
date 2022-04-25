from flask import Flask, session, request, redirect, url_for, Blueprint
from flask_login import LoginManager, login_user, login_required, logout_user, current_user

from . import db

paginas = Blueprint('paginas', __name__)

@paginas.route('/')
def home():
    nombre = current_user.nombre if current_user else ''
    return f'<h1>Buenos diiiiiias {nombre}</h1>'