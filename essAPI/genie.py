import datefinder
import pytesseract
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
from nltk.stem import PorterStemmer
import re # For preprocessing
from nltk.stem import WordNetLemmatizer
import cv2
import numpy as np

lemmatizer = WordNetLemmatizer()
stop_words = set(stopwords.words('english'))
stop_words.remove('m')  #meter word must not be removed during preprocessing

char_list='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789,." ":'

def preprocess_text(text):
    #remove punctuation mark from the text
    text=text.translate(str.maketrans('','',''',!"#%&'()*+-/:;<=>?@[\]^_`{|}~'''))
    #remove new line characters
    text=text.replace('\n', ' ')
    # lower case each letter of the word
    text=text.lower()
    #including space in beween {num}{word} 
    text=re.sub(r'(\d+)([a-z]+)', r'\1 \2', text)
    # split the words into tokens
    tokens=word_tokenize(text)
    # remove stop words 
    tokens = [word for word in tokens if word not in stop_words]
    #all words to root words
    stemmer = PorterStemmer()
    tokens = [stemmer.stem(word) for word in tokens]
    #lemmatization
    lemmatized = [lemmatizer.lemmatize(token) for token in tokens]
    return lemmatized 

def extract_distance(text):
    token=preprocess_text(text)
    distance=set()
    km={'km','kilomet','kilometr'}
    pattern = re.compile('[0-9]*.?[0-9]+$')
    for i in range(len(token)-1):
      if pattern.match(token[i]) and token[i+1] in km:
          distance.add(float(token[i]))
    return distance


def extract_date(text):
    dates = list(datefinder.find_dates(text, strict=True))
    date=set()
    for d in dates:
        date.add(d.strftime("%d-%m-%Y"))
    return date

def extract_amount(text): #it's just a dummy function (need to write algorithms to extract amount accurately)
    starting_amount=re.search( r'[$₹]\s*(\d+\.?\d*)',text)
    cost=set()
    if starting_amount:
        cost.add(float(starting_amount.group(1)))
    return cost

def get_img_data(img):
        box=pytesseract.image_to_data(img,output_type=pytesseract.Output.DICT,config=f'-c tessedit_char_whitelist={char_list}')
        n_boxes = len(box['level'])
        data={}
        for i in range(n_boxes):
            if box['top'][i] not in d:
                if box['text'][i]=='':
                    data[box['top'][i]]=[]
                else:
                    data[box['top'][i]]=[[box['left'][i],box['text'][i]]]
            elif data['text'][i]!='':
                data[box['top'][i]].append([box['left'][i],box['text'][i]])      
        return data


def getBox(img):
    # Specify structure shape and kernel size.Kernel size increases or decreases the area of the rectangle to be detected. 
    rect_kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (1, 0))   
    # Appplying dilation on the threshold image 
    dilation = cv2.dilate(img, rect_kernel, iterations = 1) 
    # Finding contours 
    contours, _ = cv2.findContours(dilation,  cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_NONE) 
    boxes=[]
    for cnt in contours[::-1]: 
        x, y, w, h = cv2.boundingRect(cnt) 
        cropped = img[y:y + h, x:x + w]
        boxes.append(pytesseract.image_to_string(cropped,config=f'--oem 3 --psm 1 -c tessedit_char_whitelist={char_list}'))
    return boxes


def preprocess_img(img):
    img=cv2.imdecode(np.frombuffer(img, np.uint8), cv2.IMREAD_UNCHANGED)
    img=cv2.cvtColor(img, cv2.COLOR_RGB2GRAY) # Convert the image to gray scale 
    img = cv2.fastNlMeansDenoising( img, None, 15, 7, 21 )  #Denoising Image 
    img=cv2.GaussianBlur(img, (3,3),1) #blur
    _,img = cv2.threshold(img, 0, 255, cv2.THRESH_OTSU | cv2.THRESH_BINARY_INV) 
    #Image Erosion and Dilation
    kernel =np.ones((1,1), np.uint8)
    ero = cv2.erode(img, kernel, iterations= 1)
    return cv2.dilate(ero, kernel, iterations=1)


def get_text(img):
    return pytesseract.image_to_string(img,lang='eng_ruppe+eng') # config='--oem 3 --psm 1'