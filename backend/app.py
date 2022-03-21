from flask import Flask, render_template, session, request
import jyserver
import flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.sqlite3'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.secret_key = 'keloke'

db = SQLAlchemy(app)


@app.route('/', methods=['GET', 'POST'])
@app.route('/home')
def inicio():
    return render_template('index.html')

@app.route('/signup', methods['GET', 'POST'])
def signup():
    return render_template('signup.html')




if __name__ == '__main__':
    app.run(debug=True)