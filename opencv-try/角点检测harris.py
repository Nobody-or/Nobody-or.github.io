import cv2 as cv
import numpy as np


# Harris角点检测
def Harris():
    # 1、转灰度图
    gray = cv.cvtColor(img, cv.COLOR_BGR2GRAY)
    # 2、转float32（Harris输入图像必须是float32）
    gray = np.float32(gray)
    # 3、角点检测
    dst = cv.cornerHarris(gray, 2, 3, 0.01)
    #                           邻域大小 核  k取值（k越大，角越少）

    # 4、角点显色（最佳值的阈值可能因图像而异）
    img[dst > 0.01 * dst.max()] = [0, 0, 255]
    cv.imshow('Harris', img)

if __name__ == '__main__':
    # 读取图片
    img = cv.imread("resource/1.png")
    cv.imshow("img", img)

    Harris()

    cv.waitKey(0)