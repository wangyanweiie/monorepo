#!/usr/bin/env node
// 可以让系统动态的去查找 node 来执行你的脚本文件

// 代码是在 Node.js 环境中运行，Node.js 的模块是遵循 CommonJS 规范的，如果要依赖一个模块，要使用 Node.js 内置 require 系统函数引用模块使用。
const chalk = require("chalk"); // chalk 可以修改控制台中字符串的样式
const figlet = require("figlet"); // figlet 可以输出一些特殊的文字，这些文字只包含 ANSI 对应的字符。

console.log(
  chalk.green(figlet.textSync("Custom CLI", { horizontalLayout: "full" }))
);
