from flask import Flask, session, request, redirect, url_for, Blueprint
from app import db

paginas = Blueprint('paginas', __name__)

