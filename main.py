import numpy as np
import cv2

vid = cv2.VideoCapture(0)
body_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')

while True:
    rect, frame = vid.read()

    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    eyes = body_cascade.detectMultiScale(gray, 1.1, 5, )

    for (x, y, w, h) in eyes:
        cv2.rectangle(frame, (x,y), (x + w, y+ h), (255, 0, 0), 2)

    cv2.imshow('title', frame)

    if(cv2.waitKey(1) & 0xFF == ord('q')):
        break

vid.release()
cv2.destroyAllWindows()