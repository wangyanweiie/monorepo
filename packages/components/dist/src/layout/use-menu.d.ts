import type { RouteRecordRaw } from 'vue-router';
/**
 * menu item 类型
 */
declare enum MenuType {
    /** 有子菜单 */
    submenu = "submenu",
    /** 无子菜单 */
    menuItem = "menuItem"
}
/**
 * 处理路由转换为 el-menu-item 数组
 * @param { RouteRecordRaw[] } routes 路由数组
 * @param { string[] | undefined } permissions 权限数组
 * @returns 处理后数组
 */
declare function routesToMenuItemList(routes: RouteRecordRaw[], permissions?: string[]): RouteRecordRaw[];
export { routesToMenuItemList, MenuType };
