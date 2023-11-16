import pdfplumber
import json
from address_extractor import ExtractAddress
import genie
class InvoiceParser(ExtractAddress):
    def __init__(self,invoice):
        self.invoice = pdfplumber.open(invoice)
        location = json.load(open('./location.json'))
        super().__init__(location)
        self.address = []
        invoiceText = ''
        for page in self.invoice.pages:
            page=page.dedupe_chars(tolerance=1)
            invoiceText += page.extract_text()+' '
            super().extractWords(page.extract_words())
            super().extractLines()
            self.address.extend(super().getAddress())
        self.invoice.close()
        self.distance=genie.extract_distance(invoiceText)
        self.date=genie.extract_date(invoiceText)
        self.amount=genie.extract_amount(invoiceText)
        
    def getData(self):
        return {'date': list(self.date), 'distance': list(self.distance), 'address':self.address, 'amount': list(self.amount)}
