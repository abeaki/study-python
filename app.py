from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def hello_world():
    return """
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="utf-8" />
                <link rel="stylesheet" href="/static/style.css" />
            </head>
            <body>
                <h1>Hello World</h1>
            </body>
        </html>
    """

@app.route('/hoge', methods=['GET'])
def hoge():
    return 'hoge!'

@app.route('/hoge', methods=['POST'])
def Hoge():
    return 'Hoge!'

@app.route('/hogehoge/')
def hogehoge():
    return 'hogehoge!'

@app.route('/flask/<title>')
def flask(title):
    return render_template('flask.html', title=title)

@app.route('/bs/')
def bootstrap():
    return render_template('bootstrap.html')

@app.route('/vue/')
def vue():
    return render_template('vue.html')