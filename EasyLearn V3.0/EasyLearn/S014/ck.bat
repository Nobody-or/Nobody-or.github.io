g++ E:/Easy/S014/run.cpp -o E:/Easy/S014/run.exe -std=c++11
echo WA > "E:/Easy/S014/res.txt"
E:/Easy/S014/run.exe < E:/Easy/S014/in.txt > E:/Easy/S014/o1.txt
fc E:\Easy\S014\o1.txt E:\Easy\S014\ans.txt
if %errorlevel%==0 echo AC > "E:/Easy/S014/res.txt"