//1.const 声明后，需要立即赋值，后续不能修改

const a = 10
a = 19 //TypeError:Assignment to constant variable 报错
const b 
b = 199 //SyntaxError: Missing initializer in const declaration 需要立马赋值

//2.const 声明的变量，也有暂时性死区
{
    console.log(a)//ReferenceError: Cannot access 'a' before initialization
    const a = 100
    console.log(a)
}

//3.const 与复杂类型
const stu = {}//要求指向的 具体的内容地址不能修改
stu.age = 20
console.log(stu.age)

//4.const 类型声明的变量也属于全局变量的属性
const k = 'ddsa'
console.log(window.k)//undefind

//5.const 不允许进行重复声明
//最小权限原则。