[![GitHub last commit](https://img.shields.io/github/last-commit/panwar2001/essConveyanceClaim?label=Last%20commit&color=green&logo=git&logoColor=white&style=flat-square)](https://github.com/Defcon27/Data-Analysis-of-Indian-Automobile-dataset-using-Machine-Learning-in-R)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/panwar2001/essConveyanceClaim?label=Code%20size&logo=python&logoColor=white&style=flat-square)
![GitHub repo size](https://img.shields.io/github/repo-size/panwar2001/essConveyanceClaim?label=Repo%20size&color=red&logo=github&logoColor=white&style=flat-square)
![GitHub stars](https://img.shields.io/github/stars/panwar2001/essConveyanceClaim?label=Stars&logo=github&style=flat-square)
![GitHub issues](https://img.shields.io/github/issues/panwar2001/essConveyanceClaim?label=Issues&color=yellow&logo=github&style=flat-square)
<!-- [![Build Status](https://travis-ci.org/LexPredict/lexpredict-lexnlp.svg?branch=master)](https://travis-ci.org/LexPredict/lexpredict-lexnlp) -->
<!-- [![Coverage Status](https://coveralls.io/repos/github/panwar2001/essConveyanceClaim/badge.svg?branch=main)](https://coveralls.io/github/panwar2001/essConveyanceClaim/) -->
<!-- [![Docs](https://readthedocs.org/projects/lexpredict-lexnlp/badge/?version=docs-0.1.6)](http://lexpredict-lexnlp.readthedocs.io/en/docs-0.1.6/) -->

<h3 align="center"> ESS conveyance claim simplification  🧾 </h3>


Solution ✅ to automate the  prefilling of the form of a portal with cab invoice(transport bill) PDF details. The filling/ uploading of bill details include bill date, mode of convince( travel mode) such as {OLA , UBER or other aggregator services }, select purpose (office to home or home to office) , pickup address , Destination address, Distance, Amount . An invoice document as proof is uploaded which requires manual task to extract and fill details from it, so there is need for extraction of the data from it to save time and efforts with correctness.

### 🔗 [Collection of Cab invoice pdf's used for testing](https://drive.google.com/drive/folders/1bg5GbeJ-wP5Ril4ywik_4jbotRGcMMEK?usp=share_link)  

<br>

### 🖥️ Technologies and Tools used
![Python Badge](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![Javascript](https://img.shields.io/badge/javascript-grey?style=for-the-badge&logo=javascript)
![React](https://img.shields.io/badge/react-grey?style=for-the-badge&logo=react)
![Node.JS](https://img.shields.io/badge/Node.js-grey?style=for-the-badge&logo=node.js)
![Flask](https://img.shields.io/badge/Flask-grey?style=for-the-badge&logo=flask)

#### 📊 Get Presentation Here  
[![PDF](https://img.shields.io/badge/PRESENTATION-D83B01.svg?&style=for-the-badge&logo=pdf&logoColor=white)]()


<p><br><p>


<h3 align="center">  Designs 👨‍💻 </h3>

![architecture](./System%20Designs/architecture.svg)

![image preprocessing](./System%20Designs/Invoice%20image%20preprocessing%20pipeline.jpeg)
<h3>ESS conveyance claim simplification HIGH LEVEL DESIGN</h3>
<img src="./System%20Designs/ess%20high%20level%20design.jpg" width="100%"/>
<h3>ESS conveyance claim simplification LOW LEVEL DESIGN</h3>
<img src="./System%20Designs/ess%20low%20level%20design.jpg" width="100%"/>


### Getting Started With Local Development Setup

###  prerequisite: install  [NPM](https://npmjs.com) , [Python](https://www.python.org/downloads/) 
###  React Vite Form 
```bash
git clone https://github.com/panwar2001/essConveyanceClaim.git
cd essClient 
npm install
npm run dev
```
### Flask api
```bash
# move to essAPI folder 
cd essAPI
# install all the packages mentioned in requirements file
pip install -r requirements.txt
# punkt & stopwards must be installed for text preprocessing
python3 download_nltk_corpora.py
# Run the flask app
python3 app.py
```

### GUI for Software automation testing with python( customtkinter and tkinter )
![test](./System%20Designs/test.png)
```bash
# Move to TEST directory
cd TEST
# install necessary dependencies 
pip install customtkinter tkinter
# run the application
python test.py
```

### [Tesseract Installation( Depends on C/C++ to run)](https://tesseract-ocr.github.io/tessdoc/Installation.html)
```bash
# Linux 
sudo apt-get install tesseract-ocr -y
# Windows 
https://github.com/UB-Mannheim/tesseract/wiki
```

### 🐳 [Docker Setup](https://docs.docker.com/engine/install/)

### Client-Side Docker image build

```bash
# change directory to essClient => /essClient
cd essClient 

# Build Client Docker Image  
sudo docker build -t  ess-client . 

# Run Docker Image 
sudo docker run --network host ess-client 

# Get Docker Container Logs
sudo docker logs ess-client

# Access ess-client: http://localhost:5173/

#To view all the docker images running write the following command in another terminal , this will contain the container id which will be required to stop the image
sudo docker ps -a

#To stop the image run the command example- sudo docker stop 55f6fd03d27e
sudo docker stop container-id

#To delete the docker image 
sudo docker image rm -f ess-client

#If changes are made to the code to view the changes in docker , the image has to be rebuild from starting.
```

### Server-Side Docker image build

```bash
# change directory to essAPI => /essAPI
cd essAPI

# Build API Docker Image  
sudo docker build -t  ess-api . 

# Run Docker Image 
sudo docker run --network host ess-api 

# Get Docker Container Logs
sudo docker logs ess-api

# Access ess-api: http://127.0.0.1:5000/

#To view all the docker images running write the following command in another terminal , this will contain the container id which will be required to stop the image
sudo docker ps -a

#To stop the image run the command example- sudo docker stop 55f6fd03d27e
sudo docker stop container-id

#To delete the docker image 
sudo docker image rm -f ess-api

#If changes are made to the code to view the changes in docker , the image has to be rebuild from starting.
```
### Git Helpful commands
```bash
# To see commit history , each stacked having one line detail.
git log --oneline 

git pull --rebase origin main

git push -u origin main

git status

git diff

git checkout
```

### Contribution Guide

### 💬 Submit Feedback
The feedback should be submitted by creating an issue on GitHub [issues](https://github.com/panwar2001/essConveyanceClaim/issues).
Select the related template (bug report, feature request, or custom) and add the corresponding labels.

### 🐞 Fix Bugs
You may look through the GitHub [issues](https://github.com/panwar2001/essConveyanceClaim/issues) for bugs.

### 💡 Implement Features
You may look through the GitHub [issues](https://github.com/panwar2001/essConveyanceClaim/issues) for feature requests.

### 🚀 Pull Requests (PR)
- Fork the repository and create a new branch from the `develop` branch.
- Do a PR from your new branch to our `develop` branch of the essConveyanceClaim repo.

### Contributors

<!-- readme: contributors -start -->
<table>
<tr>
    <td align="center">
        <a href="https://github.com/panwar2001">
            <img src="https://avatars.githubusercontent.com/u/130741616?v=4" width="100;" alt="panwar2001"/>
            <br />
            <sub><b>AYUSH PANWAR</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/vishal1844">
            <img src="https://avatars.githubusercontent.com/u/104387858?v=4" width="100;" alt="vishal1844"/>
            <br />
            <sub><b>Vishal Jindal</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/negia7265">
            <img src="https://avatars.githubusercontent.com/u/96509253?v=4" width="100;" alt="negia7265"/>
            <br />
            <sub><b>Ayush Negi</b></sub>
        </a>
    </td></tr>
</table>
<!-- readme: contributors -end -->