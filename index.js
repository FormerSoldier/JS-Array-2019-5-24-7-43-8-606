// 阅读推荐的链接，复习JavaScript中数组的相关方法

// 写程序判断下列变量是不是数组类型。
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
console.log(a instanceof Array);	//false
console.log(b instanceof Array);	//true
//or
console.log(Array.isArray(a));		//false
console.log(Array.isArray(b));		//true


// 编写程序，将下面数组中的每一项都乘以2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
a.forEach(function(item, index, arr){arr[index] = item *2;});

// 编写程序，按下面的要求输出结果。
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
console.log(colors.join(' '));
console.log(colors.join('+'));
console.log(colors.join(','));

// 编写程序，将下面数组中的数字按从大到小的顺序排序。
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
a.sort(function(item1, item2){return item2 - item1});

// 编程程序，找出下列数组中出现频率最高的元素。
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
var max = 0;
var highestElmt = null;
//a数组中每个元素都会调用里面的匿名函数，reduce第二个参数为一开始的初始值
// 匿名函数的参数为 init初始值（必选）, item当前元素（必选）, index当前下角标（可选）,arr源数组（可选）
// 匿名函数的返回值作为下一个元素的初始值init 
var max = 0;
var highestElmt = null;
a.reduce(function(obj,item){
	// null的时候，是返回false
	obj[item] ? obj[item] ++ : obj[item] = 1;
	if(obj[item] > max){
		highestElmt = item;
		max = obj[item];
	}
	return obj;
		
},{});
console.log(highestElmt);

