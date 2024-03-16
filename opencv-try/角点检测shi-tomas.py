import cv2 as cv
import numpy as np


# Harris角点检测
# Shi-Tomas角点检测（Harris的优化）
def Shi_Tomas():
    # 1、灰度化
    gray = cv.cvtColor(img, cv.COLOR_BGR2GRAY)
    # 2、角点检测（返回坐标）
    corners = cv.goodFeaturesToTrack(gray, 300, 0.01, 10)
    #                                      最多角点数 角点质量水平  角点之间最小距离
    corners = np.int0(corners)  # 浮点型化整形

    # 3、遍历每个角点坐标并画点
    for i in corners:
        x, y = i.ravel()  # 取出横纵坐标
        cv.circle(img, (x, y), 3, (0, 0, 255), -1)  # 画点
        #               圆心   半径 颜色        厚度
    # 4、显示
    cv.namedWindow('Shi-Tomas', 0)
    cv.imshow('Shi-Tomas', img)

if __name__ == '__main__':
    # 读取图片
    img = cv.imread("resource/3.jpg")

    cv.namedWindow('img', 0)
    cv.imshow("img", img)

    Shi_Tomas()

    cv.waitKey(0)