//1.字符串作为数组进行解构赋值，字符串可以当对象来用也可以当数组来用
let [a,b,c] = '123456'
console.log(a)
console.log(b)
console.log(c)
//2.字符串当做对象进行解构赋值
let {toString:s,0:a,1:b,2:c} = 'tonyCoder'
console.log(s)
console.log(a)
console.log(b)
console.log(c)
//3.number类型和boolean类型的解构赋值
let {toString:s} = true
let {toString:m} = 123
console.log(s,m)
//4.函数参数解构赋值
function add ([a,b]){
    return a+b
}
console.log(add([1,2]))


//5.函数参数解构赋值带默认值
function add ([a=1,b=20]){
    return a+b
}
console.log(add([2]))
//6.函数参数对象解析赋值
function add({a=1,b=1}){
    return a + b
}
console.log(add({a:1,b:20}))
console.log(add({a:2}))


//7.给对象的解析一个默认值
function add({a=1,b=1}={}){
    return a + b
}
console.log(add())