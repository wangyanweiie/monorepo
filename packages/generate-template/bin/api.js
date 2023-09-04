const https = require('https');

/**
 * 获取用户 git 仓库列表信息
 * @param {*} username 用户名
 * @returns
 */
function getGitRepoList(username) {
    return new Promise((resolve, reject) => {
        https
            .request(
                `https://api.github.com/users/${username}/repos`,
                {
                    headers: {
                        'User-Agent': username,
                    },
                },
                res => {
                    let data = '';

                    res.on('data', chunk => {
                        data += chunk.toString();
                    });

                    res.on('end', () => {
                        const list = JSON.parse(data);
                        resolve(
                            list
                                .filter(item => item.name === 'monorepo-app')
                                .map(item => ({
                                    // 先过滤出 monorepo 模版，再组合成模版所需要的 name，value 结构
                                    name: item.name,
                                    value: `https://github.com:${username}/${item.name}`,
                                })),
                        );
                    });

                    res.on('error', err => {
                        reject(err);
                    });
                },
            )
            .end();
    });
}

module.exports = {
    getGitRepoList,
};
