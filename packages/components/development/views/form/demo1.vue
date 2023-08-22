<template>
    <div>
        <x-form v-model="formData" :el-form-props="elFromProps" :schemas="schemas"> </x-form>

        <el-button type="primary" @click="handleTest"> TEST </el-button>
        <el-button @click="handleDefault"> DEFAULT </el-button>
    </div>
</template>

<script setup lang="ts">
import type { XFormItemSchema } from '@/form/interface';
import XForm from '@/form/x-form.vue';
import type { ColProps, FormProps } from 'element-plus';

interface FormData {
    name?: string;
    age?: number;
    city?: string[];
    // city?: string;
    cityLabel?: string;
    open?: true;
}

const formData = ref<FormData>({
    // name: 'jiyuchen',
    // age: 32,
    // city: ['南京'],
    // open: true,
});

function handleTest() {
    console.log(formData.value);
}

function handleDefault() {
    formData.value = {
        name: 'jiyuchen',
        age: 32,
        city: ['南京'],
        // city: '南京',
        open: true,
    };
}

const colProps: Partial<ColProps> = {
    span: 6,
};

const elFromProps: Partial<FormProps> = {
    labelWidth: '120px',
};

const schemas: XFormItemSchema[] = [
    {
        label: '姓名',
        prop: 'name',
        components: 'el-input',
        colProps,
    },
    {
        label: '年龄',
        prop: 'age',
        components: 'el-input-number',
        elProps: {
            step: 1,
            min: 1,
            max: 200,
        },
        colProps,
    },
    {
        label: '城市',
        prop: 'city',
        components: 'el-select-v2',
        colProps,
        elProps: {
            // multiple: true,
            labelSchema: 'cityLabel',
            options: [
                {
                    label: '南京',
                    value: '南京',
                },
                {
                    label: '盐城',
                    value: '盐城',
                },
                {
                    label: '常州',
                    value: '常州',
                },
            ],
        },
    },
    {
        label: '开关',
        prop: 'open',
        components: 'el-switch',
        colProps,
    },
];
</script>
