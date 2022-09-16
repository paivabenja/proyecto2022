from flask import Flask, request, redirect, url_for, Blueprint, render_template, flash
from flask_login import login_user, login_required, logout_user, current_user
from .users import User, new_user
from . import db
from werkzeug.security import generate_password_hash, check_password_hash

login = Blueprint('login', __name__)

@login.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        usuario = request.form.get('username')
        email = request.form.get('email')
        contraseña = request.form.get('contraseña')
        contraseña2 = request.form.get('contraseña2')

        us_existe = User.query.filter_by(nombre=usuario).first()
        email_existe = User.query.filter_by(nombre=email).first()
        
        if us_existe or email_existe:
            print('usuario ya existe')
            flash('usuario ya existe')
        elif email_existe:
            print('email ya usado')
            flash('email ya usado')
        elif contraseña != contraseña2:
            flash('las constraseñas no coinciden')
        elif contraseña == '':
                flash('contraseña incompleta')
        elif len(contraseña) < 6:
            print('contraseña muy corta')
            flash('contraseña muy corta')
        elif len(usuario) < 3:
            flash('nombre de usuario muy corto')
        else:
            nu = new_user(usuario, email, generate_password_hash(contraseña, method='sha256'))
            print('usuario creado')
            flash('usuario creado')
            login_user(nu, remember=True)
            return redirect(url_for('login.log_in'))

    return render_template('index.html', pagina='signup', error='no se encontro usuario', usuario='')

@login.route('/login', methods=['GET', 'POST'])
def log_in():
    if request.method == 'POST':
        email = request.form.get('email')
        contraseña = request.form.get('contraseña')

        usuario = User.query.filter_by(email=email).first()
        if usuario:
            if check_password_hash(usuario.contraseña, contraseña):
                print('Logged in successfully!')
                flash('Logged in successfully!')
                login_user(usuario, remember=True)
                return redirect(url_for('login.log_in'))
            else:
                print('Incorrect password, try again.')
                flash('Incorrect password, try again.')
        else:
            print('Email does not exist.')
            flash('Email does not exist.')

    return render_template('index.html', pagina='login', error='no logueado', usuario='')

@login_required
@login.route('/logout')
def logout():
    logout_user(current_user)
    return redirect(url_for('paginas.home'))