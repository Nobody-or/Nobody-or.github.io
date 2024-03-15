g++ E:/Easy/S015/run.cpp -o E:/Easy/S015/run.exe -std=c++11
echo WA > "E:/Easy/S015/res.txt"
E:/Easy/S015/run.exe < E:/Easy/S015/in.txt > E:/Easy/S015/o1.txt
fc E:\Easy\S015\o1.txt E:\Easy\S015\ans.txt
if %errorlevel%==0 echo AC > "E:/Easy/S015/res.txt"