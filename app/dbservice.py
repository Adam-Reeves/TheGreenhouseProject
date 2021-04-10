import psycopg2

from dotenv import dotenv_values    

config = dotenv_values(".env")

def get_db_connection():
    conn = psycopg2.connect(config["DB_CONNECTION_STRING"], sslmode='require')
    return conn

def setup_db():
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute("CREATE TABLE greenhouse (image bytea, image_extension text)")
    conn.commit()
    conn.close()
    cur.close()

def insert_image_into_db(image, image_extension):
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute("INSERT INTO greenhouse VALUES (%s, %s)",
      (image, image_extension))
    conn.commit()
    conn.close()
    cur.close()

