<template>
    <component :is="menuComponent" :index="menu?.path">
        <template #title>
            <el-icon v-if="menu?.meta?.icon">
                <component :is="Icons[menu.meta.icon as IconTypes]"></component>
            </el-icon>
            <span>{{ menu?.meta?.title }}</span>

            <el-tag
                v-if="showMenuInfo(menu?.meta?.title as string)"
                class="tag"
                size="small"
                effect="dark"
                type="danger"
            >
                {{ menuInfo?.get(menu?.meta?.title as string) }}
            </el-tag>
        </template>

        <sub-menu
            v-for="submenuItem in menu?.children"
            :key="submenuItem.path"
            :menu="submenuItem"
            :menu-info="menuInfo"
        ></sub-menu>
    </component>
</template>

<script setup lang="ts">
import * as Icons from '@element-plus/icons-vue';
import { ElMenuItem, ElSubMenu } from 'element-plus';
import type { Component } from 'vue';
import type { RouteRecordRaw } from 'vue-router';
import type { IconTypes } from '../utils/router-helper';

const props = withDefaults(
    defineProps<{
        menu?: RouteRecordRaw;
        /**
         * menu info
         */
        menuInfo?: Map<string, number>;
    }>(),
    {
        menu: undefined,
        menuInfo: undefined,
    }
);

/**
 * 是否展示标题信息
 */
function showMenuInfo(title?: string): boolean {
    if (!title) {
        return false;
    }

    return !!props.menuInfo && !!props.menuInfo.get(title);
}

const menuComponent = computed<Component | undefined>(() => {
    if (!props.menu) {
        return undefined;
    }

    if (props.menu.children && props.menu.children.length > 0) {
        return markRaw(ElSubMenu);
    } else {
        return markRaw(ElMenuItem);
    }
});
</script>

<style lang="scss" scoped>
.tag {
    margin-left: 6px;
}
</style>
