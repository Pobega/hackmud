#!/usr/bin/env python3

# system libs
import glob
import os
import tempfile

# third party libs
from PIL import Image
import PIL.ImageOps
import pyqrcode

HOME_DIR=os.path.expanduser("~")
SCREENSHOT_DIRECTORY=os.path.join(HOME_DIR, "Pictures")

class BadDirError(Exception):
    def __init__(self, directory, *args):
        Exception.__init__(self, "Directory does not exist or is improperly formatted: {0}".format(directory))

def get_newest_file(filedir):
    if not filedir:
        filedir = SCREENSHOT_DIRECTORY
    else:
        if not os.path.exists(filedir):
            raise BadDirError(filedir)
    all_files = glob.glob(os.path.join(filedir, "*"))
    latest_file = max(all_files, key=os.path.getctime)
    return latest_file

def invert_image(image):
    image_handle = Image.open(image)
    inverted_image = PIL.ImageOps.invert(image_handle)
    with tempfile.NamedTemporaryFile(dir="/tmp") as tmpfile:
        inverted_image.save(tmpfile)
        return tmpfile

if __name__ == "__main__":
    screenshot = get_newest_file(SCREENSHOT_DIRECTORY)
    print(invert_image(screenshot))
