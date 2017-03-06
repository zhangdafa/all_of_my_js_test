//不建议使用new Array()的方式生成新数组
//应使用字面量的方式
//Arrar.isArray()		判断一个变量是否为数组
var arr=[1,2,3];
//valueOf()		返回数组本身
arr.valueOf();	//[1,2,3
//toString()	返回数组字符串形式
//push()		在数组的末端添加一个或多个元素，并返回添加新元素后的数组长度
var arr1=[4,5,6];
//数组的合并
Array.prototype.push.apply(arr,arr1);
//push方法还可以用于向对象添加元素，添加后的对象变成类似数组的对象，
//即新加入元素的键对应数组的索引，并且对象有一个length属性
var a={a:1};
Array.prototype.push.call(a,1);
a;	//{a:1,0:1,length:1}

//join()	以参数作为分隔符，将所有数组成员组成一个字符串返回。如果不提供参数，默认用逗号分隔
arr1.join();	//"4,5,6"
//如果数组成员是undefined或null或空位，会被转成空字符串
[undefined,null].join();	//','
//通过call方法，这个方法也可以用于字符串
var str="abc";
Array.prototype.join.call(str,'-');	//'a-b-c'
//join方法也可以用于类似数组的对象
var s={0:'a',1:'b',length:2};
Array.prototype.join.call(s,'-');	//'a-b'
//concat()	用于多个数组的合并。它将新数组的成员，添加到原数组的尾部，然后返回一个新数组，**原数组不变
[1, 2, 3].concat(4, 5, 6);	//[1,2,3,4,5,6]
//					concat方法返回当前数组的一个浅拷贝。
//					所谓“浅拷贝”，指的是如果数组成员包括复合类型的值（比如对象），则新数组拷贝的是该值的引用
//shift()	删除数组的第一个元素，并返回该元素
var a = ['a', 'b', 'c'];

a.shift(); // 'a'
a; // ['b', 'c']
//shift方法可以遍历并清空一个数组
var temp;
while(temp = a.shift()){

}
a;	//[]
//unshift()	用于在数组的第一个位置添加元素，并返回添加新元素后的数组长度。注意，该方法会改变原数组
var a = ['a', 'b', 'c'];

a.unshift('x'); // 4
a; // ['x', 'a', 'b', 'c']

//reserve()	用于颠倒数组中元素的顺序，返回改变后的数组。注意，该方法将改变原数组
a.reserve(); 	//['c','b','a','x']

//slice()	用于提取原数组的一部分，返回一个新数组，原数组不变
//它的第一个参数为起始位置（从0开始），第二个参数为终止位置（但该位置的元素本身不包括在内）。
//如果省略第二个参数，则一直返回到原数组的最后一个成员
//如果slice方法的参数是负数，则表示倒数计算的位置
var a = ['a', 'b', 'c'];
a.slice(-2) ;// ["b", "c"]
a.slice(-2, -1) ;// ["b"]
//做一个数组的拷贝
s.slice();
//如果参数值大于数组成员的个数，或者第二个参数小于第一个参数，则返回空数组
//slice方法的一个重要应用，是将类似数组的对象转为真正的数组
Array.prototype.slice.call({ 0: 'a', 1: 'b', length: 2 })
// ['a', 'b']

//splice()	于删除原数组的一部分成员，并可以在被删除的位置添加入新的数组成员，返回值是被删除的元素。
//注意，该方法会改变原数组
//第一个参数是删除的起始位置，第二个参数是被删除的元素个数。如果后面还有更多的参数，则表示这些就是要被插入数组的新元素
var a = ['a', 'b', 'c', 'd', 'e', 'f'];
a.splice(4, 2, 1, 2); // ["e", "f"]
a; // ["a", "b", "c", "d", 1, 2]
//如果只是单纯地插入元素，splice方法的第二个参数可以设为0
var a = [1, 1, 1];

a.splice(1, 0, 2); // []
a; // [1, 2, 1, 1]
//如果只提供第一个参数，等同于将原数组在指定位置拆分成两个数组
var a = [1, 2, 3, 4];
a.splice(2); // [3, 4]
a; // [1, 2]

//sort()	对数组成员进行排序，默认是按照字典顺序排序。排序后，原数组将被改变
//sort方法不是按照大小排序，而是按照对应字符串的字典顺序排序
[10111, 1101, 111].sort();
// [10111, 1101, 111]
//如果想让sort方法按照自定义方式排序，可以传入一个函数作为参数，表示按照自定义方法进行排序
//该函数本身又接受两个参数，表示进行比较的两个元素。
//如果返回值大于0，表示第一个元素排在第二个元素后面；其他情况下，都是第一个元素排在第二个元素前面
[10111, 1101, 111].sort(function (a, b) {
  return a - b;
});
// [111, 1101, 10111]

[
  { name: "张三", age: 30 },
  { name: "李四", age: 24 },
  { name: "王五", age: 28  }
].sort(function (o1, o2) {
  return o1.age - o2.age;
});
// [
//   { name: "李四", age: 24 },
//   { name: "王五", age: 28  },
//   { name: "张三", age: 30 }
// ]

//map()	对数组的所有成员依次调用一个函数，根据函数结果返回一个新数组,不改变原数组
var numbers = [1, 2, 3];

numbers.map(function (n) {
  return n + 1;
});
// [2, 3, 4]

numbers；
// [1, 2, 3]
//map方法接受一个函数作为参数。该函数调用时，map方法会将其传入三个参数，分别是当前成员、当前位置和数组本身
[1, 2, 3].map(function(elem, index, arr) {
  return elem * index;
});
// [0, 2, 6]

//map方法还可以接受第二个参数，表示回调函数执行时this所指向的对象
var arr = ['a', 'b', 'c'];

[1, 2].map(function(e){
  return this[e];
}, arr);
// ['b', 'c']

//		forEach()
//forEach方法与map方法很相似，也是遍历数组的所有成员，执行某种操作，
//但是forEach方法一般不返回值，只用来操作数据。如果需要有返回值，一般使用map方法
//无视break
//适用于类数组的对象与字符串

//		filter()
//参数是一个函数，所有数组成员依次执行该函数，返回结果为true的成员组成一个新数组返回。该方法不会改变原数组
//还可以接受第二个参数，指定测试函数所在的上下文对象（即this对象）

//		some()  every()
//接受一个函数作为参数，所有数组成员依次执行该函数，返回一个布尔值。
//该函数接受三个参数，依次是当前位置的成员、当前位置的序号和整个数组

//some方法是只要有一个数组成员的返回值是true，则整个some方法的返回值就是true，否则false
//every方法则是所有数组成员的返回值都是true，才返回true，否则false

//对于空数组，some方法返回false，every方法返回true，回调函数都不会执行
//some和every方法还可以接受第二个参数，用来绑定函数中的this关键字

//		reduce()   reduceRight()	依次处理数组的每个成员，最终累计为一个值
//reduce是从左到右处理（从第一个成员到最后一个成员），
//reduceRight则是从右到左（从最后一个成员到第一个成员），其他完全一样
//这两个方法的第一个参数都是一个函数。该函数接受以下四个参数

// 累积变量，默认为数组的第一个成员
// 当前变量，默认为数组的第二个成员
// 当前位置（从0开始）
// 原数组
[1, 2, 3, 4, 5].reduce(function(x, y){
  console.log(x, y)
  return x + y;
});
// 1 2
// 3 3
// 6 4
// 10 5
//最后结果：15

// 利用reduce方法，可以写一个数组求和的sum方法
Array.prototype.sum=function(){
	return this.reduce(function(partial,value){
		return partial+value;
	});
};
//如果要对累积变量指定初值，可以把它放在reduce方法和reduceRight方法的第二个参数
[1, 2, 3, 4, 5].reduce(function(x, y){
  return x + y;
}, 10);
//由于reduce方法依次处理每个元素，所以实际上还可以用它来搜索某个元素。比如，下面代码是找出长度最长的数组元素
function findLongest(entries) {
  return entries.reduce(function (longest, entry) {
    return entry.length > longest.length ? entry : longest;
  }, '');
}

findLongest(['aaa', 'bb', 'c']) ;// "aaa"

//			indexOf()  	lastIndexOf()
//indexOf方法返回给定元素在数组中第一次出现的位置，如果没有出现则返回-1
//indexOf方法还可以接受第二个参数，表示搜索的开始位置




















