//换肤红色#ff0000或者浅绿#07ac72
//cookie  name="value";
var red = "#ff0000";
var green = "#07ac72";
var btnRed = document.getElementById("red"); //btnRed
var btnGreen = document.getElementById("green"); //btnGreen
var ul = document.getElementById("list-ul"); //ul border top color
var a = document.getElementById("first-a"); //fisrt li backgroundColor
var leftContent = document.getElementById("leftContent"); // bgcolor  border color
var rightContent = document.getElementById("rightContent"); //bgcolor border color
//赋予事件
abAddEvent(btnRed, "click", setRed, false);
abAddEvent(btnGreen, "click", setGreen, false);
//颜色设置
var color = getCookie("color") || localStorage.color;
if (color) {
    setColor(color);
}
//跨浏览器设置事件
function abAddEvent(goal, event, func, bool) {
    if (goal.addEventListener) {
        goal.addEventListener(event, func, bool);
    } else if (goal.attachEvent) {
        goal.attachEvent("on" + event, func);
    } else {
        goal.onclik = func;
    }
}
//设置local红色
function setRed() {
    localStorage.color = red;
    addCookie("color", "#ff0000", 1);
    setColor(red);
}
//设置local绿色
function setGreen() {
    localStorage.color = green;
    addCookie("color", "#07ac72", 1);
    setColor(green);
}
//颜色设置
function setColor(color) {
    ul.style.borderTopColor = color;
    a.style.backgroundColor = color;
    leftContent.style.color = color;
    leftContent.style.borderColor = color;
    rightContent.style.color = color;
    rightContent.style.borderColor = color;
}

function addCookie(objName, objValue, objHours) { //添加cookie 
    var str = objName + "=" + escape(objValue);
    if (objHours > 0) { //为0时不设定过期时间，浏览器关闭时cookie自动消失 
        var date = new Date();
        var ms = objHours * 3600 * 1000;
        date.setTime(date.getTime() + ms);
        str += "; expires=" + date.toGMTString();
    }
    document.cookie = str;
    // alert("添加cookie成功");
}

function getCookie(objName) { //获取指定名称的cookie的值 
    var arrStr = document.cookie.split("; ");
    for (var i = 0; i < arrStr.length; i++) {
        var temp = arrStr[i].split("=");
        if (temp[0] == objName)
            return unescape(temp[1]);
    }
}

function delCookie(name) { //为了删除指定名称的cookie，可以将其过期时间设定为一个过去的时间 
    var date = new Date();
    date.setTime(date.getTime() - 10000);
    document.cookie = name + "=a; expires=" + date.toGMTString();
}
