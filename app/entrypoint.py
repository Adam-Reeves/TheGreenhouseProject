from dbservice import *
from pathlib import Path

db_conn = get_db_connection()

path = Path(__file__).parent / "sample_img.txt"
with path.open() as f:
    image_str = f.readlines()
    insert_image_into_db(db_conn, "test", "jpg")
