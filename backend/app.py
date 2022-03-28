from flask import Flask, session, request
from flask_sqlalchemy import SQLAlchemy
from datetime import timedelta
from login import lg
from users import database

app = Flask(__name__)
app.permanent_session_lifetime = timedelta(minutes=15)
app.register_blueprint(lg, url_prefix='login')
app.register_blueprint(database, url_prefix='db')
app.secret_key = 'keloke'


@app.route('/', methods=['GET', 'POST'])
@app.route('/home')
def inicio():
    if 'usuario' in session:
        usuario = session['usuario']
    else:
        usuario = 'no logueado'
    return {'usuario': usuario}


if __name__ == '__main__':
    app.run(debug=True)