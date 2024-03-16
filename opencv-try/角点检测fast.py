# fast角点检测
import cv2 as cv


# fast角点检测
def Fast():
    # 1、用默认值初始化FAST对象
    fast = cv.FastFeatureDetector_create(10, True)  # 开启极大值抑制
    # fast = cv.FastFeatureDetector_create(10, False)     #关闭极大值抑制

    # 2、寻找并绘制关键点
    kp = fast.detect(img)
    img2 = cv.drawKeypoints(img, kp, None, color=(255, 0, 0))

    # 3、显示
    cv.imshow('Fast', img2)


if __name__ == '__main__':
    img = cv.imread('resource/2.jpg')

    Fast()  # fast角点检测

    cv.waitKey(0)