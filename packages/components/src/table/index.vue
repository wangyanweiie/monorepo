<template>
    <el-card :shadow="shadow">
        <div class="table-header">
            <h1 class="title">
                {{ title }}
                <el-tooltip v-if="tooltipContent" :content="tooltipContent" placement="top">
                    <el-icon class="info-icon">
                        <info-filled />
                    </el-icon>
                </el-tooltip>
            </h1>

            <el-scrollbar>
                <div class="operation">
                    <slot name="operation" :checked-rows="selectRows"></slot>

                    <table-setting v-model="columnList" @reload="loadData(searchData)" />
                </div>
            </el-scrollbar>
        </div>

        <el-table
            ref="tableRef"
            v-loading="tableLoading"
            border
            size="small"
            table-layout="auto"
            v-bind="elTableProps"
            :data="tableData"
            :row-key="rowKey"
            :tree-props="treeProps"
            :style="{ width: '100%' }"
            @selection-change="handleSelectChange"
        >
            <!-- 选择列 -->
            <el-table-column
                v-if="selectable"
                type="selection"
                width="60"
                align="center"
                :selectable="handleRowSelect"
                reserve-selection
            />

            <!-- 索引列 -->
            <el-table-column v-if="showIndex" type="index" align="center" label="#" width="50px" :index="handleIndex" />

            <el-table-column
                v-for="(col, i) in columnList"
                :key="i"
                align="center"
                min-width="150"
                show-overflow-tooltip
                v-bind="col"
            >
                <template v-if="!col[`formatter`]" #default="scope">
                    <slot :name="`${col.prop + 'Slot'}`" :scope="scope">
                        {{ scope.row[`${col.prop}`] }}
                    </slot>
                </template>
            </el-table-column>

            <!-- 操作栏 -->
            <el-table-column v-if="hasActionBtn" fixed="right" label="操作" align="center" :width="actionsWidth">
                <template #default="{ row, $index }">
                    <div class="actions">
                        <el-button
                            v-for="(button, index) in actionButtons(row, $index)"
                            :key="index"
                            type="primary"
                            text
                            v-bind="button"
                        >
                            {{ button.label }}
                        </el-button>
                    </div>
                </template>
            </el-table-column>

            <slot name="action"></slot>
        </el-table>

        <!-- 分页 -->
        <div v-if="elPaginationProps !== false" class="pagination">
            <el-pagination
                v-model:current-page="pagination.currentPage"
                v-model:page-size="pagination.pageSize"
                :page-sizes="[10, 20, 50, 100]"
                :total="pagination.total"
                :background="true"
                layout=" ->, slot,total, sizes, prev, pager, next, jumper"
                v-bind="elPaginationProps"
                @current-change="handleCurrentChange"
                @size-change="handleSizeChange"
            >
                <template #default> 已选中{{ selectedCount }}条数据 </template>
            </el-pagination>
        </div>
    </el-card>
</template>

<script lang="ts" setup>
import type { PaginationProps, TableProps } from 'element-plus';
import type { APIKeyMap, XTableColumn, DataType, ActionButton, ExportConfig } from './interface';
import { InfoFilled } from '@element-plus/icons-vue';
import tableSetting from './components/table-setting.vue';
import useIndex from './useIndex';

/**
 * 定义组件选项
 */
defineOptions({
    name: 'XTable',
});

/**
 * Props
 */
const props = withDefaults(
    defineProps<{
        /** 标题 */
        title?: string;
        /** 感叹号提示内容 */
        tooltipContent?: string;
        /** 阴影 */
        shadow?: 'hover' | 'always' | 'never';
        /** loading */
        loading?: boolean;
        /** 是否展示索引 */
        showIndex?: boolean;
        /** 是否可选 */
        selectable?: boolean;
        /** el table props */
        elTableProps?: Partial<TableProps<DataType>>;
        /** el pagination props */
        elPaginationProps?: Partial<PaginationProps> | boolean;
        /** 是否为分页格式 */
        dividePage?: boolean;
        /** 是否懒加载 */
        lazy?: boolean;
        /** 序号是否连续 */
        continuous?: boolean;
        /** 是否是树形结构的数据 */
        isTree?: boolean;
        /** 行数据 key 值 */
        rowKey?: string;
        /** 需要回显的行数据 */
        selectedList?: any[];
        /** 表格列配置 */
        columns: XTableColumn[];
        /** 表格数据 */
        data?: DataType[];
        /** 请求接口 */
        api?: any;
        /** 请求接口参数 */
        apiParams?: Record<string, string | number>;
        /** 接口字段映射 */
        apiKeyMap?: APIKeyMap;
        /** 对查询后的数据进行预处理 */
        afterQuery?: ((data: any[]) => Promise<any>) | ((data: any[]) => void);
        /** 操作栏 */
        actions?: (row: any, index: number) => ActionButton[];
        /** 导出配置 */
        exportProps?: ExportConfig;
    }>(),
    {
        title: '数据列表',
        tooltipContent: '',
        shadow: 'hover',
        loading: false,
        showIndex: false,
        selectable: false,
        elTableProps: () => ({}),
        elPaginationProps: undefined,
        dividePage: true,
        lazy: false,
        continuous: true,
        isTree: false,
        rowKey: 'id',
        selectedList: () => [],
        columns: () => [],
        data: () => [],
        api: undefined,
        apiParams: () => ({}),
        apiKeyMap: () => ({
            queryCurrentPageKey: 'page',
            queryPageSizeKey: 'limit',
            returnCurrentPageKey: 'current',
            returnCurrentSizeKey: 'size',
            returnTotalKey: 'total',
            returnPagesKey: 'pages',
            returnRecordKey: 'records',
        }),
        afterQuery: undefined,
        actions: () => [],
        exportProps: () => ({}),
    },
);

/**
 * useIndex
 */
const {
    tableLoading,
    tableData,
    columnList,
    pagination,
    treeProps,
    selectRows,
    selectedCount,
    handleSelectChange,
    handleIndex,
    handleRowSelect,
    searchData,
    loadData,
    handleSizeChange,
    handleCurrentChange,
    toggleRowSelection,
    hasActionBtn,
    actionsWidth,
    actionButtons,
    getSelectedRows,
    clearSelection,
    getTableData,
} = useIndex(props);

/**
 * 对外暴露属性/方法
 */
defineExpose({
    loadData,
    toggleRowSelection,
    getSelectedRows,
    clearSelection,
    getTableData,
});
</script>

<style lang="scss">
.table-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    white-space: normal;
    flex-wrap: wrap;
}

.title {
    padding: 0;
    margin: 0;
    align-items: center;
    justify-content: left;
}

.operation {
    display: flex;
    align-items: center;
    height: 50px;
}

.actions {
    display: flex;
    justify-content: center;
    padding: 0 15px;
}

.pagination {
    margin-top: 10px;
}

.title-container {
    display: flex;
    align-items: center;
}

.info-icon {
    margin-left: 10px;
    transform: translateY(0.1em);
    // margin-top: 5px;
}
</style>
