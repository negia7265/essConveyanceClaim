import PyPDF2
import re
import os 

def extractBillDate(text):
    date_patterns = [
        r'\d{2}[/]\d{2}[/]\d{4}',  # Match dates like 01/15/2023
        r'\d{4}[-]\d{1,2}[-]\d{1,2}',  # Match dates like 2023-01-15        
        r'\d{1,2} (?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec), \d{4}', # Match dates like 10 Dec, 2018
        r'(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) \d{1,2}th \d{4}', # Match dates like Sep 12th 2023
        r'(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) \d{1}, \d{4}', # Match dates like  Jan 22, 2022 
    ]
    for pattern in date_patterns:
        match = re.search(pattern, text)
        if match:
            return match.group(0)
    return None  

def extractTravelMode(text):
    travel_patterns = [
        
    ]
    for pattern in travel_patterns:
        match = re.search(pattern, text)
        if match:
            return match.group(0)
    return None  

def extractSource(text):
    source_patterns = [
       r'^(\w*\s*[\#\-\,\/\.\(\)\&]*)+',
    ]
    for pattern in source_patterns:
        match = re.search(pattern, text)
        if match:
            return match.group(0)
    return None

def extractDestination(text):
    destination_patterns = []
    for pattern in destination_patterns:
        match = re.search(pattern, text)
        if match:
            return match.group(0)
    return None

def extractDistance(text):
    distance_patterns = [
        r'\d+\.?\d*[\s\n]*km',
        r'\d+\.?\d*[\s\n]*kilometers',
    ]
    for pattern in distance_patterns:
        match = re.search(pattern, text)
        if match:
            return match.group(0)
    return None

def extractAmount(text):
    amount_patterns = [
       r'[$₹]\s*\d+\.?\d*',
    ]
    for pattern in amount_patterns:
        match = re.search(pattern, text)
        if match:
            return match.group()
    return None

def extractTextFromPdf(fileName):
    pdfFileObj=open(fileName,'rb')
    pdfReader=PyPDF2.PdfReader(pdfFileObj)
    length=len(pdfReader.pages)
    text=[]
    t=''
    for i in range(0,length):
       text.append(pdfReader.pages[i].extract_text())
    for txt in text:
        for w in txt: 
            if w != '\n':
              t+=w
            else:
              t+=' '
    return text

if __name__ == "__main__":
    ola='../OLA'
    rapido='../RAPIDO'
    uber='../UBER'
    length=len(os.listdir(ola))
    for i in range(1,2):
      text=extractTextFromPdf(ola+'/OLA_'+str(i)+'.pdf')
      date=extractBillDate(text[0])
      distance=extractDistance(text[0])    
      travelMode=extractTravelMode(text)
      source=extractSource(text[0])
      Destination=extractDestination(text[0])
      amount=extractAmount(text[0])  
      print(source)

# import pdfplumber
# with pdfplumber.open("../UBER/UBER_1.pdf") as pdf:
#     first_page = pdf.pages[0]
#     im=first_page.to_image()
#     im.draw_rects(first_page.extract_words())
#     im.show()
# with pdfplumber.open("../RAPIDO/RAPIDO_1.pdf") as pdf:
#     first_page = pdf.pages[0]
#     print(first_page.extract_text())
# pdf=pdfplumber.open("../RAPIDO/RAPIDO_1.pdf")
# print(pdf.pages[0].extract_text())
