import pandas
df = pandas.read_csv('cars.csv')
arr=df['Vehicle']
TRAIN_DATA=[]
for i in arr:
  if type(i)!=float:
    length=len(i)-1
    TRAIN_DATA.append((i, {"entities": [(0, length, "VEHICLE")]}))
print(TRAIN_DATA[0])



# importing library
import csv
 
# opening the csv file in 'w' mode
file = open('TRAIN_DATA.csv', 'w', newline ='')
 
with file:
    header = ['Vehicle']
    writer = csv.DictWriter(file, fieldnames = header)     
    # writing data row-wise into the csv file
    writer.writeheader()
    for vehicle in TRAIN_DATA: 
      writer.writerow({'Vehicle' : vehicle})
