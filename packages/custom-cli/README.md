## 学习搭建 cli 脚手架

### 一、安装

#### 全局安装

``` shell
# npm
npm install -g custom-cli

# pnpm
pnpm install -g custom-cli

# yarn
yarn global add custom-cli
```

#### 借助 npx

``` shell
# 创建模版
npx create custom-cli <name> [-t|--template]

# 示例
npx create custom-cli uni --template uni-template
```

### 二、使用

``` shell
# 创建模版
custom-cli create <name> [-t|--template]

# 示例
custom-cli create uni --template uni-template
```