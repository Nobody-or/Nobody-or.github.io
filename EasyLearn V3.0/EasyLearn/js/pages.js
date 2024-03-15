// JavaScript Document
function showHide(id){
	for (var i = 1; i <= 4; i++){
		document.getElementById("skill"+i).style.display = "none"; //默认不显示所有的块
	 	document.getElementById("skillimage"+i).style.display="inline"; //默认显示所有按钮
		document.getElementById("skillimageover"+i).style.display="none";	//默认不显示所有翻转按钮	 
		}
	document.getElementById("skill"+id).style.display = "block"; //显示当前块
	document.getElementById("skillimageover"+id).style.display="inline";  //显示当前翻转按钮
	document.getElementById("skillimage"+id).style.display="none"; //不显示当前按钮
}