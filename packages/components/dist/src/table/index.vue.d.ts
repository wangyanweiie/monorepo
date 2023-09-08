import type { PaginationProps, TableProps } from 'element-plus';
import type { XTableAPIKeyMap, XTableColumn, XTableDataType, XTableActionButton, XTableExportConfig } from './interface';
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
    loading: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    api: {
        type: globalThis.PropType<any>;
        default: undefined;
    };
    shadow: {
        type: globalThis.PropType<"hover" | "never" | "always">;
        default: string;
    };
    bodyStyle: {
        type: globalThis.PropType<Record<string, string>>;
        default: () => {
            padding: string;
        };
    };
    rowKey: {
        type: globalThis.PropType<string>;
        default: string;
    };
    lazy: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    selectable: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    tooltipContent: {
        type: globalThis.PropType<string>;
        default: string;
    };
    showIndex: {
        type: globalThis.PropType<boolean>;
        default: boolean;
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
    apiParams: {
        type: globalThis.PropType<Record<string, string | number>>;
        default: () => {};
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
    exportProps: {
        type: globalThis.PropType<XTableExportConfig>;
        default: () => {};
    };
}, {
    loadData: (query?: Record<string, any> | undefined) => Promise<void>;
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
    loading: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    api: {
        type: globalThis.PropType<any>;
        default: undefined;
    };
    shadow: {
        type: globalThis.PropType<"hover" | "never" | "always">;
        default: string;
    };
    bodyStyle: {
        type: globalThis.PropType<Record<string, string>>;
        default: () => {
            padding: string;
        };
    };
    rowKey: {
        type: globalThis.PropType<string>;
        default: string;
    };
    lazy: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    selectable: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    tooltipContent: {
        type: globalThis.PropType<string>;
        default: string;
    };
    showIndex: {
        type: globalThis.PropType<boolean>;
        default: boolean;
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
    apiParams: {
        type: globalThis.PropType<Record<string, string | number>>;
        default: () => {};
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
    exportProps: {
        type: globalThis.PropType<XTableExportConfig>;
        default: () => {};
    };
}>>, {
    title: string;
    columns: XTableColumn[];
    data: XTableDataType[];
    header: string;
    loading: boolean;
    api: any;
    shadow: "hover" | "never" | "always";
    bodyStyle: Record<string, string>;
    rowKey: string;
    lazy: boolean;
    selectable: boolean;
    tooltipContent: string;
    showIndex: boolean;
    elTableProps: Partial<TableProps<XTableDataType>>;
    elPaginationProps: Partial<PaginationProps>;
    dividePage: boolean;
    continuous: boolean;
    isTree: boolean;
    selectedList: any[];
    apiParams: Record<string, string | number>;
    apiKeyMap: XTableAPIKeyMap;
    actions: (row: any, index: number) => XTableActionButton[];
    exportProps: XTableExportConfig;
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
