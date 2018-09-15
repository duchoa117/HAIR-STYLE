import mongoengine

host = "ds229552.mlab.com"
port = 29552
db_name = "project_c4t4"
user_name = "admin"
password = "admin123"

def connect():
    mongoengine.connect(db_name, host=host, port = port, username = user_name, password = password)
def list2json(l):
    import json
    return [json.loads(item.to_json()) for item in l]
def item2json(item):
    import json
    return json.loads(item.to_json)
