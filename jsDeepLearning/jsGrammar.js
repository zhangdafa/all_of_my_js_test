//JavaScript程序的执行单位为行（line），也就是一行一行地执行。一般情况下，每一行就是一个语句。
//JavaScript引擎的工作方式是，先解析代码，获取所有被声明的变量，然后再一行一行地运行。这造成的结果
//就是所有的变量的声明语句，都会被提升到代码的头部，这就叫做变量提升（hoisting）。
//标识符：
//       第一个字符，可以是任意Unicode字母（包括英文字母和其他语言的字母），以及美元符号（$）和下划线（_）。
//       第二个字符及后面的字符，除了Unicode字母、美元符号和下划线，还可以用数字0-9。
//       中文是合法标识符
//------------------------数据类型----------------------

// 数值（number）：整数和小数（比如1和3.14）
// 字符串（string）：字符组成的文本（比如”Hello World”）
// 布尔值（boolean）：true（真）和false（假）两个特定值
// undefined：表示“未定义”或不存在，即此处目前没有任何值
// null：表示空缺，即此处应该有一个值，但目前为空
// 对象（object）：各种值组成的集合
//*确定一个值是什么类型

    // typeof运算符
    // instanceof运算符
    // Object.prototype.toString方法
typeof 123 ;//number
typeof "aaa";//string
typeof false;//boolean
function f(){

}
typeof f;//function
typeof undefined; //undefined
//利用typeof判断一个变量是否声明
if(typeof v==="undefined"){
	//...
}
//其他情况
typeof {}; //object
typeof null;//object

//null和undefined
if(!null||!undefined){
	console.log("123");   //123
}
Number(null); //0
Number(undefined); //NaN
null==undefined ;//true

//布尔值
//undefined null false 0 NaN ""或''（空字符串）转化为false，其他都为true

//--------------数值精度  -(2^53-1)~2^53-1 可以精确表示------------------------
+0 === -0；
(1/+0)=+Infinity;
(1/-0)=-Infinity;
typeof NaN;//number
NaN==NaN;//false
//判断NaN
isNaN(NaN);//true
//判断NaN更可靠的方法是，利用NaN是JavaScript之中唯一不等于自身的值这个特点，进行判断。
function myIsNaN(value){
	return value!==value;
}
//isFinite判断一个数值是否是正常数值
isFinite(NaN);//false
//paraseInt用于将字符串转为整数
parseInt("123");//123
parseInt(1.23);//1
parseInt("     81");//81
//字符串转为整数的时候，是一个个字符依次转换，如果遇到不能转为数字的字符，就不再进行下去，返回已经转好的部分。
parseInt("123aaa");//123
//如果字符串的第一个字符不能转化为数字（后面跟着数字的正负号除外），返回NaN。
parseInt("aaa");//NaN
parseInt("+1");//1
//parseInt的第二个参数用于进制转换表示进制数,最终转换为10进制
parseInt("121",2);
//parseFloat用于将字符串转为浮点数
parseFloat("3.14");
//--------------------字符串-------------------------------
//字符串包含于''单引号或者""双引号内，尽量遵守一种原则
var str="aaaaaa\"book\"";//aaaaa"book"
var book="abc\
		  def\
		  gha";  //分成多行的字符串
//如果想输出多行字符串，有一种利用多行注释的变通方法
(function () { /*
line 1
line 2
line 3
*/}).toString().split('\n').slice(1, -1).join('\n');
// "line 1
// line 2
// line 3"

//---------------------转义--------------

/*
\0 null（\u0000）
\b 后退键（\u0008）
\f 换页符（\u000C）
\n 换行符（\u000A）
\r 回车键（\u000D）
\t 制表符（\u0009）
\v 垂直制表符（\u000B）
\' 单引号（\u0027）
\" 双引号（\u0022）
\ 反斜杠（\u005C）
*/
//----------------字符串与数组----------------------------
//字符串可以看做字符数组，可是不能通过数组方式来改变字符串内容
var s="hello";
s[0]="a";//无效
//length
s.length;//5
//------------------------------------对象---------------------
//一种无序的数据集合，由若干个“键值对”（key-value）构成
//三种生成对象的方式
var o1 = {};
var o2 = new Object();
var o3 = Object.create(Object.prototype);
//----------------对象的引用------------仅仅局限于对象，对于其他类型都是值的拷贝
var o2=o1;
o1.a=1;
o2.a;	//1
o2.b=2;
o1.b;	//2
o1=1;  //改变o1的值
o2;    //o2仍然为对象{}
//对于行首的对象需要加上大括号
({foo : 123});

//-------------对象属性的操作--------
var o={
	p:'hello'
};
o.p;//点运算符hello
o['p'];//方括号运算符hello

//检查变量是否声明
if('a' in window){
	//声明
}else{
	//未声明
}
//查看某个对象的所有属性
Object.keys('o');//['p']
//delete命令
delete o.p;
o.p;//undefined
Object.keys('o');//[]
delete o.p;//true
//只有一种情况，delete命令会返回false，那就是该属性存在，且不得删除。
//-------------------------------------------------in运算符---------------
//in运算符的一个问题是，它不能识别对象继承的属性。
o.hasOwnProperty('toString') // false
'toString' in o // true
//------------------------------------------------for-in循环-----------
// 它遍历的是对象所有可遍历（enumerable）的属性，会跳过不可遍历的属性
// 它不仅遍历对象自身的属性，还遍历继承的属性。
//一般情况下，都是只想遍历对象自身的属性，所以不推荐使用for...in循环。
//------------------------------------------------获取对象键名的方法
var obj={
	x1:'hello',
	x2:'world'
}
var props=[];
var i=0;
for(props[i++] in obj);
props;//['x1','x2'];
//-----------------------------遍历对象属性的例子
// name 是 Person 本身的属性
function Person(name) {
  this.name = name;
}

// describe是Person.prototype的属性
Person.prototype.describe = function () {
  return 'Name: '+this.name;
};

var person = new Person('Jane');

// for...in循环会遍历实例自身的属性（name），
// 以及继承的属性（describe）
for (var key in person) {
  console.log(key);
}
// name
// describe
//----------------------------如果只想获取自身属性使用hasOwnProperty
for (var key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(key);
  }
}
// name

//----------------------------------------with语句
o.p1=3;
o.p2=4;
with(o){
	p1=1;	//o.p1=1
	p2=2;	//o.p2=2
}
//注意，with区块内部的变量，必须是当前对象已经存在的属性，否则会创造一个当前作用域的全局变量
delete o.p1;
delete o.p2;
with(o){
	p1=1;	//o.p1=1
	p2=2;	//o.p2=2
}
o.p1;	//undefined
o.p2;	//undefined
p1;	//1
p2; //2

//--------------------------------------数组----特殊的object对象----任何数据都可以放入数组
//数组长度length可写
var arr=[1,2,3];
arr.length=2;	//[1,2]
arr.length=0;	//清空数组

//类似数组的对象 拥有length属性
var arr1={
	0:'a',
	1:'b',
	2:'c',
	length:3
};
// arguments对象
function args() { return arguments }
var arrayLike = args('a', 'b');

arrayLike[0] // 'a'
arrayLike.length // 2
arrayLike instanceof Array // false

// DOM元素集
var elts = document.getElementsByTagName('h3');
elts.length // 3
elts instanceof Array // false

// 字符串
'abc'[1] // 'b'
'abc'.length // 3
'abc' instanceof Array // false

//-数组的空位
var arr2=[1,,3];
arr2.length;	//3
// 数组的某个位置是空位，与某个位置是undefined，是不一样的。
// 如果是空位，使用数组的forEach方法、for...in结构、以及Object.keys方法进行遍历，空位都会被跳过。

//函数部分请看jsFunction.js

//									错误处理机制
//Error对象
//Error构造函数接受一个参数，表示错误提示，可以从实例的message属性读到这个参数

// message：错误提示信息
// name：错误名称（非标准属性）
// stack：错误的堆栈（非标准属性）

//				JavaScript的原生错误类型
//Error对象是最一般的错误类型，在它的基础上，JavaScript还定义了其他6种错误，也就是说，存在Error的6个派生对象
//SyntaxError是解析代码时发生的语法错误
//ReferenceError是引用一个不存在的变量时发生的错误
//RangeError是当一个值超出有效范围时发生的错误
//TypeError是变量或参数不是预期类型时发生的错误
//URIError是URI相关函数的参数不正确时抛出的错误
//EvalError是eval函数没有被正确执行时，会抛出EvalError错误

//				自定义错误
function UserError(message) {
   this.message = message || "默认信息";
   this.name = "UserError";
}

UserError.prototype = new Error();
UserError.prototype.constructor = UserError;

//			throw语句	中断程序执行，抛出一个意外或错误。它接受一个表达式作为参数，可以抛出各种值
//			try.....catch
//			finally
//try...catch结构允许在最后添加一个finally代码块，表示不管是否出现错误，都必需在最后运行的语句
//return语句的执行是排在finally代码之前，只是等finally代码执行完毕后才返回
//******catch代码块结束执行之前，会先执行finally代码块。从catch转入finally的标志，不仅有return语句，还有throw语句




