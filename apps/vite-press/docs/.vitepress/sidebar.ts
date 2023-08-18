/**
 ******************** 指南 ********************
 */
export function getSideBarGuide() {
  return [
    {
      text: "指南",
      collapsible: true,
      items: [],
    },
  ];
}

/**
 ******************** 笔记 ********************
 */
// 编辑器相关笔记
export function getSideBarNoteEditor() {
  return [
    {
      text: "编辑器/IDE",
      collapsible: true,
      items: [{ text: "VSCode", link: "/note/editor/VSCode.md" }],
    },
  ];
}

// 前端技术栈相关笔记
export function getSideBarNoteFrame() {
  return [
    {
      text: "前端技术栈",
      collapsible: true,
      items: [
        { text: "GIT", link: "/note/frame/GIT.md" },
        { text: "JavaScript", link: "/note/frame/JavaScript.md" },
        { text: "TypeScript", link: "/note/frame/TypeScript.md" },
      ],
    },
  ];
}

// 配置部署相关笔记
export function getSideBarNoteDeploy() {
  return [
    {
      text: "配置部署",
      collapsible: true,
      items: [
        { text: "Nginx", link: "/note/deploy/Nginx.md" },
        { text: "VitePress", link: "/note/deploy/VitePress.md" },
        { text: "Verdaccio", link: "/note/deploy/Verdaccio.md" },
      ],
    },
  ];
}

// 交流分享笔记
export function getSideBarNoteShare() {
  return [
    {
      text: "交流分享",
      collapsible: true,
      items: [
        { text: "事件循环", link: "/note/share/事件循环.md" },
        { text: "文件上传", link: "/note/share/文件上传.md" },
        { text: "GitLab-CI", link: "/note/share/GitLab-CI.md" },
      ],
    },
  ];
}

/**
 ******************** 公司 ********************
 */
//  export function getSideBarCompany() {
//     return [
//         {
//             text:'交流分享',
//             collapsible: true,
//             items: [
//                 { text:'PC项目部署', link:'/company/PC项目部署.md' },
//                 { text:'APP项目打包', link:'/company/APP项目打包.md' },
//                 { text:'Zebra蓝牙配置', link:'/company/Zebra蓝牙配置.md' },
//             ],
//         },
//     ]
// }
