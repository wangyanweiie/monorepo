#!/usr/bin/env node
const { readFileSync, readdirSync } = require('fs');
const { parse } = require('yaml');

/**
 * 取字符串交集
 */
function intersectionString(str1 = '', str2 = '') {
    if (!str1 || !str2) {
        return '';
    }

    let len = str2.length;

    while (len > 0 && !str1.includes(str2.substring(0, len))) {
        len -= 1;
    }

    return str2.substring(0, len);
}

/**
 * 获取 scopes
 */
function getScopes() {
    // 初始化 scopes
    const scopes = ['root'];

    // 获取根目录
    const rootPath = intersectionString(process.cwd(), __dirname);

    // 获取 pnpm-workspace 文件路径
    const workspaceConfigPath = `${rootPath}/pnpm-workspace.yaml`;
    const workspaceConfig = parse(readFileSync(workspaceConfigPath, 'utf-8'));

    if (workspaceConfig.packages) {
        const workspaces = workspaceConfig.packages.map(path => `${rootPath}/${path.replace('*', '')}`);

        workspaces.forEach(workPath => {
            scopes.push(...readdirSync(workPath));
        });
    }

    return scopes;
}

module.exports = {
    getScopes,
};
