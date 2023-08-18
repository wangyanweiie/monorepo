/**
 ******************** 顶部导航栏 ********************
 */
export function getNavBar() {
    return [
		{
            text: '指南', 
            link: '/guide/' 
        },
		{
			text: '文档', 
            items: [
                { text: '编辑器/IDE', link: '/note/editor/' },
                { text: '前端技术栈', link: '/note/frame/' },
                { text: '配置部署', link: '/note/deploy/' },
                { text: '交流分享', link: '/note/share/' },
            ] 
        },
	]
}