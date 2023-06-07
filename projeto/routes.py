from flask import Flask, render_template
from projeto import app

@app.route('/', methods=['GET', 'POST'])
def index():
    return render_template('index.html')

@app.route('/login')
def login():
    return render_template('login.html')


@app.route('/registro')
def registro():
    return render_template('registro.html')

