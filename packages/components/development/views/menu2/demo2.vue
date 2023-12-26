<template>
    <div>
        <!-- search-form -->
        <x-search-form
            v-model="searchForm"
            :schemas="searchSchemas"
            :el-form-props="elFromProps"
            header="x-search-form"
            class="component"
            @search="handleSearch"
        >
        </x-search-form>

        <!-- form -->
        <!-- <el-card header="x-form" shadow="hover" class="component">
            <x-form ref="formRef" v-model="form" :el-form-props="elFromProps" :schemas="schemas"> </x-form>

            <el-button @click="handleDefault"> DEFAULT </el-button>
            <el-button @click="handleRest"> REST </el-button>
            <el-button type="primary" @click="handleTest"> TEST </el-button>
        </el-card> -->

        <!-- dialog-form -->
        <el-card header="x-dialog-form" shadow="hover" class="component">
            <el-button @click="openDialog">打开弹窗</el-button>

            <x-dialog-form
                ref="dialogFormRef"
                v-model="dialogVisible"
                v-model:data="form"
                title="新增"
                el-type="el-drawer"
                :schemas="schemas"
                :loading="loading"
                @submit="handleSubmit"
            ></x-dialog-form>
        </el-card>
    </div>
</template>

<script setup lang="ts">
import { type Form, type SearchForm, elFromProps, searchSchemas, schemas } from './conf2';
// import XForm from '@/form/x-form.vue';
import XSearchForm from '@/form/x-search-form.vue';
import XDialogForm from '@/form/x-dialog-form.vue';

/**
 ***************** search from *****************
 */
/**
 * searchForm 查询表单
 */
const searchForm = ref<SearchForm>({
    text: '',
    number: NaN,
    select: '',
    daterange: [],
});

/**
 * 查询
 */
function handleSearch(form: any) {
    console.log('searchForm', form);
}

/**
 ***************** from *****************
 */
/**
 * form ref
 */
// const formRef = ref();

/**
 * form 表单
 */
const form = ref<Form>({
    text: '',
    number: undefined,
    radio: undefined,
    select: '',
    selectLabel: '',
    switch: false,
    date: '',
    datetime: '',
});

/**
 * 默认值
 */
// function handleDefault() {
//     form.value = {
//         text: '哈哈',
//         number: 18,
//         radio: 1,
//         select: 'value1',
//         selectLabel: 'label1',
//         switch: true,
//         date: '2023-08-31',
//         datetime: '2023-08-31 12:00:00',
//     };
// }

// /**
//  * 清空
//  */
// function handleRest() {
//     form.value = {
//         text: '',
//         number: undefined,
//         radio: undefined,
//         select: '',
//         selectLabel: '',
//         switch: false,
//         date: '',
//         datetime: '',
//     };
// }

// /**
//  * 测试
//  */
// async function handleTest() {
//     // 表单校验
//     const valid = await formRef.value.validate();

//     if (!valid) {
//         return;
//     }

//     console.log('form', form.value);
// }

/**
 ***************** dialog from *****************
 */
/**
 * form ref
 */
const dialogFormRef = ref();

/**
 * 弹窗是否展示
 */
const dialogVisible = ref<boolean>(false);

/**
 * loading
 */
const loading = ref<boolean>(false);

/**
 * 打开弹窗
 */
function openDialog() {
    dialogVisible.value = true;
}

/**
 * 提交
 */
async function handleSubmit(form: any) {
    // 表单校验
    const valid = await dialogFormRef.value.validate();

    if (!valid) {
        return;
    }

    console.log('dialogForm', form);
}
</script>
<style lang="scss" scoped>
.component {
    margin-bottom: 10px;
}
</style>
