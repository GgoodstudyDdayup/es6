//1.数组对应的解构赋值
let [a,b,c] = [1,2,3]
console.log(a)
console.log(b)
console.log(c)

//2.复杂的解构赋值

let [a,[b],c] = [1,[2],3]
console.log(a)
console.log(b)
console.log(c)

//3.越过解析

let [a,b] = [1,2,3]
console.log(a)
console.log(b)


//4.配合展开运算符

let [a,[b,...d],c] = [1,[2,3,4],3]
console.log(a)
console.log(b)
console.log(c)
console.log(d)

//5.如果解构不成功，变量的值就等于undefined
let [a,b] = [1]
// a =>1
// b=> undefined

//6.不完全解构
let [a,[b],c] = [1,[2,3,4],3]
console.log(a)
console.log(b)
console.log(c)


//7.数组的解构赋值：如果等号的右边不是数组，那么将会报错

let [a,b] = null
let [a,b] = undefined
let [a,b] = {}
let [a,b] = 123

//8.解构赋值允许指定默认值

let [ a = 9 , b = 3 , c = 4 ] = [ 1 , 2 ]
console.log(a)
console.log(b)
console.log(c)

//9.当一个数组成员严格等于undefined，默认值才会生效

let [ a = 9 , b = 3 ] =[undefined,2]
console.log(a)
console.log(b)

//10. 默认值可以引用解构赋值的其他变量，但该变量必须已经声明

let [a = 9,b = a] = [1]
console.log(a)
console.log(b)