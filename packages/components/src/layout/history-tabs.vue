<template>
    <div class="history-tabs">
        <span class="icon-button" @click="handlePre">
            <span class="tab-icon">
                <d-arrow-left></d-arrow-left>
            </span>
        </span>

        <el-scrollbar ref="scrollbarRef" class="tab-scroll">
            <div ref="tabWrapRef" class="tab-wrap">
                <div
                    v-for="(tab, index) in tabs"
                    :key="index"
                    class="tab"
                    :class="tabClass(index)"
                    @click="handleTabClick(index, tab)"
                >
                    <div class="tab-title">{{ tab.title }}</div>

                    <span v-if="showClose(index)" class="close" @click.stop="handleTabClose(index)">
                        <span class="tab-icon--small">
                            <close></close>
                        </span>
                    </span>
                </div>
            </div>
        </el-scrollbar>

        <span class="icon-button" @click="handleAfter">
            <span class="tab-icon">
                <d-arrow-right></d-arrow-right>
            </span>
        </span>

        <span class="icon-button" @click="handleRefresh">
            <span class="tab-icon">
                <refresh-right></refresh-right>
            </span>
        </span>
        <span class="icon-button">
            <span class="tab-icon">
                <setting></setting>
            </span>
        </span>
    </div>
</template>

<script setup lang="ts">
import { DArrowLeft, DArrowRight, RefreshRight, Close, Setting } from '@element-plus/icons-vue';
import { useRouter, type RouteRecordName } from 'vue-router';
import { ElScrollbar } from 'element-plus';
interface Tab {
    path: string;
    name: RouteRecordName;
    title: string;
}

const router = useRouter();

const tabs = ref<Tab[]>([
    {
        path: router.currentRoute.value.path as string,
        name: router.currentRoute.value.name as RouteRecordName,
        title: router.currentRoute.value.meta.title as string,
    },
]);

const currentIndex = ref<number>(0);

const scrollbarRef = ref<InstanceType<typeof ElScrollbar>>();

const tabWrapRef = ref<InstanceType<typeof HTMLElement>>();

/**
 * 更新滚动条
 */
async function updateScroll(): Promise<void> {
    // nextTick: 在history-tab节点生成，且close显示状态切换后，再获取子节点offsetLeft
    await nextTick();
    const el = tabWrapRef.value?.children[currentIndex.value] as HTMLElement;

    if (el) {
        scrollbarRef.value?.setScrollLeft(el.offsetLeft);
    }
}

/**
 * 路由跳转结束后存储tab
 */
router.afterEach((to) => {
    const nextIndex = tabs.value.findIndex((tab) => tab.name === to.name);

    // 存在
    if (nextIndex >= 0) {
        currentIndex.value = nextIndex;
        updateScroll();

        return true;
    }

    // name 不存在
    if (!to.name) {
        return new Error(`router.name is undefined, ${to.fullPath}`);
    }

    // 激活并存储
    tabs.value.push({
        title: to.meta.title as string,
        name: to.name,
        path: to.fullPath,
    });

    currentIndex.value = tabs.value.length - 1;
    updateScroll();

    return true;
});

/**
 * tab click
 */
function handleTabClick(index: number, tab: Tab): void {
    currentIndex.value = index;

    router.push(tab);
    updateScroll();
}

/**
 * 是否激活
 */
function isActive(index: number): boolean {
    return currentIndex.value === index;
}

/**
 * 是否显示关闭按钮
 */
function showClose(index: number): boolean {
    return isActive(index) && tabs.value.length > 1;
}

/**
 * 激活 tab class
 */
function tabClass(index: number): string {
    return isActive(index) ? 'tab--active' : '';
}

/**
 * 关闭 tab
 */
function handleTabClose(index: number) {
    tabs.value.splice(index, 1);
    if (index - 1 < 0) {
        handleTabClick(index, tabs.value[index]);
    } else {
        handleTabClick(index - 1, tabs.value[index - 1]);
    }
}

const proxy = getCurrentInstance()?.proxy;

/**
 * 刷新
 */
function handleRefresh(): void {
    // 触发全局刷新事件
    proxy?.$bus.emit('refresh', {
        path: router.currentRoute.value.fullPath,
        name: router.currentRoute.value.name as string,
    });
}

function handlePre() {
    if (currentIndex.value !== 0) {
        handleTabClick(currentIndex.value - 1, tabs.value[currentIndex.value - 1]);
    }
}

function handleAfter() {
    if (currentIndex.value < tabs.value.length - 1) {
        handleTabClick(currentIndex.value + 1, tabs.value[currentIndex.value + 1]);
    }
}
</script>

<style lang="scss" scoped>
.history-tabs {
    display: flex;
    width: 100%;
    height: 35px;
    border-bottom: var(--el-border);
}

.icon-button {
    display: flex;
    width: 35px;
    height: 35px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    cursor: pointer;
}

.tab-icon {
    display: block;
    width: 18px;
    height: 18px;
}

.tab-icon--small {
    display: block;
    width: 14px;
    height: 14px;
}

.tab-scroll {
    width: 100%;
}

.tab-wrap {
    display: flex;
    width: calc(100% - 140px);
    height: 34px;
    align-items: center;
}

.tab {
    display: flex;
    padding: 0 8px;
    margin: 0 2px;
    height: 28px;
    align-items: center;
    flex-shrink: 0;
    font-size: 12px;
    color: var(--el-text-color-regular);
    background-color: transparent;
    border: 1px solid var(--el-border-color);
    cursor: default;
}

.tab:hover {
    color: var(--el-color-primary);
    background-color: var(--el-color-primary-light-9);
    border-color: var(--el-color-primary-light-7);
}

.tab--active {
    color: var(--el-color-white);
    background-color: var(--el-color-primary);
    border-color: var(--el-color-primary-dark-2);

    &:hover {
        color: var(--el-color-white);
        background-color: var(--el-color-primary-light-3);
    }
}

.close {
    margin-left: 4px;
    display: flex;
    height: 14px;
    width: 14px;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
        color: var(--el-color-primary-light-3);
        background-color: var(--el-color-white);
    }
}
</style>
