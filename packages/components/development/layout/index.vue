<template>
    <el-config-provider :locale="zhCn">
        <x-layout :routes="showMenus">
            <template #logo="{ collapsed }">
                <x-logo logo="/logo.png" title="Development" :collapsed="collapsed"></x-logo>
            </template>

            <template #header-right>
                <x-user user-name="admin"></x-user>
            </template>
        </x-layout>
    </el-config-provider>
</template>

<script setup lang="ts">
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import { XLayout, XLogo, XUser } from '@/index';
import { usePermissionStore } from '@dev/store/permission';

const { showMenus } = usePermissionStore();
</script>
