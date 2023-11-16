import genie

class InvoiceParser:
    def __init__(self,imgs):
        self.image=[]
        image_len=len(imgs)
        for i in range(image_len):
            self.image.append(genie.preprocess_img(imgs[i]))
        self.date=set()
        self.distance=set()
        for index in range(image_len):
            self.extract(index)

    def extract(self,img_index):
        text=genie.get_text(self.image[img_index])
        self.date=self.date.union(genie.extract_date(text))
        self.distance=self.distance.union(genie.extract_distance(text))
        # amount=extract_amount(text)
        # address=extract_address(prepare.getCountour(img))
            
    def getData(self):
        return {'date': list(self.date), 'distance': list(self.distance),'address': [], 'amount':[]}
