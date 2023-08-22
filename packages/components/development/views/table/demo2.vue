<template>
    <div>
        <x-table
            ref="tableRef"
            :columns="columns"
            show-index
            selectable
            :is-virtuarl="true"
            :actions-conf="actionsOperation"
            :has-operation="true"
            :custom-table-data="tableData"
        >
            <template #title>
                <span class="titlesize"> 数据 </span>
            </template>
            <template #operation>
                <el-button> 新增 </el-button>
                <el-button> 打印 </el-button>
                <el-button> 审核 </el-button>

                <el-button text @click="openSettingDialog"> 设置 </el-button>
            </template>
            <template #column>
                <el-table-column label="序号" type="index"></el-table-column>
            </template>
            <template #action>
                <el-table-column label="操作" fixed="right" align="center" width="200">
                    <template #default="{ row }">
                        <el-button type="primary" text> 编辑 </el-button>
                        <el-button type="primary" text> 删除 </el-button></template
                    >
                </el-table-column>
            </template>
        </x-table>

        <el-dialog v-model="componentSettingVisible" title="设置" destroy-on-close width="700px">
            <div>
                <x-checkbox></x-checkbox>
                <!-- <el-checkbox
                    v-model="checkAll"
                    :indeterminate="isIndeterminate"
                    @change="handleCheckAllChange"
                >
                    全选
                </el-checkbox> -->
                <!-- <vue-draggable v-model="data" item-key="id">
                    <template #item="{ element }">
                        <div class="list-item">
                            <div class="check">
                                <el-checkbox></el-checkbox>
                            </div>
                            <div>
                                {{ element }}
                            </div>
                        </div>
                    </template>
                </vue-draggable> -->
            </div>
            <!-- <template #footer>
                <el-button
                    type="primary"
                    :loading="settingComponentLoading"
                    @click="handleSettingComponent"
                >
                    确定
                </el-button>

                <el-button @click="handleSettingComponentCancel">
                    取消
                </el-button>
            </template> -->
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
import type { XTableColumn } from '@/table/interface';
import xTable from '../../../src/table/x-table.vue';
// 虚拟表格表头
const columns: XTableColumn[] = [];

const tableData = [
    {
        a: '1111',
        b: '333',
        c: '3322',
        d: '444',
        name: '1234',
    },
    {
        a: '1',
        b: '2',
        c: '3',
        d: '4',
        name: '1234',
        // e: [
        //     {
        //         a: '1',
        //         b: '1',
        //         c: '1',
        //         d: '1',
        //     },
        // ],
    },
    {
        a: '1',
        b: '2',
        c: '3',
        d: '4',
        name: '1234',
        // e: [
        //     {
        //         a: '1',
        //         b: '1',
        //         c: '1',
        //         d: '1',
        //     },
        // ],
    },
    {
        a: '1',
        b: '2',
        c: '3',
        d: '4',
        name: '1234',
        // e: [
        //     {
        //         a: '1',
        //         b: '1',
        //         c: '1',
        //         d: '1',
        //     },
        // ],
    },
    {
        a: '1',
        b: '2',
        c: '3',
        d: '4',
        name: '1234',
    },
    {
        a: '1',
        b: '2',
        c: '3',
        d: '4',
        name: '1234',
    },
    {
        a: '1',
        b: '2',
        c: '3',
        d: '4',
        name: '1234',
    },
    {
        a: '1',
        b: '2',
        c: '3',
        d: '4',
        name: '1234',
    },
    {
        a: '1',
        b: '2',
        c: '3',
        d: '4',
        name: '1234',
    },
    {
        a: '1',
        b: '2',
        c: '3',
        d: '4',
        name: '1234',
    },
    {
        a: '1',
        b: '2',
        c: '3',
        name: '7777',
        d: '4',
    },
    {
        a: '1',
        b: '2',
        c: '3',
        name: '6666',
        d: '4',
    },
    {
        a: '1',
        b: '2',
        c: '3',
        d: '4',
        name: '5555',
    },
    {
        a: '1',
        b: '2',
        c: '3',
        name: '4444',
        d: '4',
    },
    {
        a: '1',
        b: '2',
        c: '3',
        name: '1234',
        d: '4',
    },
    {
        a: '1',
        b: '2',
        name: '1234',
        c: '3',
        d: '4',
    },
];

const actionsOperation = ref([
    {
        title: '编辑',
        onclick: (scope: any) => {
            console.log(scope, 'scope');
            console.log('edit');
        },
    },
    {
        title: '删除',
        onclick: (scope: any) => {
            console.log(scope, 'scope');
        },
    },
    {
        title: '详情',
        onclick: (scope: any) => {
            console.log(scope, 'scope');
        },
    },
]);

const componentSettingVisible = ref<boolean>(false);
function openSettingDialog() {
    componentSettingVisible.value = true;
}
</script>
<style lang="scss" scoped>
.titlesize {
    font-size: 18px;
    font-weight: bold;
}
</style>
