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
    media.headers.add('access-control-allow-origin','*')
    return media

@paginas.route('/buscar', methods=['GET', 'POST'])
def search():
    plataforma = request.args.get('plt', [])
    genero = request.args.get('gnr', [])
    año = request.args.get('yr', {'min': 1900, 'max':2022})
    print(plataforma, genero, año)
    print(searchMedia(plataforma=plataforma, genero=genero, año=año))
    media = jsonify( searchMedia(plataforma=plataforma, genero=genero, año=año))
    media.headers.add('access-control-allow-origin','*')
    return media

