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

        if us_existe:
            print('username already exists')
            print(User.query.filter_by(nombre=username).first())
            return jsonify({'error': 'username already exists'}), 409
        elif email_existe:
            print('email already used')
            return jsonify({'error': 'email already used'}), 409
        elif password == '':
            return (jsonify({'error': 'password incomplete'}))
        else:
            contraseña = generate_password_hash(password, method='sha256')
            nu = new_user(username, email, contraseña)
            print('usuario creado')
            login_user(nu, remember=True)
            response = jsonify({'user': nu.__asdict__()})
            response.headers.add('Access-Control-Allow-Origin', '*')
            return response


@login.route('/login', methods=['GET'])
def log_in():
    if request.method == 'GET':
        username = request.args.get('username')
        password = request.args.get('password')

        user = User.query.filter_by(nombre=username).first()
        print(username, password, user)
        if user:
            if check_password_hash(user.contraseña, password):
                print('Logged in successfully!')
                login_user(user, remember=True)
                response = jsonify({'user': user.__asdict__()})
                response.headers.add('Access-Control-Allow-Origin', '*')
                return response
            else:
                print('incorrect password')
                return jsonify({'error': 'incorrect password'}), 401
        else:
            print('usuario no existe')
            return jsonify({'error': 'user does not exist'}), 404

    return jsonify({'user': 'not logged'})


@login_required
@login.route('/logout')
def logout():
    logout_user(current_user)
    return {'username': 'not logged'}
