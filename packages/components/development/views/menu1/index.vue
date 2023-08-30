<template>
    <parent-view :matched-index="2" :cache-list="cacheList"></parent-view>
</template>

<script setup lang="ts">
import { ParentView } from '@/index';
import { usePermissionStore } from '@dev/store/permission';

const { cacheList } = usePermissionStore();
</script>
