from flask import Flask, session, request, redirect, url_for, Blueprint, jsonify
from flask_login import LoginManager, login_user, login_required, logout_user, current_user
from .peliculas import searchMedia


paginas = Blueprint('paginas', __name__)

@paginas.route('/')
def home():
    nombre = current_user.nombre if current_user else ''
    return f'<h1>Buenos diiiiiias {nombre}</h1>'

@paginas.route('/nombre/<nombre>')
def searchname(nombre):
    media = jsonify( searchMedia(titulo=nombre))
    return media

@paginas.route('/buscar/<params>')
def search(params):
    print(params.split('%20'))
    [plataforma, genero, año] = params.split('%20')
    print(plataforma, genero, año)
    media = jsonify( searchMedia(plataforma=plataforma, genero=genero, año=año))
    return media

