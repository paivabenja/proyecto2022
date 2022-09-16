from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager
from os import path

db = SQLAlchemy()
DB_NAME = 'users.db'

def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = f'sqlite:///../../backend/server/{DB_NAME}'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.secret_key = 'keloke'
    db.init_app(app)

    from .login import login
    from .paginas import paginas

    app.register_blueprint(login, url_prefix='/')
    app.register_blueprint(paginas, url_prefix='/')

    from .users import User
    
    login_manager = LoginManager()
    login_manager.login_view = 'login.log_in'
    login_manager.init_app(app)

    @login_manager.user_loader
    def load_user(id):
        return User.query.get(int(id))

    create_database(app)

    return app




def create_database(app):
    if not path.exists('backend/' + DB_NAME):
        db.create_all(app=app)
        print('Base de datos creada')