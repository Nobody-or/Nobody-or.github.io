// JavaScript Document
const feedback = document.getElementById('feedback');
    var correctAnswer = new Array(1,2,3,4); // 正确答案
	var historycolor="black";
	var submitted=0;
	var submittedans=0;
	var tong=[];
	var anschar=new Array(0,'A','B','C','D');
	var fist=1;
	var sum=0;
	var submittednum=0;
	var correctans_num=0;
	var base=0;
	function init(tzid){
		//document.getElementById("ans1").style.background="white";
		//document.getElementById("ans2").style.background="white";
		//document.getElementById("ans3").style.background="white";
		//document.getElementById("ans4").style.background="white";
		for(var i=0;i<=100;i++) tong[i]=0;
		if(tzid==1){//测试2
			correctAnswer[0]=1;
			correctAnswer[1]=2;
			correctAnswer[2]=3;
			correctAnswer[3]=4;
		}
		if(tzid==2){//测试22
			correctAnswer[0]=4;
			correctAnswer[1]=3;
			correctAnswer[2]=2;
			correctAnswer[3]=1;
		}
		if(tzid==3){//测试冒泡排序
			correctAnswer[0]=4;
			correctAnswer[1]=3;
			correctAnswer[2]=1;
			correctAnswer[3]=1;
			base=0;
		}
		if(tzid==4){//测试归并排序
			correctAnswer[0]=3;
			correctAnswer[1]=2;
			correctAnswer[2]=2;
			correctAnswer[3]=2;
			base=2;
		}
		if(tzid==5){//测试选择排序
			correctAnswer[0]=4;
			correctAnswer[1]=2;
			correctAnswer[2]=3;
			correctAnswer[3]=1;
			base=1;
		}
		if(tzid==6){//测试BFS
			correctAnswer[0]=3;
			correctAnswer[1]=3;
			correctAnswer[2]=2;
			correctAnswer[3]=3;
			base=5;
		}
		if(tzid==7){//测试快速排序
			correctAnswer[0]=2;
			correctAnswer[1]=1;
			correctAnswer[2]=1;
			correctAnswer[3]=3;
			base=3;
		}
		if(tzid==8){//测试堆排序
			correctAnswer[0]=2;
			correctAnswer[1]=2;
			correctAnswer[2]=3;
			correctAnswer[3]=3;
			base=4;
		}
		if(tzid==9){//DFS
			correctAnswer[0]=2;
			correctAnswer[1]=2;
			correctAnswer[2]=3;
			correctAnswer[3]=4;
			base=6;
		}
		if(tzid==10){//Arrays
			correctAnswer[0]=1;
			correctAnswer[1]=1;
			correctAnswer[2]=4;
			correctAnswer[3]=2;
			base=7;
		}
		if(tzid==11){//Struct
			correctAnswer[0]=2;
			correctAnswer[1]=3;
			correctAnswer[2]=3;
			correctAnswer[3]=1;
			base=8;
		}
		if(tzid==12){//Linked List
			correctAnswer[0]=3;
			correctAnswer[1]=3;
			correctAnswer[2]=4;
			correctAnswer[3]=2;
			base=9;
		}
		if(tzid==13){//Queue
			correctAnswer[0]=1;
			correctAnswer[1]=2;
			correctAnswer[2]=4;
			correctAnswer[3]=1;
			base=10;
		}
		if(tzid==14){//Tree
			correctAnswer[0]=3;
			correctAnswer[1]=1;
			correctAnswer[2]=2;
			correctAnswer[3]=1;
			base=11;
		}
		if(tzid==15){//Heap
			correctAnswer[0]=2;
			correctAnswer[1]=1;
			correctAnswer[2]=3;
			correctAnswer[3]=2;
			base=12;
		}
		if(tzid==16){//Stack
			correctAnswer[0]=3;
			correctAnswer[1]=1;
			correctAnswer[2]=2;
			correctAnswer[3]=4;
			base=13;
		}
		if(tzid==17){//Graph
			correctAnswer[0]=3;
			correctAnswer[1]=3;
			correctAnswer[2]=1;
			correctAnswer[3]=4;
			base=14;
		}
	}
	
	function move(st,ed) {//进度条
		var elem = document.getElementById("myBar");   
		var width = st;
		var id = setInterval(frame, 10);
		function frame() {
		  if (width >= ed) {
			clearInterval(id);
		  } else {
			width++; 
			elem.style.width = width + '%'; 
			elem.innerHTML = width * 1  + '%';
		  }
		}
	  }

	function checkans(answer,tid,tzid){//答案，题号，题组号
		//var answer=document.getElementById("getans1").value;
		//console.log(answer);
		//document.write("hello world");
		//document.body.style.backgroundColor="Grey";
		//init();
		if(fist==1){
			fist=0;
			init(tzid);
		}
		submittedans=answer;
		submittednum=tid;
		/*if(answer==correctAnswer){
			document.getElementById("ans1").style.background="#98FB98";//90EE90
		}
		else{
			if(answer==1) document.getElementById("ans1").style.background="#FFB6C1";
			if(answer==2) document.getElementById("ans2").style.background="#FFB6C1";
			if(answer==3) document.getElementById("ans3").style.background="#FFB6C1";
			if(answer==4) document.getElementById("ans4").style.background="#FFB6C1";
			if(correctAnswer==1){
				document.getElementById("feedback").innerHTML = 'Incorrect. The correct answer is '+document.getElementById("A").value+'.'; //document.getElementById("feedback").innerHTML = document.getElementById("A").value;
			}
			if(correctAnswer==2){
				document.getElementById("feedback").innerHTML = 'Incorrect. The correct answer is '+document.getElementById("B").value+'.'; 
			}
			if(correctAnswer==3){
				document.getElementById("feedback").innerHTML = 'Incorrect. The correct answer is '+document.getElementById("C").value+'.'; 
			}
			if(correctAnswer==4){
				document.getElementById("feedback").innerHTML = 'Incorrect. The correct answer is '+document.getElementById("D").value+'.'; 
			}
		}*/
	}
    // 添加提交按钮的点击事件处理程序
	
    function sbmt(tid) {
        // 获取用户选择的答案
        //const selectedAnswer = document.querySelector('input[name="capital"]:checked');

        // 检查用户是否选择了答案
		if(tong[tid]==0){
			
        if (submittedans&&tid==submittednum) {
			sum++;
			var jdt=document.getElementsByClassName("w3-container w3-grey w3-round-large");
			//if(sum==1) jdt[0].style="width:25%",jdt[0].innerHTML="25%";
			//if(sum==2) jdt[0].style="width:50%",jdt[0].innerHTML="50%";
			//if(sum==3) jdt[0].style="width:75%",jdt[0].innerHTML="75%";
			//if(sum==4) jdt[0].style="width:100%",jdt[0].innerHTML="100%";
			if(sum==1) move(0,25);
			if(sum==2) move(25,50);
			if(sum==3) move(50,75);
			if(sum==4) move(75,100);
			tong[tid]=1;
			submitted=1;
            // 检查用户答案是否正确
            if (submittedans === correctAnswer[tid-1]) {
				var fdbid=document.getElementsByClassName("feedback");
                fdbid[tid-1].innerHTML = 'Correct!';
				correctans_num++;
				setcorrect(4*base+tid);
				if(correctAnswer[tid-1]==1){
					var crans=document.getElementsByClassName("ans1");
					crans[tid-1].style.background="#98FB98";
					//document.getElementById("ans1").style.background="#98FB98";
				}
				if(correctAnswer[tid-1]==2){
					var crans=document.getElementsByClassName("ans2");
					crans[tid-1].style.background="#98FB98";
					//document.getElementById("ans2").style.background="#98FB98";
				}
				if(correctAnswer[tid-1]==3){
					var crans=document.getElementsByClassName("ans3");
					crans[tid-1].style.background="#98FB98";
					//document.getElementById("ans3").style.background="#98FB98";
				}
				if(correctAnswer[tid-1]==4){
					var crans=document.getElementsByClassName("ans4");
					crans[tid-1].style.background="#98FB98";
					//document.getElementById("ans4").style.background="#98FB98";
				}
		
            } else {
				var fdaid=document.getElementsByClassName(anschar[correctAnswer[tid-1]]);
				var fdbid=document.getElementsByClassName("feedback");
                fdbid[tid-1].innerHTML = 'Incorrect. The correct answer is "'+anschar[correctAnswer[tid-1]]+'.'+fdaid[tid-1].value+'"';
				
				if(submittedans==1){
					var crans=document.getElementsByClassName("ans1");
					crans[tid-1].style.background="#FFB6C1";
					//document.getElementById("ans1").style.background="#FFB6C1";
				}
				if(submittedans==2){
					var crans=document.getElementsByClassName("ans2");
					crans[tid-1].style.background="#FFB6C1";
					//document.getElementById("ans2").style.background="#FFB6C1";
				}
				if(submittedans==3){
					var crans=document.getElementsByClassName("ans3");
					crans[tid-1].style.background="#FFB6C1";
					//document.getElementById("ans3").style.background="#FFB6C1";
				}
				if(submittedans==4){
					var crans=document.getElementsByClassName("ans4");
					crans[tid-1].style.background="#FFB6C1";
					//document.getElementById("ans4").style.background="#FFB6C1";
				}
            }
			submittedans=0;
            // 显示反馈
			var fdbid=document.getElementsByClassName("feedback");
            fdbid[tid-1].style.display = 'block';

            // 禁用表单，防止用户再次提交
            var ttmp=document.getElementsByName("fom");
			for(var i=tid*4-4; i<tid*4; i++){
				ttmp[i].disabled=true;
			}
            
        }
		else alert('Please select an answer.');
		}
    };

	
		
	/*function movebox(tid){
		if(submitted==0||(submitted&&tid!=submittedans)){
		if(tid==1){
			if(historycolor=="black") historycolor=document.getElementById("aa").style.background;
			document.getElementById("aa").style.background="#FFB6C1";
		}
		if(tid==2){
			if(historycolor=="black") historycolor=document.getElementById("bb").style.background;
			document.getElementById("bb").style.background="#FFB6C1";
		}
		if(tid==3){
			if(historycolor=="black") historycolor=document.getElementById("cc").style.background;
			document.getElementById("cc").style.background="#FFB6C1";
		}
		if(tid==4){
			if(historycolor=="black") historycolor=document.getElementById("dd").style.background;
			document.getElementById("dd").style.background="#FFB6C1";
		}
		}
	}*/
	/*function leavebox(tid){
		if(submitted==0||(submitted&&tid!=submittedans)){
			if(tid==1) document.getElementById("aa").style.background=historycolor;
			if(tid==2) document.getElementById("bb").style.background=historycolor;
			if(tid==3) document.getElementById("cc").style.background=historycolor;
			if(tid==4) document.getElementById("dd").style.background=historycolor;
		}
	}*/