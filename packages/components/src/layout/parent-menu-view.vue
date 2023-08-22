<template>
    <div>
        <el-menu
            class="x-layout-menu--horizontal"
            mode="horizontal"
            router
            :default-active="activeRoute"
        >
            <el-menu-item v-for="(menu, index) in menus" :key="index" :index="menu.path">
                {{ menu.meta?.title }}
            </el-menu-item>
        </el-menu>
        <router-view v-slot="{ Component }">
            <transition name="el-fade-in-linear" mode="out-in">
                <!-- <keep-alive :exclude="excludeList" :include="cacheList"> -->
                <component :is="Component" :key="componentKey"></component>
                <!-- </keep-alive> -->
            </transition>
        </router-view>
    </div>
</template>

<script setup lang="ts">
import { type RouteRecordRaw, useRoute } from 'vue-router';
import { useRefresh } from './use-refresh';

const props = withDefaults(
    defineProps<{
        menus: RouteRecordRaw[];
        matchedIndex?: number;
        cacheList?: string[];
    }>(),
    {
        menus: () => [],
        matchedIndex: -1,
        cacheList: undefined,
    }
);

const route = useRoute();

/**
 * 当前激活路由
 */
const activeRoute = computed<string>(() => {
    let path = route.fullPath;

    // 查找 matched中第一个无子路由的路由
    for (let i = route.matched.length - 1; i > 0; i -= 1) {
        if (!route.matched[i].children || route.matched[i].children.length === 0) {
            path = route.matched[i].path;

            break;
        }
    }

    return path;
});

const { componentKey, excludeList } = useRefresh({
    matchedIndex: props.matchedIndex,
});
</script>

<style lang="scss" scoped>
.x-layout-menu--horizontal {
    margin-bottom: 15px;
}

.scale-enter-active,
.scale-leave-active {
    transition: all 0.5s ease;
}

.scale-enter-from,
.scale-leave-to {
    opacity: 0;
    transform: scale(0.9);
}
</style>
