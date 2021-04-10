from dbservice import *
from pathlib import Path

path = Path(__file__).parent / "sample_img.txt"
with path.open() as f:
    image_str = f.readlines()
    insert_image_into_db("test", "jpg")
