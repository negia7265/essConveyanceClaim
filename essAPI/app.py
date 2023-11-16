# request from client side is received as global server object
from flask import Flask, request, jsonify, render_template
# flask extension for handling cross origin resource sharing(CORS), making cross origin possible.
from flask_cors import CORS
import ESS 
import ocr 
from io import BytesIO

app = Flask(__name__, template_folder='template')
cors = CORS(app, resources={r"/*": {"origins": "*"}})
app.config['CORS_HEADERS'] = 'Content-Type' # configuring cors headers to content type

@app.route('/')
def index():
    return render_template('404.html'), 404

@app.route('/extractInvoice/', methods=['POST'])
def extractInvoice():
    FILE = request.files['file']
    if not FILE:
        return jsonify({'error': 'File Not Uploaded'})
    if FILE.mimetype!='application/pdf' and FILE.mimetype.startswith('image')==False:
        return jsonify({'error': 'Invalid file type.'})

    if FILE.mimetype == 'application/pdf' :
        invoice = BytesIO(FILE.read())
        parser = ESS.InvoiceParser(invoice)
    else:        
        imgs=[]
        for file in request.files.getlist("file"):
            imgs.append(file.read())
        parser = ocr.InvoiceParser(imgs[:3]) #process first three invoice 
    response = jsonify(parser.getData())
    response.headers.add('Access-Control-Allow-Origin', '*')
    return  response  #return json data to client side
  
if __name__=='__main__':
    app.run(debug=True) # Please do not set debug=True in production