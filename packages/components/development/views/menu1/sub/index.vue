<template>
    <parent-menu-view :matched-index="3" :menus="getPermissionMenus(subRoutes)"></parent-menu-view>
</template>

<script setup lang="ts">
import { ParentMenuView } from '@/index';
import { subRoutes } from '@dev/router/menu1/sub';
import { usePermissionStore } from '@dev/store/permission';

const { getPermissionMenus } = usePermissionStore();
</script>
