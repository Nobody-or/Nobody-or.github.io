g++ E:/Easy/S006/run.cpp -o E:/Easy/S006/run.exe -std=c++11
echo WA > "E:/Easy/S006/res.txt"
E:/Easy/S006/run.exe < E:/Easy/S006/in.txt > E:/Easy/S006/o1.txt
fc E:\Easy\S006\o1.txt E:\Easy\S006\ans.txt
if %errorlevel%==0 echo AC > "E:/Easy/S006/res.txt"