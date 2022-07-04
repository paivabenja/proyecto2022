from .request import Request
from .constants import __author__,  __version__
from .pelicula import Media
#https://www.justwatch.com/

from flask_sqlalchemy import SQLAlchemy

from os import path

db = SQLAlchemy()
DB_NAME = 'media.db'

def create_database(app):
    if not path.exists('backend/' + DB_NAME):
        db.create_all(app=app)
        print('Base de datos creada')