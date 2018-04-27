// alert("hello js");
var x = 1;
console.log(x);

//JavaScript严格区分大小写，如果弄错了大小写，程序将报错或者运行不正常。


// JavaScript不区分整数和浮点数，统一用Number表示，以下都是合法的Number类型：
123; // 整数123
0.456; // 浮点数0.456
1.2345e3; // 科学计数法表示1.2345x1000，等同于1234.5
-99; // 负数
NaN; // NaN表示Not a Number，当无法计算结果时用NaN表示
Infinity; // Infinity表示无限大，当数值超过了JavaScript的Number所能表示的最大值时，就表示为Infinity


// Number可以直接做四则运算，规则和数学一致：

1 + 2; // 3
(1 + 2) * 5 / 2; // 7.5
2 / 0; // Infinity
0 / 0; // NaN
10 % 3; // 1
10.5 % 3; // 1.5

// 字符串是以单引号'或双引号"括起来的任意文本，比如'abc'，"xyz"等等

// 布尔值和布尔代数的表示完全一致，一个布尔值只有true、false两种值，要么是true，要么是false，
// 可以直接用true、false表示布尔值，也可以通过布尔运算计算出来：
true; // 这是一个true值
false; // 这是一个false值
2 > 1; // 这是一个true值
2 >= 3; // 这是一个false值

var age = 15;
if (age >= 18) {
    alert('adult');
} else {
    alert('teenager');
}


//当我们对Number做比较时，可以通过比较运算符得到一个布尔值：
2 > 5; // false
5 >= 2; // true
7 == 7; // true

// 实际上，JavaScript允许对任意数据类型做比较：

false == 0; // true
false === 0; // false
// JavaScript在设计时，有两种比较运算符：
// 第一种是 == 比较，它会自动转换数据类型再比较，很多时候，会得到非常诡异的结果；
// 第二种是 === 比较，它不会自动转换数据类型，如果数据类型不一致，返回false，如果一致，再比较。
// 由于JavaScript这个设计缺陷，不要使用==比较，始终坚持使用===比较。
// 另一个例外是NaN这个特殊的Number与所有其他值都不相等，包括它自己：
NaN === NaN; // false
// 唯一能判断NaN的方法是通过isNaN()函数：
isNaN(NaN); // true
// 最后要注意浮点数的相等比较：
1 / 3 === (1 - 2 / 3); // false
// 这不是JavaScript的设计缺陷。浮点数在运算过程中会产生误差，因为计算机无法精确表示无限循环小数。要比较两个浮点数是否相等，只能计算它们之差的绝对值，看是否小于某个阈值：

Math.abs(1 / 3 - (1 - 2 / 3)) < 0.0000001; // true

// null表示一个“空”的值，它和0以及空字符串''不同，0是一个数值，''表示长度为0的字符串，而null表示“空”。

// 在其他语言中，也有类似JavaScript的null的表示，例如Java也用null，Swift用nil，Python用None表示。但是，在JavaScript中，还有一个和null类似的undefined，它表示“未定义”。
// JavaScript的设计者希望用null表示一个空的值，而undefined表示值未定义。事实证明，这并没有什么卵用，区分两者的意义不大。大多数情况下，我们都应该用null。undefined仅仅在判断函数参数是否传递的情况下有用。

// 数组是一组按顺序排列的集合，集合的每个值称为元素。JavaScript的数组可以包括任意数据类型。例如：
[1, 2, 3.14, 'Hello', null, true];

// 另一种创建数组的方法是通过Array()函数实现：
new Array(1, 2, 3); // 创建了数组[1, 2, 3]
// 然而，出于代码的可读性考虑，强烈建议直接使用[]。

// 数组的元素可以通过索引来访问。请注意，索引的起始值为0：

var arr = [1, 2, 3.14, 'Hello', null, true];
arr[0]; // 返回索引为0的元素，即1
arr[5]; // 返回索引为5的元素，即true
arr[6]; // 索引超出了范围，返回undefined

// JavaScript的对象是一组由键-值组成的无序集合，例如：
var person = {
    name: 'Bob',
    age: 20,
    tags: ['js', 'web', 'mobile'],
    city: 'Beijing',
    hasCar: true,
    zipcode: null
};

// JavaScript对象的键都是字符串类型，值可以是任意数据类型。上述person对象一共定义了6个键值对，其中每个键又称为对象的属性，例如，person的name属性为'Bob'，zipcode属性为null。
// 要获取一个对象的属性，我们用对象变量.属性名的方式：

person.name; // 'Bob'
person.zipcode; // null