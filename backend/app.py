from flask import Flask, session, request
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager
from os import path

db = SQLAlchemy()
DB_NAME = 'users.db'

def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = f'sqlite:///../{DB_NAME}'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.secret_key = 'keloke'
    db.init_app(app)

    from login import login
    from paginas import paginas

    app.register_blueprint(login, url_prefix='/')
    app.register_blueprint(paginas, url_prefix='/')

    create_database(app)

    return app



def create_database(app):
    if not path.exists('backend/' + DB_NAME):
        db.create_all(app=app)
        print('Base de datos creada')

'''
@app.route('/', methods=['GET', 'POST'])
@app.route('/home')
def inicio():
    if 'usuario' in session:
        usuario = session['usuario']
    else:
        usuario = 'no logueado'
    return {'usuario': usuario}


if __name__ == '__main__':
    app.run(debug=True)'''