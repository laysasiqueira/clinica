from flask import Flask, render_template, request, redirect, url_for, session
from flask_mysqldb import MySQL
import MySQLdb.cursors
import re

# from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.secret_key = 'your secret key'
 
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'diksha'
app.config['MYSQL_DB'] = 'clinicalogin'
 
mysql = MySQL(app)

# db = SQLAlchemy(app)

from projeto import routes