# ORB角点检测
import cv2 as cv

img = cv.imread("resource/2.jpg")
cv.imshow("img", img)

# 1、初始化ORB检测器
orb = cv.ORB_create(200)
# 2、用ORB寻找关键点
kp, des = orb.detectAndCompute(img, None)  # 返回关键点信息及描述符
# 3、仅绘制关键点的位置，而不绘制大小和方向
dst = cv.drawKeypoints(img, kp, None, color=(0, 255, 0), flags=0)

cv.imshow("dst", dst)

cv.waitKey(0)