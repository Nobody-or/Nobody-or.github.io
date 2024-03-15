g++ E:/Easy/S013/run.cpp -o E:/Easy/S013/run.exe -std=c++11
echo WA > "E:/Easy/S013/res.txt"
E:/Easy/S013/run.exe < E:/Easy/S013/in.txt > E:/Easy/S013/o1.txt
fc E:\Easy\S013\o1.txt E:\Easy\S013\ans.txt
if %errorlevel%==0 echo AC > "E:/Easy/S013/res.txt"