from flask import Flask,request,jsonify #request from client side is received as global server object
from flask_cors import CORS # flask extension for handling cross origin resource sharing(CORS), making cross origin possible.
import base64
from io import BytesIO
app=Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})
app.config['CORS_HEADERS'] = 'Content-Type' #configuring cors headers to content type
@app.route('/')
def index():
    # return 
@app.route('/',methods=['POST'])
def description():
    if request.method == 'POST':       # checking if PDF received through post method
    response=''
    response.headers.add('Access-Control-Allow-Origin', '*')
    return  response  #return json of data to client side

if __name__=='__main__':
    app.run(debug=True) #to start flask application