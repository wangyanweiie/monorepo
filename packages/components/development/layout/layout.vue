<template>
    <x-layout :routes="showMenus">
        <template #logo="{ collapsed }">
            <x-logo logo="/logo.jpg" title="数字工厂" :collapsed="collapsed"></x-logo>
        </template>

        <template #header-right>
            <x-user user-name="admin"></x-user>
        </template>
    </x-layout>
</template>

<script setup lang="ts">
import { XLayout, XLogo, XUser } from '../../src/index';
import { usePermissionStore } from '../store/permission';

const { showMenus } = usePermissionStore();
</script>
