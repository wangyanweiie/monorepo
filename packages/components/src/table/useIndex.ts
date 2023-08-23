import type { TableInstance } from 'element-plus';
import type { Pagination, XTableColumn, ActionButton, XTableProp } from './interface';
import { cloneDeep } from 'lodash-es';

/**
 * @description useIndex
 * @param props 组件传参
 */
export default function useIndex(props: XTableProp) {
    /**
     * 按钮每个字符所占宽度
     */
    const WIDTH_PER_CHAR = 20;

    /**
     * 操作栏最小宽度
     */
    const ACTION_COLUMN_MIN_WIDTH = 80;

    /**
     * table ref
     */
    const tableRef = ref<TableInstance>();

    /**
     * 表格 tableLoading
     */
    const tableLoading = ref<boolean>(false);

    /**
     * 表格数据
     */
    const tableData = ref<Record<string, any>[]>([]);

    /**
     * 表格列配置
     */
    const columnList = ref<XTableColumn[]>();

    /**
     * 分页设置
     */
    const pagination = ref<Pagination>({
        pageSize: 10,
        currentPage: 1,
        total: 0,
    });

    /**
     * 树形结构
     */
    const treeProps = computed(() => {
        if (props.isTree && props.elTableProps?.treeProps) {
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
     * 序号展示
     */
    function handleIndex(index: number) {
        if (props.continuous) {
            return (pagination.value.currentPage - 1) * pagination.value.pageSize + index + 1;
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
     * 查询条件
     */
    const searchData = ref<Record<string, any> | undefined>({});

    /**
     * 获取表格数据
     * @param query 查询参数
     */
    async function loadData(query?: Record<string, any>): Promise<void> {
        searchData.value = query;

        // 1.动态赋值，分页接口
        if (props.api && props.dividePage) {
            tableLoading.value = true;

            const params = {
                ...props.apiParams,
                ...query,
                [props.apiKeyMap?.queryCurrentPageKey ?? 'page']: pagination.value.currentPage,
                [props.apiKeyMap?.queryPageSizeKey ?? 'limit']: pagination.value.pageSize,
            };

            const res = await props.api(params);

            if (!res) {
                tableLoading.value = false;
                return;
            }

            tableLoading.value = false;
            tableData.value = res[props.apiKeyMap?.returnRecordKey ?? 'records'] ?? [];
            pagination.value.currentPage = res.data[props.apiKeyMap?.returnCurrentPageKey ?? 'current'];
            pagination.value.pageSize = res.data[props.apiKeyMap?.returnCurrentSizeKey ?? 'limit'];
            pagination.value.total = res.data[props.apiKeyMap?.returnTotalKey ?? 'total'];
        } else if (props.api && !props.dividePage) {
            // 2.动态赋值，非分页接口，不渲染分页
            pagination.value.pageSize = -1;

            const params = {
                ...props.apiParams,
                ...query,
            };

            const res: any = await props.api(params);

            if (!res) {
                return;
            }

            tableData.value = res.data ?? [];
        } else if (!props.api && props.dividePage && Array.isArray(props.data)) {
            // 3.静态赋值，假分页
            pagination.value.currentPage = 1;
            pagination.value.total = props.data.length;
            tableData.value = props.data.slice(0, pagination.value.pageSize);
        } else if (!props.api && !props.dividePage && Array.isArray(props.data)) {
            // 4.静态赋值，不渲染分页
            pagination.value.pageSize = -1;
            tableData.value = props.data;
        }

        handleSelectedList();
    }

    /**
     * 假分页
     */
    function handleFalsePage() {
        const skipNum = (pagination.value.currentPage - 1) * pagination.value.pageSize;
        tableData.value =
            skipNum + pagination.value.currentPage >= props.data!.length
                ? props.data!.slice(skipNum, props.data!.length)
                : props.data!.slice(skipNum, skipNum + pagination.value.pageSize);

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
     * 数据回显勾选
     */
    function toggleRowSelection(rows: any[]) {
        if (rows.length) {
            rows.forEach(row => {
                tableData.value.find(item => {
                    if (item[props.rowKey as string] === row[props.rowKey as string]) {
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
            toggleRowSelection(props.selectedList as any[]);
            selectRows.value = props.selectedList as any[];
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
            if (Array.isArray(newValue)) {
                pagination.value.currentPage = 1;
                pagination.value.pageSize = 10;
                pagination.value.total = newValue.length;
                tableData.value = newValue.slice(0, pagination.value.pageSize);

                handleSelectedList();
            }
        },
        {
            deep: true,
        },
    );

    /**
     * 监听 loading
     */
    watchEffect(() => {
        tableLoading.value = props.loading as boolean;
    });

    /**
     * 页面渲染
     */
    onMounted(async () => {
        columnList.value = cloneDeep<XTableColumn[]>(props.columns);
        pagination.value.pageSize = props.elPaginationProps === false ? 1000 : 10;

        if (!props.lazy) {
            await loadData();
        }
    });

    return {
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
    };
}
