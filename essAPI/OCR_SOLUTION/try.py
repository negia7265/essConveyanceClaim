# import spacy
# from spacy import displacy

# NER = spacy.load("en_core_web_sm")
# raw_text="₹2596  CRN2554661943   Thanks for travelling with us, Ravi    10 Dec, 2018       Ride Details       Hari Charan  Mahato      Base Fare   168 km, 9  hours  Bill Details      ₹2180  NA    165 km 10hr  10min   Total  Billable  Distance  168.0  km (Minimum chargeable km)     Additional  Time  Fare*   1 hour x ₹100/hour     Driver Allowance   ₹125 x 1 day    ₹100    ₹125  Sedan  - White Dzire      Tour            Round Trip   10:35  AM Tagore Park, EM  Bypass,   Naskarhat,  Kasba,  Kolkata  Ride  Fare  ₹2405    Taxes  ₹152.38   Total Bill  (rounded  off) ₹2557  Insurance  premium  ₹39      08:44  PM Gitanjali Stadium,  Rash   Behari Ave, Shantipally,  Sector  E, East  Kolkata  Twp,  Kolkata  Total  Payable   *For trip exceeding 9.0 hours      ₹2596    Please  Note:  1) Insurance  Service  is not provided  by ANI Technologies  Private  Limited.  Invoice  for the insurance  fee collected  for the ride will be  raised by the respective Insurance  company.  Original Tax Invoice     Driver Trip Invoice   Hari Charan Mahato NA  Ola Sedan , Dzire Tour  WB04G2119   Operator  State/UT:  West  Bengal      Service Tax Category: Renting of  motor   cab  SAC Code:  996423     Invoice  ID DIEYGVTPZ99610  Invoice Date  10/12/2018     Customer  Name  Ravi  Mobile Number  +919873293897     Pickup  Address  Tagore  Park,  EM Bypass,  Naskarhat,  Kasba, Kolkata     Description  Amount  (INR)     Customer Ride Number - CRN2554661943     Ride  Fee ₹2104    CGST  2.5%     SGST  2.5%    ₹52.6      ₹52.6    Subtotal  ₹2209 .2    Total  Customer Ride  Fare    ₹2209 .2    Authorised Signatory                   Please  note:  1. This invoice  is issued  on behalf  of Transport  Service  Provider.  ANI Technologies  Private  Limited  acts in the capacity  of an Electronic  Commerce  Operator  as per Section  9(5) of the Central  Goods  & Service  Tax Act, 2017  & corresponding  Section  5(5) of the State  GST laws.  2. This invoice  has been  signed  by the Authorized  signatory  of ANI Technologies  Private  Limited  only limited  purposes  of complying  as an Electronic  Commerce  Operator.  Original Tax Invoice         ANI Technologies Pvt. Ltd.   ANI Technologies  Pvt. Ltd.,  Infinity  Think  Tank,  Tower -1, 2nd floor, Plot -A3, Block -GP,Sector -5,  Salt Lake,Kolkata :  700091  State GSTIN:  19AAJCA1389G1ZG   SAC Code:  999799   Service Tax Category: Business  Auxiliary   Service     Invoice  ID CIEYGVTPZ99610  Invoice Date  10/12/2018     Customer  Name  Ravi  Mobile Number  +919873293897     Supply  Address  ANI Technologies  Pvt. Ltd.,  Infinity  Think  Tank,  Tower -1, 2nd floor,  Plot-A3, Block -GP,Sector -5, Salt  Lake,Kolkata : 700091     Description  Amount  (INR)     Ola Convenience Fee - CRN2554661943     Convenience  Fee (Ride)  ₹316    CGST  9.0%     SGST  9.0%    ₹28.44       ₹28.44     Total  Convenience Fee  Fare    ₹372.8 8    Authorised Signatory "
# text1= NER(raw_text)
# for word in text1.ents:
#     print(word.text,word.label_)
#import json 
#import requests
# url='https://ocr.asprise.com/api/v1/receipt'
# image='try.png'
# res=requests.post(url,
#               data={
#                  'api_key':'TEST',
#                  'recognizer':'auto',
#                  'ref_no':'oct_python_123'
#               },
#               files={
#                 'file':open(image,'rb')
#               })
# with open('response.json','r') as f:
#     data=json.load(f)
#print(data['receipts'])
#import pdfplumber
# with pdfplumber.open("../UBER/UBER_1.pdf") as pdf:
#     first_page = pdf.pages[0]
#     im=first_page.to_image()
#     im.draw_rects(first_page.extract_words())
#     im.show()

# import locationtagger
# import nltk 
# nltk.download('punkt')
# nltk.download('averaged_perceptron_tagger')
# nltk.download('maxent_ne_chunker')
# nltk.download('words')
from dateparser import parse
text='14 Mar, 2018'
print(parse(text))

# entities = locationtagger.find_locations(text = text)
