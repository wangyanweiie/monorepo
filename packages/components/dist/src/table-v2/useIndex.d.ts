import { type Column, type TableV2Instance } from 'element-plus';
import type { XTableV2Prop } from './interface';
/**
 * @description useIndex
 * @param props 组件传参
 */
export default function useIndex(props: XTableV2Prop): {
    tableRef: globalThis.Ref<TableV2Instance | undefined>;
    selectedRows: globalThis.ComputedRef<any[]>;
    selectedCount: globalThis.ComputedRef<number>;
    tableColumns: globalThis.ComputedRef<Column<any>[]>;
    tableData: globalThis.Ref<any[]>;
    pagination: globalThis.Ref<{
        pageSize: number;
        currentPage: number;
        total: number;
    }>;
    handleMouseOver: () => void;
    handleMouseLeave: () => void;
    searchData: globalThis.Ref<Record<string, string | number>>;
    loadData: (query?: Record<string, string | number>) => Promise<void>;
    handleSizeChange: () => Promise<void>;
    handleCurrentChange: () => Promise<void>;
};
