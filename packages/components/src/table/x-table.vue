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
                v-model:current-page="currentPage"
                v-model:page-size="pageSize"
                :page-sizes="[10, 20, 50, 100]"
                background
                layout=" ->, slot,total, sizes, prev, pager, next, jumper"
                :total="total"
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
import type { PaginationProps, TableProps, TableInstance } from 'element-plus';
import type { APIKeyMap, Pagination, XTableColumn, DataType, ActionButton, ExportConfig } from './interface';
import { InfoFilled } from '@element-plus/icons-vue';
import { cloneDeep } from 'lodash-es';
import tableSetting from './components/table-setting.vue';

/**
 * 按钮每个字符所占宽度
 */
const WIDTH_PER_CHAR = 20;

/**
 * 操作栏最小宽度
 */
const ACTION_COLUMN_MIN_WIDTH = 80;

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
 * table ref
 */
const tableRef = ref<TableInstance>();

/**
 * 表格 tableLoading
 */
const tableLoading = ref<boolean>(false);

/**
 * 表格列配置
 */
const columnList = ref<XTableColumn[]>();

/**
 * 表格数据
 */
const tableData = ref<Record<string, any>[]>([]);

/**
 * 分页设置
 */
const pagination = ref<Pagination>({
    pageSize: 10,
    page: 1,
    total: 0,
});

/**
 * 每页数量
 */
const pageSize = ref<number>(10);

/**
 * 当前页
 */
const currentPage = ref<number>(1);

/**
 * 总数据量
 */
const total = ref<number>(0);

/**
 * 树形结构
 */
const treeProps = computed(() => {
    if (props.isTree) {
        return props.elTableProps.treeProps;
    } else {
        return {};
    }
});

/**
 * 选中的行数据
 */
const selectRows = ref<any[]>([]);

/**
 * 选中的行数据数量
 */
const selectedCount = computed<number>(() => selectRows.value.length ?? 0);

/**
 * 改变选中状态
 */
function handleSelectChange(selection: any[]) {
    selectRows.value = selection;
}

/**
 * 查询条件
 */
const searchData = ref<Record<string, any> | undefined>({});

/**
 * 获取表格数据
 * @param query 查询参数
 */
async function loadData(query?: Record<string, any>): Promise<void> {
    searchData.value = query;

    const params = {
        [props.apiKeyMap?.queryCurrentPageKey || 'page']: currentPage.value,
        [props.apiKeyMap?.queryPageSizeKey || 'limit']: pageSize.value,
        ...props.apiParams,
        ...searchData.value,
    };

    // 1.动态赋值，分页接口
    if (props.api) {
        tableLoading.value = true;

        const res = await props.api(params);

        if (!res) {
            tableLoading.value = false;
            return;
        }

        if (props.afterQuery) {
            await props.afterQuery(tableData.value);
        }

        tableLoading.value = false;
        tableData.value = res[props.apiKeyMap?.returnRecordKey || 'records'] || [];
        pageSize.value = res[props.apiKeyMap?.returnCurrentSizeKey || 'limit'];
        currentPage.value = res[props.apiKeyMap?.returnCurrentPageKey || 'current'];
        total.value = res[props.apiKeyMap?.returnTotalKey || 'total'] || 0;
    } else {
        // 2.静态赋值
        tableData.value = props.data.slice(0, pageSize.value);
        total.value = props.data.length;

        if (props.afterQuery) {
            await props.afterQuery(tableData.value);
        }
    }

    handleSelectedList();
}

/**
 * 假分页
 */
function handleFalsePage() {
    const skipNum = (currentPage.value - 1) * pageSize.value;
    tableData.value =
        skipNum + currentPage.value >= props.data.length
            ? props.data.slice(skipNum, props.data.length)
            : props.data.slice(skipNum, skipNum + pageSize.value);

    handleSelectedList();
}

/**
 * 改变每页数量
 */
async function handleSizeChange() {
    if (props.api) {
        await loadData(searchData.value);
        selectRows.value = tableRef.value?.getSelectionRows();
    } else {
        handleFalsePage();
    }

    handleSelectedList();
}

/**
 * 改变页码
 */
async function handleCurrentChange() {
    if (props.api) {
        await loadData(searchData.value);
        selectRows.value = tableRef.value?.getSelectionRows();
    } else {
        handleFalsePage();
    }

    handleSelectedList();
}

/**
 * 序号展示
 */
function handleIndex(index: number) {
    if (props.continuous) {
        return (currentPage.value - 1) * pageSize.value + index + 1;
    }

    return index + 1;
}

/**
 * 是否可以选中当前行数据.如果 type 是,但是个别行数据不可选中,往行数据中加 selected 字段可生效
 * @param row 行数据
 */
function handleRowSelect(row: Record<string, any>) {
    if (row.selected) {
        return false;
    }

    return true;
}

/**
 * 数据回显勾选
 */
function toggleRowSelection(rows: any[]) {
    if (rows.length) {
        rows.forEach(row => {
            tableData.value.find(item => {
                if (item[props.rowKey] === row[props.rowKey]) {
                    tableRef.value?.toggleRowSelection(item, true);
                }
            });
        });
    }
}

/**
 * 判断是否有需要回显
 */
function handleSelectedList() {
    if (!props.selectedList || props.selectedList.length === 0) {
        return;
    }

    nextTick(() => {
        toggleRowSelection(props.selectedList);
        selectRows.value = props.selectedList;
    });
}

/**
 * 是否含有操作栏
 */
const hasActionBtn = ref<boolean>(true);

/**
 * 操作栏宽度
 */
const actionsWidth = ref<number>(0);

/**
 * action buttons
 */
function actionButtons(row: Record<string, any>, index: number): ActionButton[] {
    const buttons = props.actions(row, index);

    hasActionBtn.value = !!buttons.length;

    // 计算操作列宽
    const width =
        buttons.reduce((preValue: number, currentValue: ActionButton) => {
            return preValue + (currentValue.label?.length ?? 0);
        }, 0) * WIDTH_PER_CHAR;

    actionsWidth.value = width < ACTION_COLUMN_MIN_WIDTH ? ACTION_COLUMN_MIN_WIDTH : width;

    return buttons;
}

/**
 * 获取选中值
 */
function getSelectedRows(): Record<string, any>[] {
    return selectRows.value;
}

/**
 * 清空选中
 */
function clearSelection(): void {
    tableRef.value?.clearSelection();
}

/**
 * 获取表格数据
 */
function getTableData(): Record<string, any>[] {
    return tableData.value;
}

/**
 * 监听表格列配置
 */
watch(
    () => props.columns,
    (newValue: XTableColumn[]) => {
        columnList.value = cloneDeep(newValue) as any;
    },
);

/**
 * 监听表格数据
 */
watch(
    () => props.data,
    newValue => {
        total.value = newValue.length;
        currentPage.value = 1;
        pageSize.value = 10;
        tableData.value = newValue.slice(0, pageSize.value);
        handleSelectedList();
    },
    {
        deep: true,
    },
);

/**
 * 监听 loading
 */
watchEffect(() => {
    tableLoading.value = props.loading;
});

/**
 * 页面渲染
 */
onMounted(async () => {
    columnList.value = cloneDeep<XTableColumn[]>(props.columns);
    pageSize.value = props.elPaginationProps === false ? 1000 : 10;

    if (!props.lazy) {
        await loadData();
    }
});

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
