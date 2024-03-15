g++ E:/Easy/S007/run.cpp -o E:/Easy/S007/run.exe -std=c++11
echo WA > "E:/Easy/S007/res.txt"
E:/Easy/S007/run.exe < E:/Easy/S007/in.txt > E:/Easy/S007/o1.txt
fc E:\Easy\S007\o1.txt E:\Easy\S007\ans.txt
if %errorlevel%==0 echo AC > "E:/Easy/S007/res.txt"