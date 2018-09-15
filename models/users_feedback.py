from mongoengine import *

class Feedback(Document):
    name=StringField(max_length=200)
    stt = StringField()
    content=StringField()
    post = BooleanField()