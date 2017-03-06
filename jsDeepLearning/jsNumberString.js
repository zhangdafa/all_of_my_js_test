//		Number对象   包装对象
//
//
//Number.prototype.toFixed()
//将一个数转为指定位数的小数，返回这个小数对应的字符串
(10).toFixed(2); // "10.00"
10.005.toFixed(2); // "10.01"


//Number.prototype.toExponential()
//用于将一个数转为科学计数法形式
(10).toExponential() ; // "1e+1"
(10).toExponential(1); // "1.0e+1"
(10).toExponential(2); // "1.00e+1"

(1234).toExponential() ; // "1.234e+3"
(1234).toExponential(1); // "1.2e+3"
(1234).toExponential(2) ;// "1.23e+3"

//Number.prototype.toPrecision()
//用于将一个数转为指定位数的有效数字
(12.34).toPrecision(1); // "1e+1"
(12.34).toPrecision(2); // "12"
(12.34).toPrecision(3); // "12.3"
(12.34).toPrecision(4); // "12.34"
(12.34).toPrecision(5); // "12.340"

//			String对象 	包装对象
//字符串的包装对象是一个类似数组的对象

//String.fromCharCode()

//	charAt()		返回指定位置的字符
//如果参数为负数，或大于等于字符串的长度，charAt返回空字符串

//	concat()		连接两个字符串，返回一个新字符串，不改变原字符串

var s1 = 'abc';
var s2 = 'def';

s1.concat(s2) // "abcdef"
s1 // "abc"

//该方法可以接受多个参数。

'a'.concat('b', 'c') // "abc"

//	slice() 	从原字符串取出子字符串并返回，不改变原字符串

//	substr()	从原字符串取出子字符串并返回，不改变原字符串
//第一个参数是子字符串的开始位置，第二个参数是子字符串的长度

//	indexOf()，lastIndexOf()

//	trim()	去除字符串两端的空格，返回一个新字符串，不改变原字符串
//该方法去除的不仅是空格，还包括制表符（\t、\v）、换行符（\n）和回车符（\r）

//	toLowerCase()，toUpperCase()

//	localeCompare()
//比较两个字符串。它返回一个整数，
//如果小于0，表示第一个字符串小于第二个字符串；
//如果等于0，表示两者相等；
//如果大于0，表示第一个字符串大于第二个字符串

//	match()
//确定原字符串是否匹配某个子字符串，返回一个数组，成员为匹配的第一个字符串。如果没有找到匹配，则返回null
var matches = 'cat, bat, sat, fat'.match('at');['at']
matches.index // 1
matches.input // "cat, bat, sat, fat"

//	search()
//search方法的用法等同于match，但是返回值为匹配的第一个位置。如果没有找到匹配，则返回-1。

'cat, bat, sat, fat'.search('at') // 1

//	replace()
//替换匹配的子字符串，一般情况下只替换第一个匹配（除非使用带有g修饰符的正则表达式）

//	split()
//按照给定规则分割字符串，返回一个由分割出来的子字符串组成的数组
//split方法还可以接受第二个参数，限定返回数组的最大成员数
'a|b|c'.split('|', 2) // ["a", "b"]
'a|b|c'.split('|', 3) // ["a", "b", "c"]
'a|b|c'.split('|', 4) // ["a", "b", "c"]





