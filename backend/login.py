from flask import Flask, render_template, session, request
import flask_sqlalchemy import SQLAlchemy
from app import app

@app.route('/login', methods['GET', 'POST'])
def login():
    if request.method == 'POST':
        usuario = request.form['nombre']
        mail = request.form['mail']
        contraseña = request.form['contraseña']
        session['usuario'] = usuario

    return render_template('login.html')