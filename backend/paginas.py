from flask import Flask, session, request, redirect, url_for, Blueprint
from . import db

paginas = Blueprint('paginas', __name__)

@paginas.route('/')
def home():
    return '<h1>Buenos diiiiiias</h1>'