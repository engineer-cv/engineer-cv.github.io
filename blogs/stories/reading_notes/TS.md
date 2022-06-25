---
title: ts
date: 2022-06-25
categories:
 - 杂谈
tags:
 - 前端
showSponsor: true
---
#  TS（类型检测）

## 基本类型

### any类型

- 可以给一个any类型的变量赋值任何类型的值

### unkown

- 用于描述不确定的变量![Snipaste_2021-10-11_16-27-29](E:\笔记\截图\Snipaste_2021-10-11_16-27-29.png)

### void类型

- 通常指定一个函数是没有返回值的，那么它的返回值就是void类型
  - 可以讲null和undefined赋值给void类型

### never类型（通常会应用在联合类型）

### tuple元组类型

- 与数组的区别在于，数组中存放的值通常是一个类型的，而元组中的数据可以是不同类型

  ```
  const Iinfo:[string,number] = ['zhangsan',18]
  ```

  ​

## 函数的参数类型

在ts中，允许我们指定函数的参数和返回值的类型

```
function foo(name:string):void ={
  /.../
}
```

通常情况下，函数的返回值类型不需要类型注解，因为ts会根据return返回值推断函数返回类型

## 对象类型

- 如果函数参数是一个对象，想要限定参数类型，可以使用对象类型

  ```
  function foo(point：｛x:number,y:number｝) ={
    /.../
  }
  ```

  - 在对象中我们可以添加属性，并且告知该属性需要的是什么类型
  - 每个属性的类型是可选的，如果不指定，那就是any类型

### 可选类型

- 对象类型可以指定哪些属性是可选的，在属性后面添加一个？：

  ```
  function foo(point：｛x:number,y:number，z?:number｝) ={
    /.../
  }
  ```

### 联合类型

- 指定一个属性可以是多个类型的集合，属于从现有类型中构建新的类型

  ```
  function foo(id:number|string){
    /.../
  }
  ```

  可选类型表示，可以是这些类型中的任何一个类型

- #### 使用联合类型

  - 每种类型中的方法是不一样的，如果不能确定类型，那么就没有办法使用对应的方法，这个时候需要缩小联合

    - 方式一

      使用if语句判断

      ```
      function foo(id:number|string){
        if(typeof id === 'string'){
          consle.log(id.length)
        }esle{
          consle.log(id)
        }
      }
      ```

## 类型别名

- 如果想要多次在其他地方使用对象类型和联合类型，这个时候可以给对象类型起一个别名，类似于封装函数，使用关键字：tpye

  - ```
    tpye Point = ｛
    x:number
    y:number
    z?:number
    ｝
    function foo(point：Point) ={
      /.../
    }
    ```

    ​

## 可选链

- 可以理解为可选类型的嵌套，作用是当对象的属性不存在的时候，直接返回undefined，如果存在，才会继续执行

  - ```
    type Person ={
      name:string
      friend?:{		
        name:string
        age:number
        girlFriend?:{
          name:string
        }
      }
    }

    const info:Person = {
      name:'zhangsna'
      friend:{
        name:'lisi'
        age:18
      }
    }

    consle.log(info.name)  //打印zhangsan
    consle.log(info.friend.name)  //会判断是否有friend属性，如果有继续执行  打印lisi
    consle.log(info.friend.girFriend) //判断是否有girFriend属性，打印undefined
    ```

    ​

## ？？和！！的作用

- ！！将一个其他类型转换成布尔类型

  ```
  const id = ''

  let flag = !!id  //第一个！是取反，id没有值，所以返回ture，然后再取反，返回false  flag值为false
  ```

  ​

## 字面量类型

### 类型缩小

- 我们可以通过类似于typeof padding ===“number” 的判断语句，来改变ts的执行路径
- 在给定的执行路径中，我们可以缩小比声明时更小的类型
- typeof padding ===“number” 称之为类型保护
- 常见的类型保护
  - typeof
  - 平等缩小（比如===  ，！==）
  - instaceof
  - in

#### instaceof

​	用来检查一个值是否是另一个值的实例

#### in

​	如果指定的属性在指定的对象或其原型链中，则in运算符返回true

## 函数类型

在js中，函数是一等公民，可以作为参数传递，也可以作为返回值进行传递

- 函数类型表达式

  ```
  type FooFnType = () => void
  function bar(fn: FooFnType) { //表示传递的参数是函数类型
    fn()
  }
  ```

  ```
  function calc(n1: number, n2: number, fn: (num1: number, num2: number) => number) {
    return fn(n1, n2)
  }
  ```

  fn: (num1: number, num2: number) => number 表示传递进来的第三个参数是一个函数类型的参数，且参数为number类型，返回值为number类型

### 函数参数的可选类型

与对象类型中的可选类型相似，只需要在参数后面加个？，表示该参数可传可不传

```
function foo:（n1:number,n2?:number）=> void {
  /.../
}
```

可选参数要在必传参数后面

### 默认参数

使用默认参数的时候，默认参数其实是undefined和定义的类型的联合

```
function foo:（n1:number,n2:number = 6）=> void {
  /.../
}
```

### 剩余参数

讲一个不定数量的参数放到一个数组中,根据使用者传入的参数决定函数有几个参数

```
//计算所有参数的和
function sum(initalNum: number, ...nums: number[]) {
  let total = initalNum
  for (const num of nums) {
    total += num
  }
  return total
}

console.log(sum(20, 30))        //50
console.log(sum(20, 30, 40))    //90
console.log(sum(20, 30, 40, 50)) //140
```

### 函数的重载

- 主要是为了解决参数类型不同的函数复用

  ```
  function add(num1: number, num2: number): number; // 没函数体
  function add(num1: string, num2: string): string;

  function add(num1: any, num2: any): any {
    if (typeof num1 === 'string' && typeof num2 === 	'string') {
      return num1.length + num2.length
    }
    return num1 + num2
  }

  const result = add(20, 30)
  const result2 = add("abc", "cba")
  console.log(result)
  console.log(result2)
  ```

  在函数的重载中，有实现体的函数是不能直接被调用，例如上面的add函数

  ```
  add（）  会报错
  ```

  ​