var saveUser = function (arr) {
    localStorage.user = JSON.stringify(arr);//把所有用户名丢向对象变为字符串，把字符串存到user中
}
var saveCurrentUser = function (arr) {
    localStorage.current_user = JSON.stringify(arr);//存当前登录用户的用户名，仅仅是为了在之后的每个界面显示用户名
}
var loadUser = function () {
    var arr = JSON.parse(localStorage.user);//把本地存储user读取出来
    return arr;//返回数组
}
var loadCurrentUser = function () {
    var arr = JSON.parse(localStorage.current_user);//读取当前用户名
    return arr;//返回数组
}

function register() {
    let user = [];
    let usernameStr = document.getElementById("username1").value;
    let passwordStr = document.getElementById("pwd1").value;
    let ratingStr = "newbie";
    if (localStorage.user != null) {
        user = loadUser();
    }
    if (usernameStr == "") {//优先判断用户名不可为空
        // alert("Username can't be empty!");
        msg1.style.display = "block";
        msg1.innerText = "Username can't be empty!";
        return;
    }
    if (passwordStr == "") {//其次判断密码不可为空
        // alert("Password can't be empty!");
        msg1.style.display = "block";
        msg1.innerText = "Password can't be empty!";
        return;
    }
    for (let i = 0; i < user.length; i++) {//二者如果都不为空，从用户数据中寻找用户名是否已经被注册过
        if (user[i].username == usernameStr) {

            // alert("That username has already been registered!");
            msg1.style.display = "block";
            msg1.innerText = "That username has been registered!";
            return;
        }
    }
    // alert("Successfuly register!");
    msg1.style.display = "block";
    msg1.style.color = "green";
    msg1.innerText = "Successfuly register!";
    let this_user = {//生成一个用户对象
        username: usernameStr,
        password: passwordStr,
        rating: ratingStr,
        comment: [//为了让用户的评论都显示在论坛界面

        ],
        question: {
            history: [//记录做题的历史

            ],
            basic_question: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//用来检测用户是否刷过所有的基础题，0为没刷过1为刷过
            //basic_question_ac: 0,//做对的个数
            program_question: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//用来检测用户是否刷过所有的编程题
            //program_question_ac: 0,
            achievement:{
                have_mistake:0,//只要有错这里就变成1
                replay_num:0,//仅对是否>=10判断
            }
        }
    };
    user.push(this_user);
    saveUser(user);//将生成的用户对象存入本地
    setTimeout(function () {
        //延迟1s跳转 get传参（因为有localStorage传参，所以没有什么用……） 字符串拼接
        window.location.href = "./login.html?username=" + usernameStr + "&pws=" + passwordStr + "";
    }, 1000);
    return;
}

function login() {
    let user = [];
    let usernameStr = document.getElementById("username").value;
    let passwordStr = document.getElementById("pwd").value;
    if (localStorage.user != null) {
        user = loadUser();
    }
    //获取输入框的值（文本）
    //document.getElementById("username").value;
    //username.value;
    if (usernameStr == "") {//判断用户名是否为空
        // alert("Username can't be empty!");
        msg.style.display = "block";
        msg.innerText = "Username can't be empty!";
        return;
    }
    if (passwordStr == "") {//判断密码不可为空
        // alert("Password can't be empty!");
        msg.style.display = "block";
        msg.innerText = "Password can't be empty!";
        return;
    }
    for (let i = 0; i < user.length; i++) {
        if (usernameStr == user[i].username && passwordStr == user[i].password) {
            // alert("Login successfuly!");
            msg.style.display = "block";
            msg.style.color = "green";
            msg.innerText = "Login successfuly!";
            saveCurrentUser(usernameStr);
            setTimeout(function () {
                //延迟1s跳转 get传参（因为有localStorage传参，所以没有什么用……） 字符串拼接
                window.location.href = "./index.html";
            }, 1000);
            return;
        }
    }
    // alert("Username or password is wrong!");
    msg.style.display = "block";
    msg.innerText = "Username or password is wrong!"
    return;
}

function quit() {
    localStorage.removeItem("current_user");
    alert("Successfully quit!");
    location.reload();
    return;
}
function setcorrect(tid){
    let user=[];
    if (localStorage.user != null) {
        user = loadUser();
    }else{
        return;
    }
    let i;
    if(localStorage.current_user!=null){
        let current_user=loadCurrentUser();
        for(i=0;i<=user.length;i++){
            if(user[i].username==current_user){
                break;
            }
        }
        user[i].question.basic_question[tid]=1;
    }
    saveUser(user);
}
function showUserName() {
    var wel=document.getElementById("wel");
    if (localStorage.current_user != null) {
        let current_user = loadCurrentUser();
        document.getElementById("un").innerText = current_user;
        //document.getElementById("un2").innerText = current_user;
        wel.style.display = "block";
    }
    else {
        wel.style.display = "none";
    }
}
function cheat(){
    let i;
    for(i=1;i<=60;++i){
        setcorrect(i);
    }
}
function showprofile(){
    let user=[];
    if (localStorage.user != null) {
        user = loadUser();
    }else return;
    if(localStorage.current_user != null){
        let current_user = loadCurrentUser();
        document.getElementById("un2").innerText=current_user;
        let i;
        for(i=0;i<user.length;i++){
            if(user[i].username==current_user){
                break;
            }
        }
        
        let sum=0;
        //alert(user[i].question.basic_question[1]);
        for(let j=1;j<=60;j++){
            sum+=user[i].question.basic_question[j];
        }
        //alert(user[i].question.basic_question[1]);
        //alert(user[i].question.basic_question[1]);
        if(sum<20){
            document.getElementById("rt").innerText="newbie";
            document.getElementById("ico").src="../image/lv1.png";
        }else if(sum<40){
            document.getElementById("rt").innerText="expert";
            document.getElementById("ico").src="../image/lv2.png";
        }else if(sum<50){
            document.getElementById("rt").innerText="master";
            document.getElementById("ico").src="../image/lv3.png";
        }else{
            document.getElementById("rt").innerText="grand master";
            document.getElementById("ico").src="../image/lv4.png";
        }
        document.getElementById("slvnm").innerText=sum;
        let srtsum=0;
        for(let j=1;j<=20;++j)srtsum+=user[i].question.basic_question[j];
        let scsum=0;
        for(let j=21;j<=28;++j)scsum+=user[i].question.basic_question[j];
        let dssum=0;
        for(let j=29;j<=60;++j)dssum+=user[i].question.basic_question[j];
        document.getElementById("srtnm").innerText=srtsum;
        document.getElementById("srcnm").innerText=scsum;
        document.getElementById("dsnm").innerText=dssum;
        //document.getElementById("rt").innerText=user[i].rating;
    }else{
        document.getElementById("un2").innerText="Please login";
    }
}
function showlogbutton(){
    if(localStorage.current_user != null){
        let current_user=loadCurrentUser();
        document.getElementById("lognt").href="profile.html";
        document.getElementById("lognt").innerText="PROFILE";
        document.getElementById("lognt2").innerText="PROFILE";
        document.getElementById("lognt2").href="profile.html";
    }else{
        document.getElementById("lognt").href="login.html";
        document.getElementById("lognt").innerText="LOG IN/SIGN UP";
        document.getElementById("lognt2").innerText="LOG IN/SIGN UP";
        document.getElementById("lognt2").href="login.html";
    }
}
function ckslv(pid){
    let user=[];
    if (localStorage.user != null) {
        user = loadUser();
    }else{
        alert("Please log in to view the problems");return false;
    }
    let i;
    if(localStorage.current_user != null){
        let current_user = loadCurrentUser();
        for(i=0;i<user.length;i++){
            if(user[i].username==current_user){
                break;
            }
        }
    }
    let sm=0;
    for(let j=(pid-1)*4+1;j<=pid*4;++j)sm+=user[i].question.basic_question[j];
    if(sm!=4){
        alert("You have not solved the basic problems in this part,please solve them in Learn Now section to submit this program problem");
        return false;
    }
    return true;
}
function showGreeting() {
    if (localStorage.current_user != null) {
        let time = new Date().format("yyyy.MM.dd");
        let greet;
        let h = new Date().getHours();
        // console.log(h);
        if (h <= 4 || h == 23) {
            greet = "Have a good dream";
        }
        else if (h >= 5 && h <= 9) {
            greet = "Good morning";
        }
        else if (h == 12) {
            greet = "Good noon";
        }
        else if (h == 10 || h == 11 || (h >= 13 && h <= 17)) {
            greet = "Nice day";
        }
        else if (h >= 18 && h <= 20) {
            greet = "Good evening";
        }
        else if (h == 21 || h == 22) {
            greet = "Good night";
        }
        //greeting.innerText = "Today is" + " " + time + ". " + greet + "";
        document.getElementById("greeting").innerText = "Today is" + " " + time + ". " + greet + "";
        wel.style.display = "block";
    }
    else {
        wel.style.display = "none";
    }
}

Date.prototype.format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1,                 //月份
        "d+": this.getDate(),                    //日
        "h+": this.getHours(),                   //小时
        "m+": this.getMinutes(),                 //分
        "s+": this.getSeconds(),                 //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds()             //毫秒
    };

    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }

    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(
                RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }

    return fmt;
}