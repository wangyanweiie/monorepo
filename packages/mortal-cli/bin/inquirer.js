const inquirer = require("inquirer");
const path = require("path");
const { exec } = require("child_process");
const ora = require("ora");

/**
 * 询问式交互
 * @param {*} argv
 * @returns
 */
function inquirerPrompt(argv) {
  const { name } = argv;

  return new Promise((resolve, reject) => {
    /**
     * inquirer.prompt() 函数接收一个数组，数组的每一项都是一个询问项，询问项有很多配置参数，下面是常用的配置项
     * type：提问的类型 => 输入框 input，确认 confirm，单选组：list，多选组：checkbox；
     * name：存储当前问题答案的变量；
     * message：问题的描述
     * default：默认值
     * choices：列表选项
     * validate：对用户的答案进行校验
     * filter：对用户的答案进行处理，返回处理后的值
     */
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "模板名称",
          default: name,
          validate: function (val) {
            if (!/^[a-zA-Z]+$/.test(val)) {
              return "模板名称只能含有英文";
            }

            if (!/^[A-Z]/.test(val)) {
              return "模板名称首字母必须大写";
            }

            return true;
          },
        },
        {
          type: "list",
          name: "type",
          message: "模板类型",
          choices: ["表单", "动态表单", "嵌套表单"],
          filter: function (value) {
            return {
              表单: "form",
              动态表单: "dynamicForm",
              嵌套表单: "nestedForm",
            }[value];
          },
        },
        {
          type: "list",
          message: "使用什么框架开发",
          default: "vue",
          choices: ["react", "vue"],
          name: "frame",
        },
      ])
      .then((answers) => {
        const { frame } = answers;

        if (frame === "react") {
          inquirer
            .prompt([
              {
                type: "list",
                message: "使用什么UI组件库开发",
                choices: ["Ant Design Vue"],
                name: "library",
              },
            ])
            .then((answers1) => {
              resolve({
                ...answers,
                ...answers1,
              });
            })
            .catch((error) => {
              reject(error);
            });
        }

        if (frame === "vue") {
          inquirer
            .prompt([
              {
                type: "list",
                message: "使用什么UI组件库开发",
                choices: ["Element Plus"],
                name: "library",
              },
            ])
            .then((answers2) => {
              resolve({
                ...answers,
                ...answers2,
              });
            })
            .catch((error) => {
              reject(error);
            });
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
}

/**
 * 组件库对应关系
 */
const LibraryMap = {
  "Ant Design Vue": "ant-design-vue",
  "Element Plus": "element-plus",
};

/**
 * 安装依赖
 * @param {*} cmdPath
 * @param {*} options
 * @returns
 */
function install(cmdPath, options) {
  const { frame, library } = options;
  const command = `pnpm add ${frame} && pnpm add ${LibraryMap[library]}`;

  return new Promise(function (resolve, reject) {
    // 引入安装动画
    const spinner = ora();
    spinner.start(`正在安装依赖，请稍等`);

    /**
     * exec() 函数参数
     * command：命令，比如 pnpm install
     * options：参数
     *   - cwd：设置命令运行环境的路径
     *   - env：环境变量
     *   - timeout：运行执行时间
     * callback：运行命令结束回调，(error, stdout, stderr) =>{}，
     * 执行成功后 error 为 null，执行失败后 error 为 Error 实例，stdout、stderr 为标准输出、标准错误，其格式默认是字符串。
     */
    exec(
      command,
      {
        cwd: path.resolve(cmdPath),
      },
      function (error, stdout, stderr) {
        if (error) {
          spinner.fail(`依赖安装失败`);
          reject();
          return;
        }

        spinner.succeed(`依赖安装成功`);
        resolve();
      }
    );
  });
}

exports.inquirerPrompt = inquirerPrompt;
exports.install = install;
