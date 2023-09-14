import type { Column } from 'element-plus';
import type { XTableV2APIKeyMap } from './interface';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    title: {
        type: globalThis.PropType<string>;
        default: string;
    };
    columns: {
        type: globalThis.PropType<Column<any>[]>;
        required: true;
        default: () => never[];
    };
    data: {
        type: globalThis.PropType<Record<string, any>[]>;
        default: () => never[];
    };
    header: {
        type: globalThis.PropType<string>;
        required: true;
        default: string;
    };
    width: {
        type: globalThis.PropType<string>;
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
    height: {
        type: globalThis.PropType<string>;
        default: string;
    };
    emptyText: {
        type: globalThis.PropType<string>;
        default: string;
    };
    loading: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    scroll: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    dividePage: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    apiKeyMap: {
        type: globalThis.PropType<XTableV2APIKeyMap>;
        default: () => {
            queryCurrentPageKey: string;
            queryPageSizeKey: string;
            returnCurrentPageKey: string;
            returnTotalKey: string;
            returnPagesKey: string;
            returnRecordKey: string;
        };
    };
    headerClass: {
        type: globalThis.PropType<any>;
        default: null;
    };
    headerHeight: {
        type: globalThis.PropType<number>;
        default: number;
    };
    rowClass: {
        type: globalThis.PropType<any>;
        default: null;
    };
    rowHeight: {
        type: globalThis.PropType<number>;
        default: number;
    };
    paginationProp: {
        type: globalThis.PropType<Record<string, number>>;
        default: () => {
            pageSize: number;
        };
    };
}, {
    selectedRows: globalThis.ComputedRef<any[]>;
    loadData: (query?: Record<string, string | number>) => Promise<void>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    title: {
        type: globalThis.PropType<string>;
        default: string;
    };
    columns: {
        type: globalThis.PropType<Column<any>[]>;
        required: true;
        default: () => never[];
    };
    data: {
        type: globalThis.PropType<Record<string, any>[]>;
        default: () => never[];
    };
    header: {
        type: globalThis.PropType<string>;
        required: true;
        default: string;
    };
    width: {
        type: globalThis.PropType<string>;
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
    height: {
        type: globalThis.PropType<string>;
        default: string;
    };
    emptyText: {
        type: globalThis.PropType<string>;
        default: string;
    };
    loading: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    scroll: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    dividePage: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    apiKeyMap: {
        type: globalThis.PropType<XTableV2APIKeyMap>;
        default: () => {
            queryCurrentPageKey: string;
            queryPageSizeKey: string;
            returnCurrentPageKey: string;
            returnTotalKey: string;
            returnPagesKey: string;
            returnRecordKey: string;
        };
    };
    headerClass: {
        type: globalThis.PropType<any>;
        default: null;
    };
    headerHeight: {
        type: globalThis.PropType<number>;
        default: number;
    };
    rowClass: {
        type: globalThis.PropType<any>;
        default: null;
    };
    rowHeight: {
        type: globalThis.PropType<number>;
        default: number;
    };
    paginationProp: {
        type: globalThis.PropType<Record<string, number>>;
        default: () => {
            pageSize: number;
        };
    };
}>>, {
    title: string;
    columns: Column<any>[];
    data: Record<string, any>[];
    header: string;
    width: string;
    selectable: boolean;
    shadow: "hover" | "always" | "never";
    bodyStyle: Record<string, string>;
    showIndex: boolean;
    rowKey: string;
    api: any;
    apiParams: Record<string, string | number>;
    height: string;
    emptyText: string;
    loading: boolean;
    scroll: boolean;
    dividePage: boolean;
    apiKeyMap: XTableV2APIKeyMap;
    headerClass: any;
    headerHeight: number;
    rowClass: any;
    rowHeight: number;
    paginationProp: Record<string, number>;
}, {}>, {
    title?(_: {}): any;
    operation?(_: {
        checkedRows: any[];
    }): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
