from flask import request, Blueprint, render_template, jsonify
from flask_login import login_user, login_required, logout_user, current_user
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required
from .users import User, new_user
from werkzeug.security import generate_password_hash, check_password_hash
login = Blueprint('login', __name__)


@login.route('/token', methods=['POST'])
def create_token():
    username = request.json['username']
    email = request.json['email']
    password = request.json['password']
    if email != 'test' and password != 'test':
        return jsonify({'error': 'bad username or password'}), 401

    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)


@login.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        username = request.json['username']
        email = request.json['email']
        password = request.json['password']

        us_existe = User.query.filter_by(nombre=username).first()
        email_existe = User.query.filter_by(nombre=email).first()

        if us_existe or email_existe:
            print('username already exists')
            return jsonify({'error': 'username already exists'}), 409
        elif email_existe:
            print('email already used')
            return jsonify({'error': 'email already used'}), 409
        elif password == '':
                return('password incomplete')
        elif len(password) < 6:
            print('password too short')
            return('password too short')
        elif len(username) < 3:
            return('username too short')
        else:
            nu = new_user(username, email, generate_password_hash(password, method='sha256'))
            print('username creado')
            login_user(nu, remember=True)
            response = jsonify({'username': nu.__asdict__()})
            response.headers.add('Access-Control-Allow-Origin', '*')
            return response


@login.route('/login', methods=['GET', 'POST'])
def log_in():
    if request.method == 'POST':
        email = request.json['email']
        password = request.json['password']

        username = User.query.filter_by(email=email).first()
        
        if username:
            if check_password_hash(username.password, password):
                print('Logged in successfully!')
                login_user(username, remember=True)
                response = jsonify({'username': username.__asdict__()})
                response.headers.add('Access-Control-Allow-Origin', '*')
                return response
            else:
                print('password incorrecta')
                return jsonify({'error': 'incorrect password'}), 401
        else:
            print('username no existe')
            return jsonify({'error': 'username does not exist'}), 401

    return jsonify({'username': 'not logged'})

@login_required
@login.route('/logout')
def logout():
    logout_user(current_user)
    return {'username': 'not logged'}