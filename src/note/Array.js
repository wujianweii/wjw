// 创建数组

// 1、采用直接量创建
// var arr = [];//创建一个空数组
// var arr2 = [1,2,3];//创建一个有三个元素的数组

// 2、采用构造函数创建
// a、var arr1 = new Array();//创建空数组
// b、var arr2 = new Array(10)；//创建一个长度为10的数组
// c、var arr3 =  new Array(5,4,3,2,1)；//创建数组并初始化

// 判断数组
// 1.判断是否为空数组 !!array.length
// 2.Array.isArray(obj)
// 3.Object.prototype.toString.call(obj) === '[object Aarray]'

// 最佳方法
// function isArrayFn(value){
//   if (typeof Array.isArray === "function") {
//     return Array.isArray(value);
//   } else {
//     return Object.prototype.toString.call(value) === "[object Array]";
//   }
// }

// 判断类型
// typeof
// instanceof
// arr instanceof Array
// constructor
// Array.constructor === Array
// iframe问题 · 跨frame实例化的对象彼此是不共享原型链的

// 数组对象方法
const arr1 = []
const arr2 = []
// 连接
arr1.concat(arr2)
// find() 方法返回通过测试（函数内判断）的数组的第一个元素的值
arr1.find(arr2)
