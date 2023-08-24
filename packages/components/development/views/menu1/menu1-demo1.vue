<template>
    <div>
        <h3>MENU1 - DEMO1</h3>
        <el-input v-model="userName"></el-input>

        <x-table
            :selected-list="selectList"
            selectable
            :columns="columns"
            :data="data"
            row-key="id"
            :after-query="afterQuery"
        ></x-table>
    </div>
</template>

<script setup lang="ts">
import XTable from '@/table/index.vue';

const selectList = ref([
    {
        id: '1',
    },
    {
        id: '5',
    },
    {
        id: '11',
    },
]);

const columns: any[] = [];

const data = [
    {
        materialNum: '123',
        materialName: '123',
        materialSpecification: '123',
        id: '1',
        selected: true,
    },
    {
        materialNum: '123',
        materialName: '123',
        materialSpecification: '123',
        id: '2',
    },
    {
        materialNum: '123',
        materialName: '123',
        materialSpecification: '123',
        id: '3',
        selected: true,
    },
    {
        materialNum: '123',
        materialName: '123',
        materialSpecification: '123',
        id: '4',
    },
    {
        materialNum: '123',
        materialName: '123',
        materialSpecification: '123',
        id: '5',
    },
    {
        materialNum: '123',
        materialName: '123',
        materialSpecification: '123',
        id: '6',
    },

    {
        materialNum: '123',
        materialName: '123',
        materialSpecification: '123',
        id: '7',
    },
    {
        materialNum: '123',
        materialName: '123',
        materialSpecification: '123',
        id: '8',
    },
    {
        materialNum: '123',
        materialName: '123',
        materialSpecification: '123',
        id: '9',
    },
    {
        materialNum: '123',
        materialName: '123',
        materialSpecification: '123',
        id: '10',
    },
    {
        materialNum: '123',
        materialName: '123',
        materialSpecification: '123',
        id: '11',
    },
];
const userName = ref<string>('');

function afterQuery(tableData: Record<string, any>) {
    console.log(tableData);
    tableData[0].materialNum = '我是修改后的编码';
}
</script>
