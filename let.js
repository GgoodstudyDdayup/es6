// 1.let声明变量会有块级作用域

{
    let b = 99
    console.log(b)//99
}
console.log(b)//报错


// 2.let声明变量会有暂时性死区
{
    console.log(b)//报错
    let b = 99
    console.log(b)
}

//配合for循环可以解决我们之前的
for (var i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i)
    }, 4);
}

//闭包解决
for (var i = 0; i < 10; i++) {
    (function (index) {
        setTimeout(() => {
            console.log(index)
        }, 4);
    })(i)
}

//3.用let声明方式解决循环索引的问题
for (let i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i)
    }, 4);
}

//4.let 不能重复声明变量

let a = 10
let a = 'niubi' // Identifier 'a' has already been declared

//5.let声明的变量不会添加到全局对象上去
var a = 10
console.log(window.a)
let b = 99
console.log(window.b)


