<template>
    <div class="view">
        <router-view v-slot="{ Component }">
            <transition name="el-fade-in-linear" mode="out-in">
                <!-- <keep-alive :include="cacheList" :exclude="excludeList"> -->
                <component :is="Component" :key="componentKey"></component>
                <!-- </keep-alive> -->
            </transition>
        </router-view>
    </div>
</template>

<script setup lang="ts">
import { useRefresh } from './use-refresh';

const props = withDefaults(
    defineProps<{
        cacheList?: string[];
        matchedIndex?: number;
    }>(),
    {
        cacheList: undefined,
        matchedIndex: -1,
    }
);

const { componentKey, excludeList } = useRefresh({
    matchedIndex: props.matchedIndex,
});
</script>

<style scoped>
.view {
    height: 100%;
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
