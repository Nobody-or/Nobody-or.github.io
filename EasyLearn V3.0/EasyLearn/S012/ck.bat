g++ E:/Easy/S012/run.cpp -o E:/Easy/S012/run.exe -std=c++11
echo WA > "E:/Easy/S012/res.txt"
E:/Easy/S012/run.exe < E:/Easy/S012/in.txt > E:/Easy/S012/o1.txt
fc E:\Easy\S012\o1.txt E:\Easy\S012\ans.txt
if %errorlevel%==0 echo AC > "E:/Easy/S012/res.txt"