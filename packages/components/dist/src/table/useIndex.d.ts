import type { XTableColumn, ActionButton, XTableProp } from './interface';
/**
 * @description useIndex
 * @param props 组件传参
 */
export default function useIndex(props: XTableProp): {
    tableLoading: globalThis.Ref<boolean>;
    tableColumns: globalThis.Ref<XTableColumn[] | undefined>;
    tableData: globalThis.Ref<Record<string, any>[]>;
    pagination: globalThis.Ref<{
        pageSize: number;
        currentPage: number;
        total: number;
    }>;
    treeProps: globalThis.ComputedRef<{
        hasChildren?: string | undefined;
        children?: string | undefined;
    }>;
    selectedRows: globalThis.Ref<any[]>;
    selectedCount: globalThis.ComputedRef<number>;
    handleSelectChange: (selection: any[]) => void;
    handleIndex: (index: number) => number;
    handleRowSelect: (row: Record<string, any>) => any;
    searchData: globalThis.Ref<Record<string, any> | undefined>;
    loadData: (query?: Record<string, any>) => Promise<void>;
    handleSizeChange: () => Promise<void>;
    handleCurrentChange: () => Promise<void>;
    toggleRowSelection: (selectedList: any[]) => void;
    hasActionBtn: globalThis.Ref<boolean>;
    actionsWidth: globalThis.Ref<number>;
    actionButtons: (row: Record<string, any>, index: number) => ActionButton[];
    getSelectedRows: () => Record<string, any>[];
    clearSelection: () => void;
    getTableData: () => Record<string, any>[];
};
