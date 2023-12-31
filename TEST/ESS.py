import datefinder
import pdfplumber
import re
import json
from address_extractor import ExtractAddress
import os

distance_patterns = [
    r'(\d+\.?\d*)\s*[kK][Mm]',
    r'(\d+\.?\d*)\s*kilometers',
    r'(\d+\.?\d*)\s*kilometres',
]
amount_patterns = [
    r'[Tt]otal[\w\s]+₹\s*(\d+\.?\d*)'
]


class InvoiceParser(ExtractAddress):
    def __init__(self, invoice):
        self.invoice = pdfplumber.open(invoice)
        current_dir = os.path.dirname(__file__)
        location_json_path = os.path.join(current_dir, 'location.json')
        with open(location_json_path, 'r') as json_file:
            location = json.load(json_file)

        # location = json.load(open('./location.json'))
        super().__init__(location)
        invoiceText = ''
        self.address = []
        for page in self.invoice.pages:
            page=page.dedupe_chars(tolerance=1)
            invoiceText += page.extract_text()+' '
            super().extractWords(page.extract_words())
            super().extractLines()
            self.address.extend(super().getAddress())
        self.invoice.close()
        self.textList = invoiceText.split('\n')
        self.distance = set()
        self.date = set()
        self.cost = set()
        
        #It's a feature to have high probability of invoice amount mentioned in the beginning of invoice   
        starting_amount=re.search( r'[$₹]\s*(\d+\.?\d*)',invoiceText)
        if starting_amount:
            self.cost.add(float(starting_amount.group(1)))

        #Check for Total Amount patterns 
        for pattern in amount_patterns:
            for amount in re.findall(pattern, invoiceText):
                self.cost.add(float(amount))

        for text in self.textList:
            self.findDates(text)
            self.findDistanceTravelled(text)

    def findDates(self, text):
        dates = list(datefinder.find_dates(text, strict=True))
        for d in dates:
            self.date.add(d.strftime("%d-%m-%Y"))

    def findDistanceTravelled(self, text):
        for pattern in distance_patterns:
            for km in re.findall(pattern, text):
                self.distance.add(float(km))

    def getData(self):
        return {'date': list(self.date), 'distance': list(self.distance), 'address': self.address, 'amount': list(self.cost)}
