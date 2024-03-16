# 边缘检测（Sobel、Laplace、Canny）
import cv2 as cv


# Canny最优微分算子
def Canny():
    dst = cv.Canny(img, 100, 255)
    #                   低阈值 高阈值
    cv.imshow("dst", dst)


if __name__ == '__main__':
    # 读取图片
    img = cv.imread("Resource/1.png")
    cv.imshow("img", img)

    # Sobel()         #Sobel一阶微分算子
    # Laplace()       #Laplace二阶微分算子
    Canny()  # Canny最优微分算子

    cv.waitKey(0)