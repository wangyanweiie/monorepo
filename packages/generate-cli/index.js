#!/usr/bin/env node

const chalk = require("chalk"); // chalk 可以修改控制台中字符串的样式
const figlet = require("figlet"); // figlet 可以输出一些特殊的文字，这些文字只包含 ANSI 对应的字符。
const clear = require("clear");
const files = require("./lib/file");

clear();

console.log(
  chalk.yellow(figlet.textSync("Generate CLI", { horizontalLayout: "full" }))
);

async function run() {
  await files.createCli();
}

run();
