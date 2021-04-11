from io import BytesIO
from picamera import PiCamera
from time import sleep

def capture_img():
    camera = PiCamera()
    my_stream = BytesIO()
    camera.resolution = (1920, 1080)
    camera.rotation = 180
    camera.start_preview()
    sleep(5)  
    camera.capture(my_stream, 'jpeg')
    camera.stop_preview()
    return my_stream.getvalue()