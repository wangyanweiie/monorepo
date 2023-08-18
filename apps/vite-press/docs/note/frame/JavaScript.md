# JavaScript

## 一、简介

### 1. 什么是 JavaScript

JavaScript（简称“JS”） 是一种具有函数优先的轻量级，解释型或即时编译型的编程语言。虽然它是作为开发 Web 页面的脚本语言而出名，但是它也被用到了很多非浏览器环境中，JavaScript 基于原型编程、多范式的动态脚本语言，并且支持面向对象、命令式、声明式、函数式编程范式。

*`注：` MDN：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Language_Overview*

### 2. 语言特点

- 脚本语言。JavaScript 是一种解释型的脚本语言，C、C++ 等语言先编译后执行，而 JavaScript 是在程序的运行过程中逐行进行解释。
- 基于对象。JavaScript 是一种基于对象的脚本语言，它不仅可以创建对象，也能使用现有的对象。
- 简单。JavaScript 语言中采用的是弱类型的变量类型，对使用的数据类型未做出严格的要求，是基于 Java 基本语句和控制的脚本语言，其设计简单紧凑。
- 动态性。JavaScript 是一种采用事件驱动的脚本语言，它不需要经过Web服务器就可以对用户的输入做出响应。在访问一个网页时，鼠标在网页中进行鼠标点击或上下移、窗口移动等操作 JavaScript 都可直接对这些事件给出相应的响应。
- 跨平台性。JavaScript 脚本语言不依赖于操作系统，仅需要浏览器的支持。因此一个 JavaScript 脚本在编写后可以带到任意机器上使用，前提是机器上的浏览器支 持 JavaScript 脚本语言，JavaScript 已被大多数的浏览器所支持。不同于服务器端脚本语言，例如 PHP 与 ASP，JavaScript 主要被作为客户端脚本语言在用户的浏览器上运行，不需要服务器的支持。所以在早期程序员比较倾向于使用 JavaScript 以减少对服务器的负担，而与此同时也带来另一个问题，安全性。

## 二、基础

### 1. 常用方法

#### 数据类型转换

| 方法 | 作用 |
|------|------|
| str = String(num) | 数字转字符串 |
| str = num.toString() | 数字转字符串 |
| num = Number(str) | 字符串转数字 |
| num = str.toNumber() | 字符串转数字 |
| newNum = Number.parseInt(num) | 转换为整数，不会四舍五入 |
| newNum = Number.parseFloat(num) | 转换为浮点数 |
| newStr = num.toFixed(n) | 保留几位小数，四舍五入 |

#### 字符串方法

| 方法 | 作用 |
|------|------|
| newStr = str.concat(str1,str2,...) | 拼接字符串 |
| newStr = str.substr(开始下标,截取长度) | 截取字符串 |
| newStr = str.slice(开始下标,结束下标) | 截取字符串 |
| newArr = str.split('') | 分隔字符串，默认全局分隔，返回数组 |
| str.indexOf('..') | 判断字符串是否包含指定的子字符串，返回符合的下标，查找不到返回-1 |

#### 数组遍历

| 方法 | 作用 |
|------|------|
| for(var i in arr){} | 快速遍历,i是数组元素的下标 |
| arr.forEach((item,index,arr) => {}) | item 数组元素，index 数组元素下标，arr 数组本身 |
| newArr = arr.map((item,index,arr) => {}) | 可以操作每一项数组元素，返回一个新数组 |
| newArr = arr.filter((item,index,arr) => {}) | 过滤符合条件的数组元素，返回一个新数组 |

#### 数组方法

| 方法 | 作用 |
|------|------|
| newArr = arr.concat(arr1,arr2,...) | 拼接数组 |
| arr.slice(开始下标,结束下标) | 截取数组 |
| arr.includes('str') | 判断数组是否包含指定的子字符串，返回 true or false |
| arr.indexOf('..') | 判断数组是否包含指定的子字符串，返回符合的下标，查找不到返回-1 |
| arr.push() | 尾部新增元素 |
| arr.unshift() | 头部新增元素 |
| arr.pop() | 尾部删除元素 |
| arr.shift() | 头部删除元素 |
| newStr = arr.join('') | 分隔数组，默认全局分隔，返回字符串 |
| newArr = arr.splice(开始下标,删除数,新增1,新增2...) |  |
| Array.isArray(arr) | 判断是否为数组类型，返回 true or false |

#### Math对象方法

| 方法 | 作用 |
|------|------|
| Math.ceil(num) | 向上取整 |
| Math.floor(num) | 向下取整 |
| Math.round(num) | 四舍五入取整 |
| Math.abs(num) | 取绝对值 |

#### Date对象方法

| 方法 | 作用 |
|------|------|
| new Date() | 获取当前时间 |
| Date.now() | 获取当前时间 |

#### ES6方法拓展

| 方法 | 作用 |
|------|------|
| 空值合并操作符（??） | 逻辑操作符,当左侧值为 null 或者 undefined 时返回其右侧值,否则返回左侧值; |
| Object.assign(target, ...sources) | 合并对象 |
| array.at(-1) | 数组的负索引访问器 |
