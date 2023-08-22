<template>
    <div class="x-logo">
        <img width="40" height="40" :src="logo" alt="" />
        <div class="x-logo-title" :class="logoTitleClass">{{ title }}</div>
    </div>
</template>

<script setup lang="ts">
const props = withDefaults(
    defineProps<{
        title?: string;
        logo?: string;
        alt?: string;
        collapsed?: boolean;
    }>(),
    {
        title: '',
        logo: '',
        alt: '',
        collapsed: false,
    }
);

const logoTitleClass = computed<string>(() => (props.collapsed ? 'x-logo-title--collapsed' : ''));
</script>

<style lang="scss" scoped>
.x-logo {
    display: flex;
    width: 100%;
    height: 60px;
    justify-content: center;
    align-items: center;
    color: var(--el-color-white);
}

.x-logo-title {
    margin-left: 8px;
    transition: var(--el-transition-duration);
    overflow: hidden;
    white-space: nowrap;

    &--collapsed {
        margin-left: 0;
        width: 0;
    }
}
</style>
