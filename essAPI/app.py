from flask import Flask,request,jsonify, render_template #request from client side is received as global server object
from flask_cors import CORS # flask extension for handling cross origin resource sharing(CORS), making cross origin possible.
from ESS import InvoiceParser
from io import BytesIO

app = Flask(__name__, template_folder='template')
cors = CORS(app, resources={r"/*": {"origins": "*"}})
app.config['CORS_HEADERS'] = 'Content-Type' #configuring cors headers to content type

@app.route('/')
def index():
    return render_template('404.html'), 404
    
@app.route('/extractInvoice/',methods=['POST'])
def extractInvoice():
    FILE=request.files['file']
    if (not FILE) or (FILE.mimetype != 'application/pdf'):
       return jsonify({'error': 'Invalid file type. Please upload a PDF.'})
    invoice=BytesIO(FILE.read())
    parser=InvoiceParser(invoice)
    response=jsonify(parser.getData())
    response.headers.add('Access-Control-Allow-Origin', '*')
    return  response  #return json data to client side
    
if __name__=='__main__':
    app.run(debug=True) #to start flask application