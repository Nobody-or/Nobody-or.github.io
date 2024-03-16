# 边缘检测（Sobel、Laplace、Canny）
import cv2 as cv


# Laplace二阶微分算子
def Laplace():
    # 1、高斯滤波器 (3 X 3)
    dst = cv.GaussianBlur(img, (3, 3), sigmaX=0.1)
    #                           核大小  在X方向上的标准偏差

    # 2、Laplacian 算子
    laplacian = cv.Laplacian(dst, cv.CV_64F)

    # 3、取绝对值
    laplacian = cv.convertScaleAbs(laplacian)

    # 4、显示
    cv.imshow("laplacian", laplacian)


if __name__ == '__main__':
    # 读取图片
    img = cv.imread("Resource/1.png")
    cv.imshow("img", img)

    # Sobel()         #Sobel一阶微分算子
    Laplace()  # Laplace二阶微分算子

    cv.waitKey(0)