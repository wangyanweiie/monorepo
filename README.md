
# monorepo-template

vue3 + ts + + element-plus + vite  + eslint + preitter + husky + commitlint + cz-config

## 管理方式

- [monorepo](https://juejin.cn/post/7260144602471776311?utm_source=gold_browser_extension#heading-2)  
- [turbo](https://turbo.build/repo/docs/getting-started/add-to-project)

## 目录结构

- apps：子项目
- packages：公共组件与方法的包

## 准备工作

- pnpm install
- pnpm -F @custom/utils build
- pnpm -F @custom/components build
- pnpm -F @custom/template dev

## 格式校验

- cd apps/template
- pnpm type check
- pnpm lint
- pnpm format

## 提交代码

- pnpm commit

## 打包部署

- cd apps/template
- pnpm build
