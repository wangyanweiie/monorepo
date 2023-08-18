import { getNavBar } from './nav'
import { 
    getSideBarGuide, // 指南
    getSideBarNoteEditor, // 笔记 - 编辑器/IDE
    getSideBarNoteFrame, // 笔记 - 前端技术栈
    getSideBarNoteDeploy, // 笔记 - 配置部署
    getSideBarNoteShare, // 笔记 - 交流分享
} from './sidebar'

/**
 ******************** 配置信息 ********************
 */
module.exports = {
    title: 'Lemon',
    description: 'Just Do It',
    lang: 'zh-CN',
    // github pages 配置
    base: '/vitePress/',
    head: [
        // 添加图标
        ['link', { rel: 'icon', href: '/favicon.png' }]
    ],
    themeConfig: {
        // 网站 logo
        logo: '/logo.png',
        // 网站标题
        // siteTitle: false,
        // 启动页面丝滑滚动
        smoothScroll: true,
        // 社交账户链接
        socialLinks: [
            { icon: 'github', link: 'https://github.com/wangyanweiie/vitePress' },
        ],
        // 站内搜索 - 需要配置 algolia
        // algolia: {
        //     appId: '8J64VVRP8K',
        //     apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
        //     indexName: 'vitepress'
        // },
        // 导航栏配置
        nav: getNavBar(),
        // 左侧边栏配置
        sidebar: {
            '/guide/': getSideBarGuide(),
            '/note/editor/': getSideBarNoteEditor(),
            '/note/frame/': getSideBarNoteFrame(),
            '/note/deploy/': getSideBarNoteDeploy(),
            '/note/share/': getSideBarNoteShare(),
        },
        // 右侧边栏标题
        outlineTitle: 'Title',
        // 上下篇文本提示文字
        docFooter: { 
            prev: '上一篇',
            next: '下一篇'
        },
        // 上次更新时间提示文字
        lastUpdatedText: 'Updated Date',
        // 编辑链接
        editLink: {
            text: 'Edit this page on GitHub',
            pattern: 'https://github.com/wangyanweiie/vitePress'
        },
        // 页面底部
        footer: {
            message: '',
            copyright: 'Copyright © 2022 wangyanwei'
        },
    }
}