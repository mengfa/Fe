'use strict';
//2-块的作用域let.js
// if (true) {
//     let fruit = 'apple';
// }

// console.log(fruit);
//var是全局的.这个log会是apple.

//如果是let就是未定义.


//-----------------------
//3-const
// const fruit = 'apple';
// console.log(fruit);

// //const 是恒量,不能被重新赋值.

// fruit = 'origin';
// console.log(fruit);

//------------------------
//数组的解构赋值

// var a = 1;
// var b = 2;
// var c = 3; 

// var [a, b, c] = [1, 2, 3]; 

// console.log(a,b,c);
// 对象解构

// var obj = {
//     p: [
//         "Hello",
//         { y: "World" }
//     ]
// };

// var { p: [x, { y }] } = obj;
// console.log(x,y);
