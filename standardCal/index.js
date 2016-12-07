//思路：Obj: cal
//cal.signNum=0/1    判断0累计或1更换的标志位
//cal.dot        判断小数点个数
//cal.signCount
//cal.num1		  加数
//cal.num2		  被加数
var cal = {};
cal.signNum = 0;
cal.signCal = null;
cal.num1 = "";
cal.num2 = "";
cal.dot = 0;
// cal.signCount = 0;
var numBtns = document.getElementsByName("number");
var signBtns = document.getElementsByName("sign");
var result = document.getElementById("result");

//数字按钮时间添加
for (index in numBtns) {
    abAddEvent(numBtns[index], "click", inputNum, false);
}
//操作符事件添加
for (index in signBtns) {
    switch (signBtns[index].innerText) {
        case ".":
            abAddEvent(signBtns[index], "click", dot, false);
            break;
        case "+":
        case "-":
        case "X":
        case "/":
        case "%":
            abAddEvent(signBtns[index], "click", signPlus, false);
            break;
        case "=":
            abAddEvent(signBtns[index], "click", getEqual, false);
            break;
        case "清屏":
            abAddEvent(signBtns[index], "click", clearInput, false);
            break;
        case "1/x":
            abAddEvent(signBtns[index], "click", countBack, false);
            break;
        case "求根":
            abAddEvent(signBtns[index], "click", sqrt, false);
            break;
        case "+/-":
            abAddEvent(signBtns[index], "click", pon, false);
            break;
        case "退格":
            abAddEvent(signBtns[index], "click", backNum, false);
            break;
        case "sin":
            abAddEvent(signBtns[index], "click", getSin, false);
            break;
        case "cos":
            abAddEvent(signBtns[index], "click", getCos, false);
            break;
        default:
            break;
    }

}

function inputNum() {
    // sign==0 累计
    if (cal.signNum == 0) {
        if (cal.num1 == 0 && result.value.charAt(result.value.length - 1) != ".") {
            result.value = this.innerText;
            cal.num1 = parseFloat(result.value);
        } else {
            result.value = result.value + this.innerText;
            cal.num1 = parseFloat(result.value);
            // cal.signCount = 0;
        }
    } else {
        if (cal.num2 == 0 && result.value.charAt(result.value.length - 1) != ".") {
            result.value = this.innerText;
            cal.num2 = parseFloat(result.value);
        } else {

            result.value = result.value + this.innerText;
            cal.num2 = parseFloat(result.value);

            // cal.signCount = 0;
        }
    }
    // console.log(this.value);
    // result.value = result.value + this.innerText;
    // cal.num2 = parseFloat(result.value);
}
//dot小数点判断
function dot() {
    if (cal.dot == 1) {
        return;
    }
    if (cal.signNum == 0) {
        result.value = result.value + this.innerText;
        cal.dot = 1;
        cal.num1 = parseFloat(result.value);
    } else {
        if (cal.num2 == 0 && result.value.charAt(result.value.length - 1) != ".") {
            if (result.value == "0") {
                result.value = result.value + this.innerText;
                cal.dot = 1;
                cal.num2 = parseFloat(result.value);
            } else {
                result.value = this.innerText;
                cal.num2 = parseFloat(result.value);
                cal.dot = 1;
            }
        } else {
            result.value = result.value + this.innerText;
            cal.dot = 1;
            cal.num2 = parseFloat(result.value);
        }

    }
}
//跨浏览器代码封装
function abAddEvent(goal, event, func, bool) {
    if (goal.addEventListener) {
        goal.addEventListener(event, func, bool);
    } else if (goal.attachEvent) {
        goal.attachEvent("on" + event, func);
    } else {
        goal.onclik = func;
    }
}
// +,-,X,/号事件函数
function signPlus() {
    if (cal.signNum == 0) { //首次运算的情况
        if (cal.num1 == 0) { //第一次输入不能为符号
            return;
        } else {
            cal.signCal = this.innerText;
            cal.signNum = 1;
            // cal.signCount = 1;
            cal.dot = 0;
        }
    }

}
// 等于号事件函数
function getEqual() {
    switch (cal.signCal) {
        case "+":
            cal.num1 = parseFloat((cal.num1 + cal.num2).toFixed(8));
            result.value = cal.num1;
            break;
        case "-":
            cal.num1 = parseFloat((cal.num1 - cal.num2).toFixed(8));
            result.value = cal.num1;
            break;
        case "X":
            cal.num1 = parseFloat((cal.num1 * cal.num2).toFixed(8));
            result.value = cal.num1;
            break;
        case "%":
            cal.num1 = parseFloat((cal.num1 % cal.num2).toFixed(8));
            result.value = cal.num1;
            break;
        case "/":
            if (cal.num2 == 0) { //除数为0的情况
                result.value = "NAN";
                break;
            }
            cal.num1 = parseFloat((cal.num1 / cal.num2).toFixed(8));
            result.value = cal.num1;
            break;
        default:
            break;
    }
    cal.signNum = 0; //标志位置0，恢复到第一次运算的情况
    cal.num2 = 0; //将第二个数置0
    cal.signCal = null; //清空运算符
}
// 清屏  全部初始化
function clearInput() {
    cal.signNum = 0;
    cal.signCal = null;
    cal.num1 = 0;
    cal.num2 = 0;
    cal.dot = 0;
    // cal.signCount = 0;
    result.value = "";
}

//倒数 事件函数
function countBack() {
    if (cal.num1 == 0) {
        result.value = "NAN";
        return;
    }
    result.value = 1 / cal.num1;
    cal.num1 = 1 / cal.num1;

}
//求根操作
function sqrt() {
    result.value = Math.sqrt(cal.num1);
    cal.num1 = Math.sqrt(cal.num1);

}
//正负操作
function pon() {
    if (cal.signNum == 0) {
        if (cal.num1 == 0) {
            return;
        } else {
            if (cal.num1 > 0) {
                cal.num1 = -cal.num1;
                result.value = parseFloat(cal.num1);
            } else {
                cal.num1 = -cal.num1;
                result.value = parseFloat(cal.num1);
            }
        }
    } else {
        if (cal.num2 == 0) {
            return;
        } else {
            if (cal.num2 > 0) {
                cal.num2 = -cal.num2;
                result.value = parseFloat(cal.num2);
            } else {
                cal.num2 = -cal.num2;
                result.value = parseFloat(cal.num2);
            }
        }
    }
}
//退格
function backNum() {
    if (cal.signNum == 0) {
        result.value = result.value.substring(0, result.value.length - 1);
        cal.num1 = parseFloat(result.value);
    } else {
        result.value = result.value.substring(0, result.value.length - 1);
        cal.num2 = parseFloat(result.value);
    }

}

function getSin() {
    if (cal.signNum == 0) {
        cal.num1 = parseFloat(Math.sin(cal.num1 * Math.PI / 180).toFixed(8));
        result.value = cal.num1;
    } else {
        cal.num2 = parseFloat(Math.sin(cal.num2 * Math.PI / 180).toFixed(8));
        result.value = cal.num2;
    }
}

function getCos() {
    if (cal.signNum == 0) {
        cal.num1 = parseFloat(Math.cos(cal.num1 * Math.PI / 180).toFixed(8));
        result.value = cal.num1;
    } else {
        cal.num2 = parseFloat(Math.cos(cal.num2 * Math.PI / 180).toFixed(8));
        result.value = cal.num2;
    }
}
