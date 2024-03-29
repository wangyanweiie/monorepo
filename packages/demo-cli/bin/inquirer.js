const inquirer = require('inquirer');

/**
 * inquirer 开源库
 *   - 询问用户问题
 *   - 获取并解析用户的输入
 *   - 检测用户的答案是否合法
 * @param {*} argv
 * @returns {Promise<void>}
 */
function inquirerPrompt(argv) {
    const { name } = argv;

    return new Promise((resolve, reject) => {
        /**
         * inquirer.prompt() 函数接收一个数组，数组的每一项都是一个询问项，询问项有很多配置参数，下面是常用的配置项；
         * 最终返回是一个 Promise，我们可以用 then 获取上个询问的答案，根据答案再发起对应的内容。
         *
         * type：问题类型 => 输入框 input，确认 confirm，单选组：list，多选组：checkbox；
         * name：问题名称，用于标识答案对象中对应的属性名；
         * message：问题描述，将会作为问题提示信息展示给用户
         * default：默认值
         * choices：选项列表，只有当问题类型为 list 时才需要提供
         * validate：对用户的答案进行校验
         * filter：对用户的答案进行处理，返回处理后的值
         */
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: '模板名称',
                    default: name,
                    validate: function (val) {
                        if (!/^[a-zA-Z]+$/.test(val)) {
                            return '模板名称只能含有英文';
                        }

                        if (!/^[A-Z]/.test(val)) {
                            return '模板名称首字母必须大写';
                        }

                        return true;
                    },
                },
                {
                    type: 'list',
                    name: 'type',
                    message: '模板类型',
                    choices: ['表单', '动态表单', '嵌套表单'],
                    filter: function (value) {
                        return {
                            表单: 'form',
                            动态表单: 'dynamicForm',
                            嵌套表单: 'nestedForm',
                        }[value];
                    },
                },
                {
                    type: 'list',
                    message: '使用什么框架开发',
                    default: 'vue',
                    choices: ['react', 'vue'],
                    name: 'frame',
                },
            ])
            .then(answers => {
                const { frame } = answers;

                switch (frame) {
                    case 'react':
                        inquirer
                            .prompt([
                                {
                                    type: 'list',
                                    message: '使用什么UI组件库开发',
                                    choices: ['Ant Design Vue'],
                                    name: 'library',
                                },
                            ])
                            .then(answers1 => {
                                resolve({
                                    ...answers,
                                    ...answers1,
                                });
                            })
                            .catch(error => {
                                reject(error);
                            });
                        break;

                    case 'vue':
                        inquirer
                            .prompt([
                                {
                                    type: 'list',
                                    message: '使用什么UI组件库开发',
                                    choices: ['Element Plus'],
                                    name: 'library',
                                },
                            ])
                            .then(answers2 => {
                                resolve({
                                    ...answers,
                                    ...answers2,
                                });
                            })
                            .catch(error => {
                                reject(error);
                            });
                        break;

                    default:
                        break;
                }
            })
            .catch(error => {
                reject(error);
            });
    });
}

exports.inquirerPrompt = inquirerPrompt;
