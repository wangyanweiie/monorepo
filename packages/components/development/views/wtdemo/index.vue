<template>
    <div>
        <x-form v-model="formData" :el-form-props="elFromProps" :schemas="schemas">
            <template #radio>
                <el-radio-group v-model="formData.sex" class="ml-4">
                    <el-radio :label="0">男</el-radio>
                    <el-radio :label="1">女</el-radio>
                </el-radio-group>
            </template>
        </x-form>

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
    province?: string;
    area?: string;
    sex?: 0 | 1;
}

const formData = ref<FormData>({});

async function handleTest() {
    console.log(formData.value);
}

function handleDefault() {
    formData.value = {
        name: 'jiyuchen',
        age: 32,
        province: '南京',
        area: '江宁',
        sex: 1,
    };
}

function getTreeList(data?: any) {
    return new Promise((resolve, reject) => {
        const list: any = [];
        for (let i = 0; i < 3; i++) {
            list.push({
                id: i,
                name: `姓名${i}`,
                childrenVoList: [],
            });
            for (let j = 3; j < 6; j++) {
                list[i].childrenVoList.push({
                    id: j * i + j,
                    name: `姓名${i}${j}`,
                });
            }
        }
        resolve(list);
    });
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
        label: '省',
        prop: 'province',
        components: 'el-select-v2',
        colProps,
        elProps: {
            options: [
                {
                    label: '南京',
                    value: '南京',
                },
                {
                    label: '盐城',
                    value: '盐城',
                },
            ],
            onVisibleChange: (val: boolean) => {
                console.log('visible change...', val);
            },
        },
    },
    {
        label: '性别',
        prop: 'sex',
        components: 'custom',
        slotName: 'radio',
        colProps,
    },
    {
        label: '区',
        prop: 'area',
        components: 'el-select-v2',
        elProps: (form: FormData) => ({
            disabled: form.province === '盐城',
            options: [
                {
                    label: '江宁',
                    value: '江宁',
                },
                {
                    label: '鼓楼',
                    value: '鼓楼',
                },
            ],
        }),
        colProps,
    },
    {
        label: '班级',
        prop: 'classId',
        components: 'el-cascader',
        colProps,
        api: (form) => getTreeList({ s: form.name }),
        elProps: (form: any) => ({
            props: {
                expandTrigger: 'hover',
                emitPath: false,
                value: 'id',
                label: 'name',
                children: 'childrenVoList',
            },
            onChange: (val: any) => {
                console.log(val, form);
            },
        }),
    },
    {
        label: '日期',
        prop: 'dateTime',
        components: 'el-date-picker',
        elProps: {
            type: 'date',
            valueFormat: 'YYYY-MM-DD',
        },
        colProps: {
            span: 12,
        },
    },
];
</script>
