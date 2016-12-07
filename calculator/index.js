function calculator() {

    //计算器需要精确到浮点类型
    var num1 = parseFloat(document.getElementById("text1").value);
    var num2 = parseFloat(document.getElementById("text2").value);
    var sign = document.getElementById("sign").value;
    var result = document.getElementById("result");

    //判断是否为数字
    if (isNaN(num1) || isNaN(num1)) {
        alert("请输入正确的数值");
        return;
    }
    switch (sign) {
        //将计算结果精确到浮点类型8位小数以内
        case "加":
            return result.value = parseFloat((num1 + num2).toFixed(8));
            break;
        case "减":
            return result.value = parseFloat((num1 - num2).toFixed(8));
            break;
        case "乘":
            return result.value = parseFloat((num1 * num2).toFixed(8));
            break;
        case "除":
            // 除数位0的情况
            if (num2 == 0) {
                alert("除数不能为0，请重新输入");
                return;
            }
            return result.value = parseFloat((num1 / num2).toFixed(8));
            break;
        default:
            break;
    }
}
