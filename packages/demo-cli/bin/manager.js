const path = require('path');

const ora = require('ora');
const { exec } = require('child_process');

/**
 * 组件库对应关系
 */
const LibraryMap = {
    'Ant Design Vue': 'ant-design-vue',
    'Element Plus': 'element-plus',
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
        spinner.start(`正在安装依赖`);

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
            },
        );
    });
}

exports.install = install;
