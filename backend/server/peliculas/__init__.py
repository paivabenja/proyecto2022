from .request import search, searchByName
# from .pelicula import Media
#https://www.justwatch.com/

from flask_sqlalchemy import SQLAlchemy

from os import path

db = SQLAlchemy()
DB_NAME = 'media.db'

def create_database(app):
    if not path.exists('backend/' + DB_NAME):
        db.create_all(app=app)
        print('Base de datos creada')

def searchMedia(titulo='', plataforma=[], genero=[], año=[]):
    if titulo:
        data = searchByName(titulo)
        for i in data:
                title = i['node']['content']['title']
                release_year = i['node']['content']['originalReleaseYear']
    else:
        data = search(plataforma, genero, año)
    return data
