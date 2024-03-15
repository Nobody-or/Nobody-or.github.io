g++ E:/Easy/S002/run.cpp -o E:/Easy/S002/run.exe -std=c++11
echo WA > "E:/Easy/S002/res.txt"
E:/Easy/S002/run.exe < E:/Easy/S002/in.txt > E:/Easy/S002/o1.txt
fc E:\Easy\S002\o1.txt E:\Easy\S002\ans.txt
if %errorlevel%==0 echo AC > "E:/Easy/S002/res.txt"