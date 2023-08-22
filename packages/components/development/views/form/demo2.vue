<template>
    <div>
        <x-form v-model="formData" :el-form-props="elFromProps" :schemas="schemas"> </x-form>
        <div>checkbox -多选</div>
        <x-checkbox
            v-model="checkValue"
            :all-choose="false"
            :options="CheckBoxOptions"
            :type="checkboxType"
        >
        </x-checkbox>

        <br />
        <div>radio - 单选</div>
        <x-radio v-model="radioValue" :options="radioOptions" :type="radioType"></x-radio>

        <x-select :schema="schemas" :options="radioOptions"></x-select>
        <br />

        <br />

        <el-button type="primary" @click="handleTest"> TEST </el-button>
        <el-button @click="handleDefault"> DEFAULT </el-button>
        <el-button @click="handleClear"> EMPTY </el-button>

        <br />
        <hr />

        <br />

        <br />
        <x-search-form
            v-model="formData"
            shadow="always"
            :el-form-props="elFromProps"
            :schemas="searchSchemas"
            @search="handleSearch"
        >
        </x-search-form>

        <!-- <x-table
            ref="tableRef"
            :columns="columns"
            :custom-table-data="tableData"
        ></x-table> -->

        <el-button @click="openDialog">打开弹窗</el-button>

        <x-dialog-form
            v-model="dialogVisible"
            :schemas="schemas"
            title="新增"
            :loading="createLoading"
            :form-default-value="formDefaultValue"
            @submit="handleSubmit"
        ></x-dialog-form>
    </div>
</template>

<script setup lang="ts">
import XCheckbox from '@/form/components/x-checkbox.vue';
import XRadio from '@/form/components/x-radio.vue';
import XSearchForm from '@/form/x-search-form.vue';
import XDialogForm from '@/form/x-dialog-form.vue';
import type { CheckboxType, RadioType, XFormItemSchema } from '@/form/interface';
import XForm from '@/form/x-form.vue';
import type { ColProps, FormProps } from 'element-plus';

interface FormData {
    name?: string;
    age?: number;
    city?: string;
    area?: string;
    sex?: 0 | 1;
    open?: true;
    hobbies?: true;
    administrator?: string;
}

const formData = ref<FormData>({});

function handleTest() {
    console.log(formData.value);

    console.log('radio: ', checkValue.value);
}

function handleDefault() {
    checkValue.value = ['sh'];
    radioValue.value = 'sh';
}

function handleClear() {
    formData.value = {
        name: '',
    };

    checkValue.value = [];
    radioValue.value = '';
}

const colProps: Partial<ColProps> = {
    span: 12,
};

const searchProps: Partial<ColProps> = {
    span: 6,
};
const elFromProps: Partial<FormProps> = {
    labelWidth: '100px',
};

const schemas: XFormItemSchema[] = [
    {
        label: '名字',
        prop: 'name',
        components: 'el-input',
        colProps,
    },
    {
        label: '分割线',
        prop: 'divider',
        components: 'el-divider',
        colProps,
    },
    {
        label: '地址',
        prop: 'address',
        components: 'el-input',
        colProps,
    },
    {
        label: '爱好',
        prop: 'hobby',
        components: 'el-input',
        colProps,
    },
    {
        label: '体重',
        prop: 'weight',
        components: 'el-input-number',
        colProps,
    },
    {
        label: '性别',
        prop: 'sex',
        components: 'el-switch',
        colProps,
    },
    {
        label: '体型',
        prop: 'isOrNot',
        components: 'el-input',
        colProps,
    },
    {
        label: '标题',
        prop: 'title',
        components: 'el-input',
        colProps,
    },
    // {
    //     label: '选择',
    //     prop: 'select',
    //     components: 'x-select',
    //     colProps,
    // },
    // {
    //     label: '年龄',
    //     prop: 'age',
    //     components: 'el-input-number',
    //     colProps,
    // },
    // {
    //     label: '身高',
    //     prop: 'height',
    //     components: 'el-input',
    //     colProps,
    //     elProps: {
    //         type: 'number',
    //     },
    // },
    // {
    //     label: '日期',
    //     prop: 'date',
    //     components: 'el-date-picker',
    //     colProps,
    //     elProps: {
    //         type: 'date',
    //     },
    // },
    // {
    //     label: '日期时间',
    //     prop: 'dateTime',
    //     components: 'el-date-picker',
    //     colProps,
    //     elProps: {
    //         type: 'datetime',
    //     },
    // },
    // {
    //     label: '时间',
    //     prop: 'date',
    //     components: 'el-date-picker',
    //     colProps,
    //     elProps: {
    //         type: 'datetime',
    //     },
    // },
    // {
    //     label: '省份',
    //     prop: 'province',
    //     components: 'el-select-v2',
    //     colProps,
    //     elProps: {
    //         options: [
    //             {
    //                 label: '江苏',
    //                 value: 'js',
    //             },
    //             {
    //                 label: '安徽',
    //                 value: 'ah',
    //             },
    //         ],
    //     },
    // },
    // {
    //     label: '',
    //     prop: 'search',
    //     components: 'el-button',
    //     elProps: {
    //         type: 'primary',
    //         icon: 'ArrowLeft',
    //         width: 100,
    //     },
    //     colProps,
    // },
];
const searchSchemas: XFormItemSchema[] = [
    {
        label: '名字',
        prop: 'name',
        components: 'el-input',
        colProps: searchProps,
    },
    {
        label: '地址',
        prop: 'address',
        components: 'el-input',
        colProps: searchProps,
    },
    {
        label: '爱好',
        prop: 'hobby',
        components: 'el-input',
        colProps: searchProps,
    },
    {
        label: '体重',
        prop: 'weight',
        components: 'el-input-number',
        colProps: searchProps,
    },
    {
        label: '年龄',
        prop: 'age',
        components: 'el-input-number',
        colProps: searchProps,
    },
];

const checkValue = ref<any>();

const CheckBoxOptions = [
    {
        labelName: '北京',
        label: 'bj',
    },
    {
        labelName: '上海',
        label: 'sh',
    },
    {
        labelName: '南京',
        label: 'nj',
    },
];

const checkboxType = ref<CheckboxType>('box');

const radioValue = ref<string>();

const radioOptions = [
    {
        labelName: '北京',
        label: 'bj',
    },
    {
        labelName: '上海',
        label: 'sh',
    },
    {
        labelName: '南京',
        label: 'nj',
    },
];

const radioType = ref<RadioType>('button');

function handleSearch(form: any) {
    console.log(form);
}

const dialogVisible = ref<boolean>(false);
function openDialog() {
    dialogVisible.value = true;
}

const createLoading = ref<boolean>(false);

function handleSubmit(form: any) {
    console.log(form, 'form');

    // createLoading.value = false;

    console.log(createLoading.value, 'createLoading');
}

const formDefaultValue = { name: '1', address: '2' };

const instance = getCurrentInstance();
console.log(instance);

onUnmounted(() => {
    console.log('DEMO2 PAGE UNMOUNTED');
});
</script>
