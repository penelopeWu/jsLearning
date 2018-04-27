/*JavaScript的默认对象表示方式{}可以视为其他语言中的Map或Dictionary的数据结构，即一组键值对。

但是JavaScript的对象有个小问题，就是键必须是字符串。但实际上Number或者其他数据类型作为键也是非常合理的。

为了解决这个问题，最新的ES6规范引入了新的数据类型Map
*/

var m = new Map([['Michael', 95], ['Bob', 75], ['Tracy', 85]]);


// for ... of循环是ES6引入的新的语法
for (var x of m){
    console.log(x);
}