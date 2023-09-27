import type { PaginationProps, TableProps } from 'element-plus';
import type { XTableAPIKeyMap, XTableColumn, XTableDataType, XTableActionButton } from './interface';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    title: {
        type: globalThis.PropType<string>;
        default: string;
    };
    columns: {
        type: globalThis.PropType<XTableColumn[]>;
        required: true;
        default: () => never[];
    };
    data: {
        type: globalThis.PropType<XTableDataType[]>;
        default: () => never[];
    };
    header: {
        type: globalThis.PropType<string>;
        required: true;
        default: string;
    };
    selectable: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    shadow: {
        type: globalThis.PropType<"hover" | "always" | "never">;
        default: string;
    };
    bodyStyle: {
        type: globalThis.PropType<Record<string, string>>;
        default: () => {
            padding: string;
        };
    };
    tooltipContent: {
        type: globalThis.PropType<string>;
        default: string;
    };
    showIndex: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    rowKey: {
        type: globalThis.PropType<string>;
        default: string;
    };
    api: {
        type: globalThis.PropType<any>;
        default: undefined;
    };
    apiParams: {
        type: globalThis.PropType<Record<string, string | number>>;
        default: () => {};
    };
    lazy: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    loading: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    columnIndex: {
        type: globalThis.PropType<number[]>;
        default: () => never[];
    };
    elTableProps: {
        type: globalThis.PropType<Partial<TableProps<XTableDataType>>>;
        default: () => {};
    };
    elPaginationProps: {
        type: globalThis.PropType<Partial<PaginationProps>>;
        default: undefined;
    };
    dividePage: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    continuous: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    isTree: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    selectedList: {
        type: globalThis.PropType<any[]>;
        default: () => never[];
    };
    apiKeyMap: {
        type: globalThis.PropType<XTableAPIKeyMap>;
        default: () => {
            queryCurrentPageKey: string;
            queryPageSizeKey: string;
            returnCurrentPageKey: string;
            returnCurrentSizeKey: string;
            returnTotalKey: string;
            returnPagesKey: string;
            returnRecordKey: string;
        };
    };
    actions: {
        type: globalThis.PropType<(row: any, index: number) => XTableActionButton[]>;
        default: () => never[];
    };
    combineField: {
        type: globalThis.PropType<string>;
        default: string;
    };
}, {
    loadData: (query?: Record<string, string | number> | undefined) => Promise<void>;
    getSelectedRows: () => Record<string, any>[];
    clearSelection: () => void;
    getTableData: () => Record<string, any>[];
    handleToggleRowSelection: (selectedList: any[]) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    title: {
        type: globalThis.PropType<string>;
        default: string;
    };
    columns: {
        type: globalThis.PropType<XTableColumn[]>;
        required: true;
        default: () => never[];
    };
    data: {
        type: globalThis.PropType<XTableDataType[]>;
        default: () => never[];
    };
    header: {
        type: globalThis.PropType<string>;
        required: true;
        default: string;
    };
    selectable: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    shadow: {
        type: globalThis.PropType<"hover" | "always" | "never">;
        default: string;
    };
    bodyStyle: {
        type: globalThis.PropType<Record<string, string>>;
        default: () => {
            padding: string;
        };
    };
    tooltipContent: {
        type: globalThis.PropType<string>;
        default: string;
    };
    showIndex: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    rowKey: {
        type: globalThis.PropType<string>;
        default: string;
    };
    api: {
        type: globalThis.PropType<any>;
        default: undefined;
    };
    apiParams: {
        type: globalThis.PropType<Record<string, string | number>>;
        default: () => {};
    };
    lazy: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    loading: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    columnIndex: {
        type: globalThis.PropType<number[]>;
        default: () => never[];
    };
    elTableProps: {
        type: globalThis.PropType<Partial<TableProps<XTableDataType>>>;
        default: () => {};
    };
    elPaginationProps: {
        type: globalThis.PropType<Partial<PaginationProps>>;
        default: undefined;
    };
    dividePage: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    continuous: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    isTree: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    selectedList: {
        type: globalThis.PropType<any[]>;
        default: () => never[];
    };
    apiKeyMap: {
        type: globalThis.PropType<XTableAPIKeyMap>;
        default: () => {
            queryCurrentPageKey: string;
            queryPageSizeKey: string;
            returnCurrentPageKey: string;
            returnCurrentSizeKey: string;
            returnTotalKey: string;
            returnPagesKey: string;
            returnRecordKey: string;
        };
    };
    actions: {
        type: globalThis.PropType<(row: any, index: number) => XTableActionButton[]>;
        default: () => never[];
    };
    combineField: {
        type: globalThis.PropType<string>;
        default: string;
    };
}>>, {
    title: string;
    columns: XTableColumn[];
    data: XTableDataType[];
    header: string;
    selectable: boolean;
    shadow: "hover" | "always" | "never";
    bodyStyle: Record<string, string>;
    tooltipContent: string;
    showIndex: boolean;
    rowKey: string;
    api: any;
    apiParams: Record<string, string | number>;
    lazy: boolean;
    loading: boolean;
    columnIndex: number[];
    elTableProps: Partial<TableProps<XTableDataType>>;
    elPaginationProps: Partial<PaginationProps>;
    dividePage: boolean;
    continuous: boolean;
    isTree: boolean;
    selectedList: any[];
    apiKeyMap: XTableAPIKeyMap;
    actions: (row: any, index: number) => XTableActionButton[];
    combineField: string;
}, {}>, Partial<Record<string, (_: {
    scope: any;
}) => any>> & {
    title?(_: {}): any;
    operation?(_: {
        checkedRows: any[];
    }): any;
    table__main__action?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
