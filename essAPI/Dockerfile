FROM python:3

WORKDIR /app
COPY . /app
 
RUN pip install -r requirements.txt --root-user-action=ignore

EXPOSE 5000

CMD ["flask", "run"]