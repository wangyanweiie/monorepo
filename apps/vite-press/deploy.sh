#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
pnpm docs:build

# 进入生成的文件夹
cd docs/.vitepress/dist

# 初始化 暂存 提交
git init
git add -A
git commit -m 'deploy'

# 发布到 https://<USERNAME>.github.io/<REPO>
# 注意：通过 shell 上传时需要先申请一个 ssh-key 配置到 github上
# git remote add origin git@github.com:wangyanweiie/vitePress.git
# git branch -m main
git push -f git@github.com:wangyanweiie/vitePress.git main:gh-pages

cd -