import PyPDF2
import re


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
    travel_patterns = []
    for pattern in travel_patterns:
        match = re.search(pattern, text)
        if match:
            return match.group(0)
    return None  

def extractSource(text):
    source_patterns = []
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
        r'(\d+\.\d+)\s+kms'
    ]
    for pattern in distance_patterns:
        match = re.search(pattern, text)
        if match:
            return match.group(0)
    return None

def extractAmount(text):
    amount_patterns = []
    for pattern in amount_patterns:
        match = re.search(pattern, text)
        if match:
            return match.group(0)
    return None

def extractTextFromPdf(fileName):
    pdfFileObj=open(fileName,'rb')
    pdfReader=PyPDF2.PdfReader(pdfFileObj)
    length=len(pdfReader.pages)
    pageObj=pdfReader.pages[0]
    return pageObj.extract_text()

if __name__ == "__main__":
    text=extractTextFromPdf('OLA/OLA_1.pdf')
    date=extractBillDate(text)
    distance=extractDistance(text)    
    travelMode=extractTravelMode(text)
    source=extractSource(text)
    Destination=extractDestination(text)
    amount=extractAmount(text)  
    print(date)
 