from flask import Flask, render_template
from projeto import app


@app.route('/', methods=['GET', 'POST'])
def index():
    return render_template('index.html')
