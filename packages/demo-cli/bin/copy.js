const copydir = require('copy-dir');
const fs = require('fs');
const path = require('path');
const Mustache = require('mustache');

/**
 * 检测目录是否存在，如果目录存在返回 true，如果目录不存在返回 false
 * @param {*} path 目录路径
 * @returns { boolean }
 */
function checkMkdirExists(path) {
    return fs.existsSync(path);
}

/**
 * FIXME: 目录守卫
 * 在 mkdirGuard() 方法内部，当要创建的目录 target 父级目录不存在时，
 * 调用 fs.mkdirSync(target)，会报错走 catch 部分逻辑，在其中递归创建父级目录，
 * 使用 fs.existsSync(dir) 来判断父级目录是否存在，来终止递归；
 * @param {*} target 目标目录路径
 */
function mkdirGuard(target) {
    try {
        /**
         * 创建文件夹目录
         * path：文件夹目录路径；
         * options：recursive 表示是否要创建父目录，true 表示要；
         */
        fs.mkdirSync(target, {
            recursive: true,
        });
    } catch (e) {
        mkdirp(target);

        function mkdirp(dir) {
            // 检测目录是否存在
            if (checkMkdirExists(dir)) {
                return true;
            }

            // 用于获取给定路径的目录名
            const dirname = path.dirname(dir);
            mkdirp(dirname);
            fs.mkdirSync(dir);
        }
    }
}

/**
 * 拷贝目录
 * @param {*} form 源目录
 * @param {*} to 目标目标
 * @param {*} options 配置项
 */
function copyDir(form, to, options = {}) {
    mkdirGuard(to);
    copydir.sync(form, to, options);
}

/**
 * 拷贝文件
 * @param {*} from 源文件路径
 * @param {*} to 目标文件路径
 * @param {*} options 配置项
 */
function copyFile(from, to, options = {}) {
    const buffer = fs.readFileSync(from, options);
    const parentPath = path.dirname(to);

    mkdirGuard(parentPath);
    fs.writeFileSync(to, buffer);
}

/**
 * 读取模版文件
 * @param {*} path 动态模板文件的相对路径
 * @param {*} options 动态模板文件的配置数据
 * @returns
 *
 * 使用 Mustache.render(str, data) 生成模板文件内容返回，
 * 因为 Mustache.render 的第一个参数类型是个字符串，
 * 所以在调用 fs.readFileSync 时要指定 encoding 类型为 utf8，
 * 否则 fs.readFileSync 返回 Buffer 类型数据；
 */
function readTemplate(path, options = {}) {
    const str = fs.readFileSync(path, {
        encoding: 'utf8',
    });

    return Mustache.render(str, options);
}

/**
 * 拷贝模版文件
 * @param {*} from 源文件路径
 * @param {*} to 目标文件路径
 * @param {*} options 配置项
 * @returns
 */
function copyTemplate(from, to, options = {}) {
    if (path.extname(from) !== '.tpl') {
        return copyFile(from, to);
    }

    const mustache = readTemplate(from, options);
    const parentToPath = path.dirname(to);

    mkdirGuard(parentToPath);
    fs.writeFileSync(to, mustache);
}

exports.checkMkdirExists = checkMkdirExists;
exports.mkdirGuard = mkdirGuard;
exports.copyDir = copyDir;
exports.copyFile = copyFile;
exports.readTemplate = readTemplate;
exports.copyTemplate = copyTemplate;
