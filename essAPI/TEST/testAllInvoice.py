import datefinder
from quantulum3 import parser
import pdfplumber
import os
import re
import json
import pytest

distance_patterns = [
        r'(\d+\.?\d*)[\s\n]*[kK]m',
        r'(\d+\.?\d*)[\s\n]*kilometers',
    ]
amount_patterns = [
        r'[Tt]otal[^&]*₹(\d+\.?\d*)'
   ]
class parseInvoice:
    def __init__(self,filePath):
        self.invoice=pdfplumber.open(filePath)
        l=len(self.invoice.pages)
        text=''
        for i in range(l):
          text+=self.invoice.pages[i].extract_text()+'\n'
        self.textList=text.split('\n')
        self.distance=set()
        self.date=set()
        self.cost=set()
        for pattern in amount_patterns:
          for amount in re.findall(pattern, text):
             self.cost.add(amount)

        for text in self.textList:
            #date extraction
            dates=list(datefinder.find_dates(text, strict=True))
            for d in dates:
                self.date.add(d.strftime("%d-%m-%Y"))
            
            #Distance extraction      
            
            #First Try by finding common Regular expression such as Kms or Km 
            for pattern in distance_patterns:
                 for km in re.findall(pattern, text):
                   self.distance.add(float(km))

            #Then if distance not found using regular expression try using quantulum3 package for extracting distance
            self.dist=parser.parse(text)
            for d in self.dist:
               if d.unit.name=='kilometre':   # Kilometre extraction
                  self.distance.add(float(d.value))
             # elif d.unit.name=='Indian Ruppe':  # indian ruppee extraction             
                # self.cost.add(self.d.value)
    def getDate(self):
       return self.date
    def getDistance(self):
       return self.distance
    def getCost(self):
       return self.cost

with open("testDates.json") as f:
    DATES=json.load(f)

@pytest.mark.parametrize("dir", ['OLA','RAPIDO','UBER'])
def testAllInvoice(dir):
  invoiceNames=os.listdir(f'../DATASET/{dir}')
  for fileName in invoiceNames:
    invoice=parseInvoice(f'../DATASET/{dir}/{fileName}')
    dates=invoice.getDate()
    print(dates)
    assert  DATES[fileName][0] in dates 
testAllInvoice('OLA')
testAllInvoice('RAPIDO')
testAllInvoice('UBER')

