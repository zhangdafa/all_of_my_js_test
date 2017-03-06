//							Object对象
//如果Object方法的参数是一个对象，它总是返回原对象
//Object对象的静态方法
//Object.keys()，Object.getOwnPropertyNames()
//它们的参数都是一个对象，都返回一个数组，该数组的成员都是对象自身的（而不是继承的）所有属性名
//前者返回可枚举的属性，后者返回不可枚举的属性

//Object.prototype.valueOf() 		返回一个对象的“值”，默认情况下返回对象本身
var o = new Object();
o.valueOf() === o ;// true
//valueOf方法的主要用途是，JavaScript自动类型转换时会默认调用这个方法
var o = new Object();
o.valueOf = function (){
  return 2;
};

1 + o; // 3

//Object.prototype.toString()		 返回一个对象的字符串形式，默认情况下返回类型字符串
//通过自定义toString方法，可以让对象在自动类型转换时，得到想要的字符串形式
var o = new Object();

o.toString = function () {
  return 'hello';
};

o + ' ' + 'world' ;// "hello world"

//toString()的应用：判断数据类型
var type = function (o){
  var s = Object.prototype.toString.call(o);
  return s.match(/\[object (.*?)\]/)[1].toLowerCase();
};

type({}); // "object"
type([]); // "array"
type(5); // "number"
type(null); // "null"
type(); // "undefined"
type(/abcd/); // "regex"
type(new Date()); // "date"

['Null',
 'Undefined',
 'Object',
 'Array',
 'String',
 'Number',
 'Boolean',
 'Function',
 'RegExp',
 'NaN',
 'Infinite'
].forEach(function (t) {
  type['is' + t] = function (o) {
    return type(o) === t.toLowerCase();
  };
});

type.isObject({}); // true
type.isNumber(NaN); // true
type.isRegExp(/abc/); // true

//	属性描述对象
//JavaScript提供了一个内部数据结构，用来描述一个对象的属性的行为，控制它的行为。
//这被称为“属性描述对象”（attributes object）。
//每个属性都有自己对应的属性描述对象，保存该属性的一些元信息

// {
//   value: 123,
//   writable: false,
//   enumerable: true,
//   configurable: false,
//   get: undefined,
//   set: undefined
// }
// 属性描述对象提供6个元属性。

// （1）value

// value存放该属性的属性值，默认为undefined。

// （2）writable

// writable存放一个布尔值，表示属性值（value）是否可改变，默认为true。

// （3）enumerable

// enumerable存放一个布尔值，表示该属性是否可枚举，默认为true。如果设为false，会使得某些操作（比如for...in循环、Object.keys()）跳过该属性。

// （4）configurable

// configurable存放一个布尔值，表示“可配置性”，默认为true。如果设为false，将阻止某些操作改写该属性，比如，无法删除该属性，也不得改变该属性的属性描述对象（value属性除外）。也就是说，configurable属性控制了属性描述对象的可写性。

// （5）get

// get存放一个函数，表示该属性的取值函数（getter），默认为undefined。

// （6）set

// set存放一个函数，表示该属性的存值函数（setter），默认为undefined。

//Object.getOwnPropertyDescriptor()	读出对象自身属性的属性描述对象
var o = { p: 'a' };

Object.getOwnPropertyDescriptor(o, 'p')
// Object { value: "a",
//   writable: true,
//   enumerable: true,
//   configurable: true
// }

// Object.defineProperty()，Object.defineProperties()
//Object.defineProperty方法允许通过定义属性描述对象，来定义或修改一个属性，然后返回修改后的对象
//Object.defineProperty(object, propertyName, attributesObject)
var o = Object.defineProperty({}, 'p', {
  value: 123,
  writable: false,
  enumerable: true,
  configurable: false
});

o.p
// 123
//需要注意的是，Object.defineProperty方法和后面的Object.defineProperties方法，都有性能损耗，会拖慢执行速度，不宜大量使用

//可枚举性（enumerable）
//如果一个属性的enumerable为false，下面三个操作不会取到该属性
//
    // for..in循环
    // Object.keys方法
    // JSON.stringify方法




