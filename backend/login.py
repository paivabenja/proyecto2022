from flask import Flask, session, request, redirect, url_for, Blueprint
from flask_login import login_user, login_required, logout_user, current_user
from users import new_user
from app import db

login = Blueprint('login', __name__)

@login.route('/signup', methods=['GET', 'POST'])
def signup():
    if 'user' in session:
        return redirect(url_for('/'))
    elif request.method == 'POST':
        session.permanent = True
        usuario = request.form['usuario']
        mail = request.form['mail']
        contraseña = request.form['contraseña']
        session['usuario'] = usuario

        encontrado = users.query.filter_by(name=usuario).first()
        if encontrado:
            session['mail'] = usuario.email
        else:
            new_user(usuario, mail, contraseña)

    return {'usuario' : usuario,
            'mail': mail,
            'contraseña' : contraseña}
    return {}

@login.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.form.get('email')
        contraseña = request.form.get('contraseña')

        user = User.query.filter_by(email=email).first()
        if user:
            if check_password_hash(user.password, password):
                flash('Logged in successfully!', category='success')
                login_user(user, remember=True)
                return redirect(url_for('views.home'))
            else:
                flash('Incorrect password, try again.', category='error')
        else:
            flash('Email does not exist.', category='error')

    return render_template("login.html", user=current_user)