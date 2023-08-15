#!/usr/bin/env node
// 可以让系统动态的去查找 node 来执行你的脚本文件

/**
 * 代码是在 Node.js 环境中运行，Node.js 的模块是遵循 CommonJS 规范的，
 * 如果要依赖一个模块，要使用 Node.js 内置 require 系统函数引用模块使用；
 */
const chalk = require("chalk"); // chalk 可以修改控制台中字符串的样式
const figlet = require("figlet"); // figlet 可以输出一些特殊的文字，这些文字只包含 ANSI 对应的字符。
const program = require("commander"); // Commander 负责将参数解析为选项和命令参数
const inquirer = require("inquirer");
const path = require("path");
const ora = require("ora");
const fs = require("fs-extra");
const downloadGitRepo = require("download-git-repo");
const package = require("../package.json");
// const templates = require("./template.js");
const { getGitReposList } = require("./api.js");

console.log(
  chalk.green(figlet.textSync("Custom CLI", { horizontalLayout: "full" }))
);

/**
 * 以下代码使用了 commander 库来解析命令行参数，并定义了 create 命令；
 * 在 create 命令被调用时，会使用 inquirer 库与用户进行交互，获取用户输入的项目名称；
 */
program
  .command("create [projectName]")
  .option("-t, --template <template>", "模版名称")
  .description("创建模版")
  .action(async (projectName, options) => {
    // 1.引入动画
    const spinner = ora();
    spinner.start(`正在获取模版列表`);

    // 2.获取模版列表
    const templates = await getGitReposList("wangyanweiie");

    if (!templates.length) {
      spinner.fail(`获取模版失败`);
      process.exit(1);
    }

    spinner.succeed(`获取模版成功`);

    // 3.从模版列表中找到对应的模版，匹配到模版就赋值，没有匹配到就是 undefined
    const project = templates.find(
      (template) => template.name === options.template
    );

    let projectTemplate = project ? project.value : undefined;

    console.log("命令行参数：", projectName, projectTemplate);

    // 4.如果用户没有在命令行传入项目名称就交互式输入
    if (!projectName) {
      const { name } = await inquirer.prompt({
        type: "input",
        name: "name",
        message: "请输入项目名称：",
      });

      projectName = name;
    }

    // 5.如果用户没有在命令行传入模版就交互式输入
    if (!projectTemplate) {
      const { template } = await inquirer.prompt({
        type: "list",
        name: "template",
        message: "请选择模版：",
        choices: templates,
      });

      projectTemplate = template;
    }

    // 6.目标文件夹 = 用户命令行所在目录 + 项目名称
    const target = path.join(process.cwd(), projectName);

    // 判断目标文件夹是否存在，存在就交互询问用户是否覆盖
    if (fs.existsSync(target)) {
      const { force } = await inquirer.prompt({
        type: "confirm",
        name: "force",
        message: "目录已存在，是否覆盖？",
      });

      // 如果覆盖就删除文件夹继续往下执行，否的话就退出进程
      force ? fs.removeSync(target) : process.exit(1);
    }

    // 7.下载模版
    spinner.start(`正在下载模版`);

    /**
     * clone
     * @param projectTemplate 仓库地址
     * @param target 保存路径
     * @param function 回调函数
     */
    downloadGitRepo(projectTemplate, target, function (err) {
      if (err) {
        spinner.fail(`下载模版失败：${err}`);
      } else {
        spinner.succeed("下载模版成功");

        // 引导提示信息
        console.log(`\ncd ${projectName}`);
        console.log("pnpm i");
        console.log("pnpm dev\n");
      }
    });
  });

/**
 * program
 */
// 定义当前版本
program.version(`version：${package.version}`);
// 解析用户执行命令传入参数
program.parse(process.argv);
// 添加 --help
program.on("--help", () => {});
