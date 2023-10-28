# request from client side is received as global server object
from flask import Flask, request, jsonify, render_template
# flask extension for handling cross origin resource sharing(CORS), making cross origin possible.
from flask_cors import CORS
from ESS import InvoiceParser
from io import BytesIO

app = Flask(__name__, template_folder='template')
cors = CORS(app, resources={r"/*": {"origins": "*"}})
# configuring cors headers to content type
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/')
def index():
    return render_template('404.html'), 404


@app.route('/extractInvoice/', methods=['POST'])
def extractInvoice():
    FILE = request.files['file']
    print(FILE)
    if (not FILE) or (FILE.mimetype != 'application/pdf'):
        return jsonify({'error': 'Invalid file type. Please upload a PDF.'})
    invoice = BytesIO(FILE.read())
    parser = InvoiceParser(invoice)
    print(parser)
    response = jsonify(parser.getData())
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response  # return json data to client side


if __name__ == '__main__':
    app.run(debug=True)  # to start flask application
