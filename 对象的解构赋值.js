//1.对象也可以进行解构赋值，变量必须与属性名同名，才能取到正确的值
let {a,b} = {a:132,b:234}
console.log(a,b)


//2.对象的解构赋值跟顺序没关系
let {b,a} = {a:132,b:234}
console.log(a,b)


//3.解析的默认值也是undefined
let {a,b,c} = {a:123,b:234}
console.log(a,b,c)


//4.变量名与属性名不一致

let {a:ax,b:bx} = {a:123,b:234}
// console.log(a)//a is not defined
console.log( ax , bx )//a is not defined

//5.嵌套解构的对象解析
let {a:{x:ax,y:ay},user:{name,td:std}} = {a:{x:10,y:20},user:{name:'niu',age:18,td:[1,2,3]}}
console.log( ax , ay ,std,name)

//6.指定默认值
let {x = 0 , y = 0} = {x:10}
console.log(x,y)

let {x = 0 , y = 0} = {x:null,y:10}
console.log(x,y)//x=>null

//7.解构现存对象的方法


let {max,min} = Math
console.log(max(1,2,4,9,0))
console.log(min(1,2,4,9,0))


//8.对数组进行对象属性的解构，数组也是特殊的对象
let arr = [1,2,3]
let { 0:a , 1:b , 2:c , 3:d} = arr
console.log(a)
console.log(b)
console.log(c)
console.log(d)