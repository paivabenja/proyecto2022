from flask import Flask, request, redirect, url_for, Blueprint, render_template, flash
from flask_login import login_user, login_required, logout_user, current_user
from users import User, new_user
from app import db

login = Blueprint('login', __name__)

@login.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        usuario = request.form.get('username')
        email = request.form.get('email')
        contraseña = request.form.get('contraseña')

        encontrado = User.query.filter_by(nombre=usuario).first()
        if encontrado:
            print('usuario ya existe')
            flash('usuario ya existe')
            redirect(url_for('login.log_in'))
        else:
            if contraseña != '':
                print('usuario creado')
                flash('usuario creado')
                nu = new_user(usuario, email, contraseña)
                login_user(nu, remember=True)

                return redirect(url_for('login.log_in'))
                '''{'usuario' : usuario,
                    'mail': email,
                    'contraseña' : contraseña}'''
            else:
                flash('contraseña incompleta')
                return redirect(url_for('login.log_in'))
    return render_template('index.html', error='no se encontro usuario', usuario='')

@login.route('/login', methods=['GET', 'POST'])
def log_in():
    if request.method == 'POST':
        email = request.form.get('email')
        contraseña = request.form.get('contraseña')

        encontrado = User.query.filter_by(email=email).first()
        if encontrado:
            if contraseña == encontrado.contraseña:
                print('Logged in successfully!')
                flash('Logged in successfully!')
                login_user(encontrado, remember=True)
                return redirect(url_for('login.log_in'))
            else:
                print('Incorrect password, try again.')
        else:
            print('Email does not exist.')

            return {user}
    return render_template('index.html', error='no logueado', usuario='')