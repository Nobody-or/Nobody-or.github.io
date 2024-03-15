g++ E:/Easy/S000/run.cpp -o E:/Easy/S000/run.exe
echo WA > "E:/Easy/S000/res.txt"
E:/Easy/S000/run.exe < E:/Easy/S000/in.txt > E:/Easy/S000/o1.txt
fc E:\Easy\S000\o1.txt E:\Easy\S000\ans.txt
if %errorlevel%==0 echo AC > "E:/Easy/S000/res.txt"