const commentBox = document.querySelector('#comments');
// const nameInput = document.querySelector('#name');
const commentInput = document.querySelector('#com');
const btnSubmit = document.querySelector('#btn-post');
let user = [];
var i=0;
if(localStorage.user != null){
    user=loadUser();
}
let current_user = null;
if(localStorage.current_user != null){
    current_user=loadCurrentUser();
}
function showComment() {
    renderComments();
}

function renderComments() {
    for (i = 0; i < user.length; i++) {
        /*if (user[i].username == current_user) {
            break;
        }*/
        console.log(user[i].comment[1])
        user[i].comment.forEach((item) => {
            // console.log(item);
            commentBox.insertAdjacentHTML('afterBegin', `
            <hr/>
            <div>
                <span>${item.comment_name}</span>
                <span class="date">${item.time}</span>
            </div>
            <p>${item.comment_text}</p>
        `)
        });
    }
    /*if (i != user.length) {//将当前账号的comment加载出来
        console.log(user[i].comment[1])
        user[i].comment.forEach((item) => {
            // console.log(item);
            commentBox.insertAdjacentHTML('afterBegin', `
            <hr/>
            <div>
                <span>${item.comment_name}</span>
                <span class="date">${item.time}</span>
            </div>
            <p>${item.comment_text}</p>
        `)
        });
        return;
    }
    else{
        return;
    }
     console.log(comment);*/
    
}

btnSubmit.onclick = function () {
    if (current_user==null) {
        alert("You can sign up to save your comment, otherwise you can't submit the commment.");
    }
    // let nameStr = nameInput.value.replace(/<(\/?\w+)>/g, "&lt;$1&gt;");
    let commentStr = commentInput.value.replace(/<(\/?\w+)>/g, "&lt;$1&gt;");
    // if (nameStr == "") {
    //     alert("Please input your name!");
    //     return;
    // }
    if (commentStr == "") {
        alert("Please input your comment!");
        //alert(user[1].username);
        return;
    }
    for(i=0;i<user.length;i++){
        if(user[i].username == current_user){
            break;
        }
    }
    commentBox.insertAdjacentHTML('afterBegin', `
        <hr/>
        <div>
            <span>${user[i].username}</span>
            <span class="date">${new Date().format("yyyy/MM/dd")}</span>
        </div>
        <p>${commentStr}</p>
    `)
    if(current_user!=null){
        user[i].comment.unshift({
            comment_name: user[i].username,
            comment_text: commentStr,
            time: new Date().format("yyyy/MM/dd"),
        })
        saveUser(user);
    }
    return;
    // console.log(comment);
    // renderComments();
}