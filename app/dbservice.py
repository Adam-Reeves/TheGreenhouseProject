import postgresql

from dotenv import dotenv_values    

config = dotenv_values(".env")

def get_db_connection():
    connection_string = config["DB_CONNECTION_STRING"]
    db = postgresql.open(connection_string)
    return db

def setup_db(db_connection):
    db_connection.execute("CREATE TABLE greenhouse (image bytea, image_extension text)")

def insert_image_into_db(db, image, image_extension):
    insert_image_query = db.prepare("INSERT INTO greenhouse VALUES ($1, $2)")
    with db.xact():
        insert_image_query(bytes("test_1", 'utf-8'), "test_2")