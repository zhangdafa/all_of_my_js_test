//			JSON对象
// 每个JSON对象，就是一个值。
// 要么是简单类型的值，要么是复合类型的值，但是只能是一个值，不能是两个或更多的值。这就是说，每个JSON文档只能包含一个值


    // 复合类型的值只能是数组或对象，不能是函数、正则表达式对象、日期对象。

    // 简单类型的值只有四种：字符串、数值（必须以十进制表示）、布尔值和null（不能使用NaN, Infinity, -Infinity和undefined）。

    // 字符串必须使用双引号表示，不能使用单引号。

    // 对象的键名必须放在双引号里面。

    // 数组或对象最后一个成员的后面，不能加逗号。

//JSON.stringify()
//将一个值转为字符串。该字符串符合 JSON 格式，并且可以被JSON.parse方法还原
JSON.stringify('abc') // ""abc""
JSON.stringify(1) // "1"
JSON.stringify(false) // "false"
JSON.stringify([]) // "[]"
JSON.stringify({}) // "{}"

JSON.stringify([1, "false", false])
// '[1,"false",false]'

JSON.stringify({ name: "张三" })
// '{"name":"张三"}'

//如果原始对象中，有一个成员的值是undefined、函数或 XML 对象，这个成员会被过滤
var obj = {
  a: undefined,
  b: function () {}
};

JSON.stringify(obj) // "{}"

//如果数组的成员是undefined、函数或 XML 对象，则这些值被转成null
var arr = [undefined, function () {}];
JSON.stringify(arr) // "[null,null]"

//JSON.stringify方法还可以接受一个数组，作为第二个参数，指定需要转成字符串的属性
//对数组是无效的，只对对象有效
var obj = {
  'prop1': 'value1',
  'prop2': 'value2',
  'prop3': 'value3'
};

var selectedProperties = ['prop1', 'prop2'];

JSON.stringify(obj, selectedProperties)
// "{"prop1":"value1","prop2":"value2"}"

//第二个参数还可以是一个函数，用来更改JSON.stringify的默认行为
function f(key, value) {
  if (typeof value === "number") {
    value = 2 * value;
  }
  return value;
}

JSON.stringify({ a: 1, b: 2 }, f)
// '{"a": 2,"b": 4}'

//接受两个参数，分别是被转换的对象的键名和键值
//注意，这个处理函数是递归处理所有的键
//递归处理中，每一次处理的对象，都是前一次返回的值
var o = {a: 1};

function f(key, value) {
  if (typeof value === 'object') {
    return {b: 2};
  }
  return value * 2;
}

JSON.stringify(o,f)
// "{"b": 4}"

//f函数修改了对象o，接着JSON.stringify方法就递归处理修改后的对象o

//JSON.stringify还可以接受第三个参数，用于增加返回的JSON字符串的可读性。
// 如果是数字，表示每个属性前面添加的空格（最多不超过10个）；
// 如果是字符串（不超过10个字符），则该字符串会添加在每行前面。

//		toJSON 方法
//如果JSON.stringify的参数对象有自定义的toJSON方法，
//那么JSON.stringify会使用这个方法的返回值作为参数，而忽略原对象的其他属性
var user = {
  firstName: '三',
  lastName: '张',

  get fullName(){
    return this.lastName + this.firstName;
  },

  toJSON: function () {
    var data = {
      firstName: this.firstName,
      lastName: this.lastName
    };
    return data;
  }
};

JSON.stringify(user)
// "{"firstName":"三","lastName":"张"}"

var obj = {
  reg: /foo/
};

// 不设置 toJSON 方法时
JSON.stringify(obj) // "{"reg":{}}"

// 设置 toJSON 方法时
RegExp.prototype.toJSON = RegExp.prototype.toString;
JSON.stringify(/foo/) // ""/foo/""

//				JSON.parse()
//将JSON字符串转化成对象
JSON.parse('{}') // {}
JSON.parse('true') // true
JSON.parse('"foo"') // "foo"
JSON.parse('[1, 5, "false"]') // [1, 5, "false"]
JSON.parse('null') // null

var o = JSON.parse('{"name": "张三"}');
o.name // 张三

//JSON.parse方法可以接受一个处理函数，用法与JSON.stringify方法类似



