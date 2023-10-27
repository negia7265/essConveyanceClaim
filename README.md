[![GitHub last commit](https://img.shields.io/github/last-commit/panwar2001/essConveyanceClaim?label=Last%20commit&color=green&logo=git&logoColor=white&style=flat-square)](https://github.com/Defcon27/Data-Analysis-of-Indian-Automobile-dataset-using-Machine-Learning-in-R)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/panwar2001/essConveyanceClaim?label=Code%20size&logo=python&logoColor=white&style=flat-square)
![GitHub repo size](https://img.shields.io/github/repo-size/panwar2001/essConveyanceClaim?label=Repo%20size&color=red&logo=github&logoColor=white&style=flat-square)
![GitHub stars](https://img.shields.io/github/stars/panwar2001/essConveyanceClaim?label=Stars&logo=github&style=flat-square)
[![Lines Of Code](https://tokei.rs/b1/github/panwar2001/essConveyanceClaim?category=code)](https://github.com/panwar2001/essConveyanceClaim/)
![GitHub issues](https://img.shields.io/github/issues/panwar2001/essConveyanceClaim?label=Issues&color=yellow&logo=github&style=flat-square)
<!-- [![Build Status](https://travis-ci.org/LexPredict/lexpredict-lexnlp.svg?branch=master)](https://travis-ci.org/LexPredict/lexpredict-lexnlp) -->
<!-- [![Coverage Status](https://coveralls.io/repos/github/panwar2001/essConveyanceClaim/badge.svg?branch=main)](https://coveralls.io/github/panwar2001/essConveyanceClaim/) -->
<!-- [![Docs](https://readthedocs.org/projects/lexpredict-lexnlp/badge/?version=docs-0.1.6)](http://lexpredict-lexnlp.readthedocs.io/en/docs-0.1.6/) -->

<h1 align="center"> ESS conveyance claim simplification  🧾 </h1>


### Solution ✅ to automate the  prefilling of the form of a portal with cab invoice(transport bill) PDF details. The filling/ uploading of bill details include bill date, mode of convince( travel mode) such as {OLA , UBER or other aggregator services }, select purpose (office to home or home to office) , pickup address , Destination address, Distance, Amount . An invoice document as proof is uploaded which requires manual task to extract and fill details from it, so there is need for extraction of the data from it to save time and efforts with correctness.

### 🔗 Collection of Cab invoice pdf's used for testing [link](https://drive.google.com/drive/folders/1bg5GbeJ-wP5Ril4ywik_4jbotRGcMMEK?usp=share_link)  

<br>

### 🖥️ Technologies and Tools used
![Python Badge](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![Javascript](https://img.shields.io/badge/javascript-grey?style=for-the-badge&logo=javascript)
![React](https://img.shields.io/badge/react-grey?style=for-the-badge&logo=react)
![Node.JS](https://img.shields.io/badge/Node.js-grey?style=for-the-badge&logo=node.js)
![Flask](https://img.shields.io/badge/Flask-grey?style=for-the-badge&logo=flask)

#### 📊 Get Presentation Here  
[![PPT](https://img.shields.io/badge/PRESENTATION-D83B01.svg?&style=for-the-badge&logo=microsoft-powerpoint&logoColor=white)]()


<p><br><p>


<h1 align="center">  Designs 👨‍💻 </h1>
<h2>ESS conveyance claim simplification HIGH LEVEL DESIGN</h2>
<img src="./System%20Designs/ess%20high%20level%20design.jpg" width="100%"/>
<h2>ESS conveyance claim simplification LOW LEVEL DESIGN</h2>
<img src="./System%20Designs/ess%20low%20level%20design.jpg" width="100%"/>

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

# Testing using pytest framework
```bash
pip install pytest pytest-html
cd essAPI/TEST
pytest --html=report.html test.py
```
> ### It will generate a html result page of tests run on all the INVOICE


## 🐳 Docker Setup
<!-- 
```bash
# Build Docker Image
docker build -t ess-conveyance-simplify -f docker/Dockerfile .

# Run Docker Image as Service
docker run -dit -p 3000:3000 --restart=always --name=ess-simplify ess-simplify

# Get Docker Container Logs
docker logs ess-simplify

# Access make-sense: http://localhost:5173/
``` -->


# Contribution Guide

### 💬 Submit Feedback
The feedback should be submitted by creating an issue on GitHub [issues](https://github.com/panwar2001/essConveyanceClaim/issues).
Select the related template (bug report, feature request, or custom) and add the corresponding labels.

### 🐞 Fix Bugs
You may look through the GitHub [issues](https://github.com/panwar2001/essConveyanceClaim/issues) for bugs.

### 💡 Implement Features
You may look through the GitHub [issues](https://github.com/panwar2001/essConveyanceClaim/issues) for feature requests.

### 🚀 Pull Requests (PR)
- Fork the repository and create a new branch from the `develop` branch.
- For bug fixes, add new tests. We use [Pytest](https://docs.pytest.org/en/7.4.x/)  to test our code.
- Do a PR from your new branch to our `develop` branch of the essConveyanceClaim repo.
