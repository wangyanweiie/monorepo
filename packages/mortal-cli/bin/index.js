#!/usr/bin/env node
// 代码是在 Node.js 环境中运行，Node.js 的模块是遵循 CommonJS 规范的，如果要依赖一个模块，要使用 Node.js 内置 require 系统函数引用模块使用。
const path = require("path");
const yargs = require("yargs");
const { inquirerPrompt, install } = require("./inquirer");
const { checkMkdirExists, copyDir, copyFile, copyTemplate } = require("./copy");

/**
 * yargs 提供的 command 方法来设置一些子命令，让每个子命令对应各自功能，各司其职
 * cmd：字符串，子命令名称，也可以传递数组，如 ['create', 'c']，表示子命令叫 create，其别名是 c；
 * desc：字符串，子命令描述信息；
 * builder：一个返回数组的函数，子命令参数信息配置，比如可以设置参数；
 *   - alias：别名
 *   - demand：是否必填
 *   - default：默认值
 *   - describe：描述信息
 *   - type：参数类型，string | boolean | number
 * handler: 函数，可以在这个函数中专门处理该子命令参数
 */
yargs.command(
  ["create", "c"],

  "新建一个模板",

  function (yargs) {
    return yargs.option("name", {
      alias: "n",
      demand: true,
      describe: "模板名称",
      type: "string",
    });
  },

  function (argv) {
    console.log("argv", argv);

    inquirerPrompt(argv).then((answers) => {
      console.log("answers", answers);

      /**
       * name 用户设置的项目名称
       * type 用户所选的模板类型
       */
      const { name, type } = answers;

      const isMkdirExists = checkMkdirExists(
        // path.resolve(process.cwd(), `./src/pages/${name}`)
        path.resolve(process.cwd(), `./src/pages/${name}/index.js`)
      );

      if (isMkdirExists) {
        // console.log(`${name} 文件夹已经存在`);
        console.log(`${name}/index.js 文件已经存在`);
      } else {
        /**
         * 我们可以用 Node.js 中的 path 模块提供的 path.resolve( [from…], to ) 方法将路径转成绝对路径，
         * 就是将参数 to 拼接成一个绝对路径，[from … ] 为选填项，可以设置多个路径，如 path.resolve('./aaa', './bbb', './ccc') ，
         * 使用时要注意path.resolve 的路径拼接规则：
         * ① 从后向前拼接路径；
         * ② 若 to 以 / 开头，不会拼接到前面的路径；
         * ③ 若 to 以 ../ 开头，拼接前面的路径，且不含最后一节路径；
         * ④ 若 to 以 ./ 开头或者没有符号，则拼接前面路径。
         *
         * __dirname <==> 用来动态获取当前文件模块所属目录的绝对路径。
         * 比如在 bin/index.js 文件中使用 __dirname，__dirname 表示就是 bin/index.js 文件所属目录的绝对路径 D:\mortal\packages\mortal-cli\bin
         *
         * process.cwd() <==> 当前 Node.js 进程执行时的文件所属目录的绝对路径。
         * 比如在 bin 文件夹目录下运行 node index.js 时，process.cwd() 得到的是 D:\mortal\packages\mortal-cli\bin
         * 运行 node index.js 相当运行 mortal 命令，而在现代前端工程中都是在 package.json 文件中 scripts 定义了脚本命令；
         * 运行 pnpm mortal 就相当运行 mortal 命令，那么执行 pnpm mortal 时，当前 Node.js 进程执行时的文件是 package.json 文件；
         * 那么此时 process.cwd() 得到的是 D:\mortal\examples\app
         */

        // 拷贝目录
        // copyDir(
        //   path.resolve(__dirname, `./template/${type}`),
        //   path.resolve(process.cwd(), `./src/pages/${name}`),
        //   {
        //     name,
        //   }
        // );

        // 拷贝文件
        // copyFile(
        //   path.resolve(__dirname, `./template/${type}/index.js`),
        //   path.resolve(process.cwd(), `./src/pages/${name}/index.js`),
        //   {
        //     name,
        //   }
        // );

        // 拷贝模版文件
        copyTemplate(
          path.resolve(__dirname, `./template/${type}/index.tpl`),
          path.resolve(process.cwd(), `./src/pages/${name}/index.js`),
          {
            name,
          }
        );

        // 安装依赖
        install(process.cwd(), answers);
      }
    });
  }
).argv;
