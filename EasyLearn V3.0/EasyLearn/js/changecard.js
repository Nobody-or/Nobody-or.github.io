const cards1 = document.getElementsByClassName("w3-card-1");
let currentCardIndex1 = 0;

function showCard(index) {
    for(var i=0;i<cards1.length;i++){
        if(i!=index){
            cards1[i].style="display:none";
        }
        else{
            cards1[i].style="display:flex;padding-top:2%";
        }
    }
}

//showCard1(currentCardIndex1, 'left'); // 默认显示第一张卡片

// 添加切换按钮或事件来切换卡片
function changepage(tid,cati){
    currentCardIndex1=tid;
    if(cati==0){
        if(currentCardIndex1!=0){
            var prevIndex = (currentCardIndex1 - 1 + cards1.length) % cards1.length;
            showCard(prevIndex); // 传递 'right' 表示从右侧切入
        }
    }
    else{
        if(currentCardIndex1!=cards1.length-1){
            var nextIndex = (currentCardIndex1 + 1) % cards1.length;
            showCard(nextIndex); // 传递 'left' 表示从左侧切入
        }
    }
}

function tryagain(){
    cards1[0].style="display:flex";
    cards1[4].style="display:none";
    const mbar = document.getElementById("myBar");
    mbar.style="width:0%";
    mbar.innerHTML="0%";
}