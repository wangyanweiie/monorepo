<template>
    <div>
        <el-card header="x-form" shadow="hover" class="component">
            <x-form v-model="form" :el-form-props="elFromProps" :schemas="schemas"> </x-form>

            <el-button @click="handleDefault"> DEFAULT </el-button>
            <el-button @click="handleClear"> EMPTY </el-button>
            <el-button type="primary" @click="handleTest"> TEST </el-button>
        </el-card>

        <x-search-form
            v-model="form"
            :schemas="searchSchemas"
            :el-form-props="elFromProps"
            header="x-search-form"
            class="component"
            @search="handleSearch"
        >
        </x-search-form>

        <!-- <x-table
            ref="tableRef"
            :columns="columns"
            :custom-table-data="tableData"
        ></x-table> -->

        <el-card header="x-dialog-form" shadow="hover" class="component">
            <el-button @click="openDialog">打开弹窗</el-button>

            <x-dialog-form
                v-model="dialogVisible"
                v-model:data="form"
                title="新增"
                :schemas="schemas"
                :loading="loading"
                @submit="handleSubmit"
            ></x-dialog-form>
        </el-card>
    </div>
</template>

<script setup lang="ts">
import type { ColProps, FormProps } from 'element-plus';
import type { XFormItemSchema } from '@/form/interface';
import XForm from '@/form/x-form.vue';
import XSearchForm from '@/form/x-search-form.vue';
import XDialogForm from '@/form/x-dialog-form.vue';

interface Form {
    text: string;
    number: number;
    switch: boolean;
    date: string;
    dateTime: string;
    daterange: string[];
}

/**
 * form 表单
 */
const form = ref<Form>({
    text: '',
    number: NaN,
    switch: false,
    date: '',
    dateTime: '',
    daterange: [],
});

/**
 * form props
 */
const elFromProps: Partial<FormProps> = {
    labelWidth: '100px',
};

/**
 * 表单配置
 */
const colProps: Partial<ColProps> = {
    span: 12,
};
const schemas: XFormItemSchema[] = [
    {
        label: '文本',
        prop: 'text',
        components: 'el-input',
        colProps,
    },
    {
        label: '数字',
        prop: 'number',
        components: 'el-input-number',
        colProps,
        elProps: {
            controlsPosition: 'right',
        },
    },
    {
        label: '日期',
        prop: 'date',
        components: 'el-date-picker',
        colProps,
        elProps: {
            type: 'date',
            format: 'YYYY-MM-DD',
            valueFormat: 'YYYY-MM-DD',
        },
    },
    {
        label: '日期时间',
        prop: 'dateTime',
        components: 'el-date-picker',
        colProps,
        elProps: {
            type: 'datetime',
            format: 'YYYY-MM-DD HH:mm:ss',
            valueFormat: 'YYYY-MM-DD HH:mm:ss',
        },
    },
    {
        label: '开关',
        prop: 'switch',
        components: 'el-switch',
        colProps,
    },
];

/**
 * 默认值
 */
function handleDefault() {
    form.value = {
        text: '哈哈',
        number: 18,
        switch: true,
        date: '2023-08-31',
        dateTime: '2023-08-31 12:00:00',
        daterange: ['2023-08-31', '2024-02-28'],
    };
}

/**
 * 清空
 */
function handleClear() {
    form.value = {
        text: '',
        number: NaN,
        switch: false,
        date: '',
        dateTime: '',
        daterange: [],
    };
}

/**
 * 测试
 */
function handleTest() {
    console.log('form', form.value);
}

/**
 * 查询表单配置
 */
const searchProps: Partial<ColProps> = {
    span: 6,
};
const searchSchemas: XFormItemSchema[] = [
    {
        label: '日期范围',
        prop: 'daterange',
        components: 'el-date-picker',
        colProps: {
            span: 12,
        },
        elProps: {
            type: 'daterange',
            format: 'YYYY-MM-DD',
            valueFormat: 'YYYY-MM-DD',
        },
    },
    {
        label: '文本',
        prop: 'text',
        components: 'el-input',
        colProps: searchProps,
    },
    {
        label: '数字',
        prop: 'number',
        components: 'el-input-number',
        colProps: searchProps,
        elProps: {
            controlsPosition: 'right',
        },
    },
    {
        label: '开关',
        prop: 'switch',
        components: 'el-switch',
        colProps: searchProps,
    },
];

/**
 * 查询
 */
function handleSearch(form: any) {
    console.log('searchForm', form);
}

/**
 * 弹窗是否展示
 */
const dialogVisible = ref<boolean>(false);

/**
 * 打开弹窗
 */
function openDialog() {
    dialogVisible.value = true;
}

/**
 * loading
 */
const loading = ref<boolean>(false);

/**
 * 提交
 */
function handleSubmit(form: any) {
    console.log('dialogForm', form);
}
</script>
<style lang="scss" scoped>
.component {
    margin-bottom: 10px;
}
</style>
