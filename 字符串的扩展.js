//1. javascript 允许采用\uxxxx形式表示一个字在\u0000~\uffff之间的字符
let x = '\u0061'
let y = '\u0062'
let z = '\u0063'
console.log(x,y,z)
//2.超出\u0000~\uffff范围的字符，必须用两个双字节的形式表示
let b = '\uD842\uDFB7'
console.log(b)
//3.还可以用花括号把码点包裹住

//4.js中的字符表示方法汇总