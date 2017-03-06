//函数的声明
//function 命令
function f(){}
//函数表达式
var g=function(){};
//Function构造函数，最后一个参数为函数体
var e=new Function('x','y','return x+y;');
e(1,2);
//函数的重复声明
//如果同一个函数被多次声明，后面的声明就会覆盖前面的声明。
//函数名的提升
//使用function命令会提升,函数表达式则不会
//----------------------------------------------函数的属性和方法
//   name属性
f.name;	//f
g.name;	//''
//	 length属性，返回函数预期参数个数
e.length;	//2
//		toString函数，返回函数源码
e.toString();
//实现多行字符串
function f(){
	/*
	第一行
	第二行
	*/
}
function multiline(fn){
	var arr=fn.toString().split('\n');
	return arr.slice(2,arr.length-2).join('\n');
}
multiline(f);

// 			函数作用域
//在函数外部声明的变量就是全局变量（global variable），它可以在函数内部读取
//在函数内部定义的变量，外部无法读取，称为“局部变量”（local variable）
//			函数内部同样存在变量提升
//			函数本身的作用域
//函数本身也是一个值，也有自己的作用域。它的作用域与变量一样，就是其声明时所在的作用域，与其运行时所在的作用域无关
var a = 1;
var x = function () {
  console.log(a);
};

function f() {
  var a = 2;
  x();
}

f(); // 1

//同样的，函数体内部声明的函数，作用域绑定函数体内部
function foo() {
  var x = 1;
  function bar() {
    console.log(x);
  }
  return bar;
}

var x = 2;
var f = foo();
f(); // 1

//				传递方式    原始类型值传递，复合类型引用传递
var p = 2;

function f(p) {
  p = 3;
}
f(p);

p ;// 2

//				arguments对象
//arguments转化为数组
//var args=Array.prototype.slice.call(arguments);

//						闭包函数		定义在一个函数内部的函数
//闭包作用:可以读取函数内部的变量
//		   让这些变量始终保持在内存中
//		   封装对象的私有属性和私有方法

//eval命令		将字符串当作语句执行
eval('var a=1;');
a;	//1
//eval最常见的场合是解析JSON数据字符串，不过正确的做法应该是使用浏览器提供的JSON.parse方法




