// JavaScript的Array可以包含任意数据类型
var arr = [1, 2, 3.14, 'Hello', null, true];
arr.length; // 6
//for ... of循环是ES6引入的新的语法
for (var i of arr) {
    console.log(i);
}

// 请注意，直接给Array的length赋一个新的值会导致Array大小的变化：
var arr1 = [1, 2, 3];
console.log(arr1.length);
arr1.length = 6;
console.log(arr1);
arr1.length = 2;
console.log(arr1);


// Array可以通过索引把对应的元素修改为新的值，因此，对Array的索引进行赋值会直接修改这个Array：
var arr2 = ['A', 'B', 'C'];
arr2[1] = 99;
console.log(arr2); // arr现在变为['A', 99, 'C']

// 请注意，如果通过索引赋值时，索引超过了范围，同样会引起Array大小的变化：
var arr3 = [1, 2, 3];
arr3[5] = 'x';
console.log(arr3); // arr变为[1, 2, 3, undefined, undefined, 'x']

// Array也可以通过indexOf()来搜索一个指定的元素的位置：
var arr4 = [10, 20, '30', 'xyz'];
arr4.indexOf(10); // 元素10的索引为0
arr4.indexOf(20); // 元素20的索引为1
arr4.indexOf(30); // 元素30没有找到，返回-1
arr4.indexOf('30'); // 元素'30'的索引为2

// slice()就是对应String的substring()版本，它截取Array的部分元素，然后返回一个新的Array：
var arr5 = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
console.log(arr5.slice(0, 3)); // 从索引0开始，到索引3结束，但不包括索引3: ['A', 'B', 'C']
console.log(arr5.slice(3)); // 从索引3开始到结束: ['D', 'E', 'F', 'G']

// 注意到slice()的起止参数包括开始索引，不包括结束索引。

// 如果不给slice()传递任何参数，它就会从头到尾截取所有元素。利用这一点，我们可以很容易地复制一个Array：

// push()向Array的末尾添加若干元素，pop()则把Array的最后一个元素删除掉：
var arr6 = [1, 2];
arr6.push('A', 'B'); // 返回Array新的长度: 4
arr6; // [1, 2, 'A', 'B']
arr6.pop(); // pop()返回'B'
arr6; // [1, 2, 'A']
arr6.pop(); arr6.pop(); arr6.pop(); // 连续pop 3次
arr6; // []
arr6.pop(); // 空数组继续pop不会报错，而是返回undefined
arr6; // []

const a = "a";
