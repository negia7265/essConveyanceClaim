import ocr
import time
import cv2
import ESS
from io import BytesIO

def try_ocr():
    f=open('page.png','rb')
    img=[f.read()]
    parser = ocr.InvoiceParser(img) 
    end_time = time.time()
    print(parser.getData())

def try_invoice():
    f=open('OLA_1.pdf','rb')
    invoice=BytesIO(f.read())
    parser = ESS.InvoiceParser(invoice) 
    end_time = time.time()
    print(parser.getData())

start_time = time.time()
try_ocr()
end_time = time.time()
elapsed_time = end_time - start_time
print('time taken :', round(elapsed_time,2),'seconds')
