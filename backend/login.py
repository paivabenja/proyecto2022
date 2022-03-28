from flask import Flask, session, request, redirect, url_for, Blueprint
from users import users, db

lg = Blueprint('lg', __name__)

@lg.route('/signup', methods=['GET', 'POST'])
def signup():
    return {}

@lg.route('/login', methods=['GET', 'POST'])
def login():
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
            usr = users(usuario, contraseña, mail)
            db.session.add(usr)
            db.session.commit()

    return {'usuario' : usuario,
            'mail': mail,
            'contraseña' : contraseña}