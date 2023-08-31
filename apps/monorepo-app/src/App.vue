<template>
    <router-view />
</template>
<style lang="scss">
@import './src/styles/index.scss';
</style>
<style>
html,
body {
    width: 100%;
    height: 100%;
}

* {
    box-sizing: border-box;
}

#app {
    width: 100%;
    height: 100%;
}

.action-more {
    margin-left: 12px;
}

.el-button.is-text {
    padding-left: 0;
    padding-right: 0;
}

.upload-button {
    display: inline-block;
    margin: 10px;
    vertical-align: bottom;
}

.upload-button--right {
    display: inline-block;
    margin-right: 10px;
    vertical-align: bottom;
}

.x-mart-menu.el-menu {
    margin-bottom: 15px;
}

/* .el-upload-list.el-upload-list--text {
    width: 400px;
} */

.common-width {
    width: 100%;
}
:root {
    --el-route-menu-bg-color: #304156 !important;
    --el-route-menu-hover-bg-color: #263445 !important;
    --el-route-menu-text-color: #b8babf !important;
    --el-route-menu-hover-text-color: #bfcbd9 !important;
    --el-route-menu-active-color: var(--el-color-primary) !important;
    --el-route-menu-active-bg-color: #304156 !important;
    /* --el-route-menu-inline-bg-color:  !important; */
}
</style>
