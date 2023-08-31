<template>
    <el-config-provider :locale="zhCn">
        <x-layout :routes="showMenus" :include-list="[]">
            <template #logo="{ collapsed }">
                <x-logo logo="/logo.png" :collapsed="collapsed"></x-logo>
            </template>

            <template #header-right>
                <x-user :user-name="userInfo?.userName" :dropdown-items="dropdownItems"></x-user>
            </template>
        </x-layout>

        <x-dialog-form
            ref="passwordFormRef"
            v-model="passwordVisible"
            v-model:data="passwordFormData"
            title="修改密码"
            :schemas="baseSchemas"
            :loading="passwordLoading"
            @submit="handleChangePassword"
        ></x-dialog-form>
    </el-config-provider>
</template>

<script setup lang="ts">
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import { usePermissionStore } from '@/store/permission';
import { useConf } from './conf';

const { showMenus } = usePermissionStore();
const {
    userInfo,
    dropdownItems,
    baseSchemas,
    passwordVisible,
    passwordFormRef,
    passwordLoading,
    passwordFormData,
    handleChangePassword,
} = useConf();
</script>

<style lang="scss">
.x-logo img {
    width: 40%;
    background-color: #fff;
}
</style>
