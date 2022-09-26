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
<<<<<<< HEAD
    media.headers.add('access-control-allow-origin','*')
=======
    media.headers.add('access-control-allow-origin', '*')
>>>>>>> backend
    return media

@paginas.route('/buscar', methods=['GET', 'POST'])
def search():
<<<<<<< HEAD
    plataforma = request.args.get('plt', [])
    genero = request.args.get('gnr', [])
    año = request.args.get('yr', {'min': 1900, 'max':2022})
    print(plataforma, genero, año)
    print(searchMedia(plataforma=plataforma, genero=genero, año=año))
    media = jsonify( searchMedia(plataforma=plataforma, genero=genero, año=año))
    media.headers.add('access-control-allow-origin','*')
=======
    plataforma = request.args.get('plt', '')
    genero = request.args.get('gnr', '')
    año = request.args.get('yr', {'min': 1900, 'max':2022})
    if type(año) != dict and len(año)<= 4:
        año = {'min': año, 'max':año}
    print(plataforma, genero)
    print(searchMedia(plataforma=plataforma, genero=genero, año=año))
    media = jsonify( searchMedia(plataforma=plataforma, genero=genero, año=año))
    media.headers.add('access-control-allow-origin', '*')
>>>>>>> backend
    return media

