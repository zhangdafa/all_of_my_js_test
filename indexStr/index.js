/*
var arr = ["x", "x", "k", "x", "a", "a", "k", "x", "x", "k", "k"];
// 测试 var arr = ["a", "x", "b", "d", "m", "a", "d", "d", "d", "j", "a"];
// 出现最多的字母并给出个数和每一个所在的顺序
var obj = {};
obj.name = null; //每次出现最多的字符
obj.num1 = 1; //实际次数
obj.num2 = 1; //计算时的次数
obj.arr1 = []; //实际index数组
obj.arr2 = []; //计算时的index数字

function indexStr(arr) {
    for (var n = 0; n < arr.length; n++) {
        // 初始化
        if (n == 0) {
            obj.name = arr[0];
            obj.arr2.push(0);
        } else {
            if (arr[n] == obj.name) {
                continue;
            } else {
                obj.arr2.push(n);
            }
        }
        // 查找
        for (var j = n + 1; j < arr.length; j++) {
            if (arr[j] == arr[n]) {
                obj.num2 += 1;
                obj.arr2.push(j);

            }
        }
        // 每次便利完更新
        if (obj.num2 > obj.num1) {
            obj.name = arr[n];
            obj.num1 = obj.num2;
            obj.arr1 = obj.arr2;
        }
        // 每次都需要还原
        obj.num2 = 1;
        obj.arr2 = [];
    }

}

indexStr(arr);
obj.num2=null;
obj.arr2=null;
// alert("出现最多的字母是:" + obj.name + "   出现的次数是:" + obj.num1 + "   出现的位置是" + obj.arr1);
console.log("出现最多的字母是:" + obj.name + "   出现的次数是:" + obj.num1 + "   出现的位置是" + obj.arr1);

*/
// 获取各数值分布
var arr = ["x", "x", "k", "k", "a", "a", "k", "x", "x", "k", "a"];
var count={};	//计数
var position={};	//位置
arr.forEach(function(value,index){
	if (count[value]) {							//如果该字符存在
		count[value]++;                  		//计数+1
		position[value]+=","+index;				//获取index并链接

	}else{										//如果不存在
		count[value]=1;							//进行初始化
		position[value]=""+index;				//记录第一个位置
	}
});
// 打印所有字符的个数与位置
console.log("所有字符出现次数以及位置:");
console.log(count);
console.log(position);

var max=0; 					//存储最大个数
for(i in count){
	if (count[i]>max){
		// max_char=i;
		// max_char_index=position[i];
		max=count[i];
	}
}
//将非最大个数的清空
for (i in count) {
	if (max!=count[i]) {
		delete count[i];
		delete position[i];
	}
}
// 获取最多的字符与位置
console.log("出现次数最多的字符以及位置:");
console.log(count);
console.log(position);

