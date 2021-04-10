from dbservice import *
from camera import *
from pathlib import Path

path = Path(__file__).parent / "sample_img.txt"
with path.open() as f:
    image = capture_img()
    image_str = f.readlines()
    insert_image_into_db(image, "jpg")
