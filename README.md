<h1 align="center"> ESS convayence claim simplification  🧾 </h1>

### Solution ✅ to automate the  prefilling of the form of a portal with cab invoice(transport bill) PDF details. The filling/ uploading of bill details include bill date, mode of convince( travel mode) such as {OLA , UBER or other aggregator services }, select purpose (office to home or home to office) , pickup address , Destination address, Distance, Amount . An invoice document as proof is uploaded which requires manual task to extract and fill details from it, so there is need for extraction of the data from it to save time and efforts with correctness.

### 🔗 Collection of Cab invoice pdf's used for testing [link](https://drive.google.com/drive/folders/1bg5GbeJ-wP5Ril4ywik_4jbotRGcMMEK?usp=share_link)  


<h1 align="center">  Designs 👨‍💻 </h1>
<img src="./System%20Designs/HLD.jpg" width="100%"/>

## Getting Started With Local Development Setup

##  prerequisite: install  [NPM](https://npmjs.com) , [Python](https://www.python.org/downloads/) 
###  React Vite Form 
```bash
git clone https://github.com/panwar2001/essConveyanceClaim.git
cd essClient 
npm install
npm run dev
```
### Flask api
```bash
pip install flask Flask-Cors pdfplumber
cd essAPI
python3 app.py
```


