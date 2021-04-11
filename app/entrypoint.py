from dbservice import *
from camera import *
from pathlib import Path

print("Beginning capture")
image = capture_img()
insert_image_into_db(image, "jpg")
print("Finished capture")
