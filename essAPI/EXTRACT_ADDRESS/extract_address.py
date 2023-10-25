import pdfplumber
input_pdf = "./OLA_1.pdf"

class Groups:
  def __init__(self,filePath):
     self.invoice=pdfplumber.open(filePath)
     self.extractWords()
     self.extractLines()
     self.buildGroups()
     print(self.groups)
     self.invoice.close()

  def extractWords(self):
     self.words=[]
     pageWords= self.invoice.pages[1].extract_words()
     for word in pageWords:
       self.words.append({"text": word['text'], "left": word['x0'],"top":word['top'],"right":word['x1']})

  def extractLines(self): 
     self.lines={} 
     self.words.sort(key=lambda x:x['top']) 
     for word in self.words:
       if word['top'] in self.lines:
         self.lines[word['top']].append(word)
       else:
         self.lines[word['top']]=[word] 
     for top in self.lines:
       self.lines[top].sort(key=lambda x:x['left'])

  def buildGroups(self):
    self.groups=[]
    groupsDict={}
    groupsDict[1]=[]
    groupsCount=0
    thresholdWidth=10
    thresholdHeight=21
    minDist=None
    selectedGroup=None
    for top in self.lines:
      for wordToInsert in self.lines[top]:
        selectedGroup=1
        minHorizontalDist=10000
        minVerticalDist=10000
        for index in range(1,groupsCount+1):
         if len(groupsDict[index])>0: 
          for word in groupsDict[index]:
             if wordToInsert['left']>word['right']:
               distHorizontal=wordToInsert['left']-word['right']
             else:
               distHorizontal=abs(wordToInsert['left']-word['left'])     
             distVertical=abs(word['top']-wordToInsert['top'])
             if distHorizontal<thresholdWidth and distVertical<thresholdHeight:
               selectedGroup=index 
               minHorizontalDist=distHorizontal
               minVerticalDist=distVertical
        if minVerticalDist<=thresholdHeight and minHorizontalDist<=thresholdWidth:
           groupsDict[selectedGroup].append(wordToInsert)       
        else: 
           groupsCount+=1
           groupsDict[groupsCount]=[wordToInsert]

    for index in range(0,groupsCount):
       self.groups.append('')
       for word in groupsDict[index+1]:
         self.groups[index]+=' '+word['text']
  
  def display(self):
     for top in self.lines:
        for word in self.lines[top]:
           print(word)             
obj=Groups('../DATASET/UBER/UBER_24.pdf')