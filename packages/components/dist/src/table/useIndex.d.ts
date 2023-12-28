import type { XTableColumn, XTableActionButton, XTableProp, XTableSpanMethodProps } from './interface';
/**
 * @description useIndex
 * @param props 组件传参
 */
export default function useIndex(props: XTableProp): {
    tableRef: globalThis.Ref<({
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {
            style?: import("vue").CSSProperties | undefined;
            className?: string | undefined;
            border?: boolean | undefined;
            tableLayout?: "fixed" | "auto" | undefined;
            data?: any[] | undefined;
            fit?: boolean | undefined;
            lazy?: boolean | undefined;
            scrollbarAlwaysOn?: boolean | undefined;
            stripe?: boolean | undefined;
            treeProps?: {
                hasChildren?: string | undefined;
                children?: string | undefined;
            } | undefined;
            showHeader?: boolean | undefined;
            showSummary?: boolean | undefined;
            highlightCurrentRow?: boolean | undefined;
            defaultExpandAll?: boolean | undefined;
            selectOnIndeterminate?: boolean | undefined;
            indent?: number | undefined;
            flexible?: boolean | undefined;
            readonly size?: import("element-plus/es/utils/index.mjs").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never> | undefined;
            key?: string | number | symbol | undefined;
            ref?: import("vue").VNodeRef | undefined;
            ref_for?: boolean | undefined;
            ref_key?: string | undefined;
            onVnodeBeforeMount?: ((vnode: globalThis.VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: globalThis.VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeMounted?: ((vnode: globalThis.VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: globalThis.VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeBeforeUpdate?: ((vnode: globalThis.VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: globalThis.VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: globalThis.VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: globalThis.VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeUpdated?: ((vnode: globalThis.VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: globalThis.VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: globalThis.VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: globalThis.VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeBeforeUnmount?: ((vnode: globalThis.VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: globalThis.VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeUnmounted?: ((vnode: globalThis.VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: globalThis.VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            class?: unknown;
            readonly width?: string | number | undefined;
            onSelect?: ((...args: any[]) => any) | undefined;
            readonly showOverflowTooltip?: boolean | Partial<Pick<import("element-plus").ElTooltipProps, "showArrow" | "effect" | "enterable" | "popperClass" | "offset" | "placement" | "popperOptions" | "showAfter" | "hideAfter">> | undefined;
            readonly rowKey?: string | ((row: any) => string) | undefined;
            readonly height?: string | number | undefined;
            readonly maxHeight?: string | number | undefined;
            readonly sumText?: string | undefined;
            readonly summaryMethod?: import("element-plus/es/components/table/src/table/defaults.mjs").SummaryMethod<any> | undefined;
            readonly rowClassName?: import("element-plus/es/components/table/src/table/defaults.mjs").ColumnCls<any> | undefined;
            readonly rowStyle?: import("element-plus/es/components/table/src/table/defaults.mjs").ColumnStyle<any> | undefined;
            readonly cellClassName?: import("element-plus/es/components/table/src/table/defaults.mjs").CellCls<any> | undefined;
            readonly cellStyle?: import("element-plus/es/components/table/src/table/defaults.mjs").CellStyle<any> | undefined;
            readonly headerRowClassName?: import("element-plus/es/components/table/src/table/defaults.mjs").ColumnCls<any> | undefined;
            readonly headerRowStyle?: import("element-plus/es/components/table/src/table/defaults.mjs").ColumnStyle<any> | undefined;
            readonly headerCellClassName?: import("element-plus/es/components/table/src/table/defaults.mjs").CellCls<any> | undefined;
            readonly headerCellStyle?: import("element-plus/es/components/table/src/table/defaults.mjs").CellStyle<any> | undefined;
            readonly currentRowKey?: string | number | undefined;
            readonly emptyText?: string | undefined;
            readonly expandRowKeys?: any[] | undefined;
            readonly defaultSort?: import("element-plus/es/components/table/src/table/defaults.mjs").Sort | undefined;
            readonly tooltipEffect?: string | undefined;
            readonly tooltipOptions?: Partial<Pick<import("element-plus").ElTooltipProps, "showArrow" | "effect" | "enterable" | "popperClass" | "offset" | "placement" | "popperOptions" | "showAfter" | "hideAfter">> | undefined;
            readonly spanMethod?: ((data: {
                row: any;
                rowIndex: number;
                column: import("element-plus/es/components/table/src/table-column/defaults.mjs").TableColumnCtx<any>;
                columnIndex: number;
            }) => number[] | {
                rowspan: number;
                colspan: number;
            } | undefined) | undefined;
            readonly load?: ((row: any, treeNode: import("element-plus/es/components/table/src/table/defaults.mjs").TreeNode, resolve: (data: any[]) => void) => void) | undefined;
            "onExpand-change"?: ((...args: any[]) => any) | undefined;
            "onCurrent-change"?: ((...args: any[]) => any) | undefined;
            "onSelect-all"?: ((...args: any[]) => any) | undefined;
            "onSelection-change"?: ((...args: any[]) => any) | undefined;
            "onCell-mouse-enter"?: ((...args: any[]) => any) | undefined;
            "onCell-mouse-leave"?: ((...args: any[]) => any) | undefined;
            "onCell-contextmenu"?: ((...args: any[]) => any) | undefined;
            "onCell-click"?: ((...args: any[]) => any) | undefined;
            "onCell-dblclick"?: ((...args: any[]) => any) | undefined;
            "onRow-click"?: ((...args: any[]) => any) | undefined;
            "onRow-contextmenu"?: ((...args: any[]) => any) | undefined;
            "onRow-dblclick"?: ((...args: any[]) => any) | undefined;
            "onHeader-click"?: ((...args: any[]) => any) | undefined;
            "onHeader-contextmenu"?: ((...args: any[]) => any) | undefined;
            "onSort-change"?: ((...args: any[]) => any) | undefined;
            "onFilter-change"?: ((...args: any[]) => any) | undefined;
            "onHeader-dragend"?: ((...args: any[]) => any) | undefined;
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot<any> | undefined;
        }>;
        $root: globalThis.ComponentPublicInstance | null;
        $parent: globalThis.ComponentPublicInstance | null;
        $emit: (event: "select" | "select-all" | "expand-change" | "current-change" | "selection-change" | "cell-mouse-enter" | "cell-mouse-leave" | "cell-contextmenu" | "cell-click" | "cell-dblclick" | "row-click" | "row-contextmenu" | "row-dblclick" | "header-click" | "header-contextmenu" | "sort-change" | "filter-change" | "header-dragend", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            data: {
                type: globalThis.PropType<any[]>;
                default: () => never[];
            };
            size: {
                readonly type: globalThis.PropType<import("element-plus/es/utils/index.mjs").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            width: (StringConstructor | NumberConstructor)[];
            height: (StringConstructor | NumberConstructor)[];
            maxHeight: (StringConstructor | NumberConstructor)[];
            fit: {
                type: BooleanConstructor;
                default: boolean;
            };
            stripe: BooleanConstructor;
            border: BooleanConstructor;
            rowKey: globalThis.PropType<string | ((row: any) => string) | undefined>;
            showHeader: {
                type: BooleanConstructor;
                default: boolean;
            };
            showSummary: BooleanConstructor;
            sumText: StringConstructor;
            summaryMethod: globalThis.PropType<import("element-plus/es/components/table/src/table/defaults.mjs").SummaryMethod<any> | undefined>;
            rowClassName: globalThis.PropType<import("element-plus/es/components/table/src/table/defaults.mjs").ColumnCls<any> | undefined>;
            rowStyle: globalThis.PropType<import("element-plus/es/components/table/src/table/defaults.mjs").ColumnStyle<any> | undefined>;
            cellClassName: globalThis.PropType<import("element-plus/es/components/table/src/table/defaults.mjs").CellCls<any> | undefined>;
            cellStyle: globalThis.PropType<import("element-plus/es/components/table/src/table/defaults.mjs").CellStyle<any> | undefined>;
            headerRowClassName: globalThis.PropType<import("element-plus/es/components/table/src/table/defaults.mjs").ColumnCls<any> | undefined>;
            headerRowStyle: globalThis.PropType<import("element-plus/es/components/table/src/table/defaults.mjs").ColumnStyle<any> | undefined>;
            headerCellClassName: globalThis.PropType<import("element-plus/es/components/table/src/table/defaults.mjs").CellCls<any> | undefined>;
            headerCellStyle: globalThis.PropType<import("element-plus/es/components/table/src/table/defaults.mjs").CellStyle<any> | undefined>;
            highlightCurrentRow: BooleanConstructor;
            currentRowKey: (StringConstructor | NumberConstructor)[];
            emptyText: StringConstructor;
            expandRowKeys: globalThis.PropType<any[] | undefined>;
            defaultExpandAll: BooleanConstructor;
            defaultSort: globalThis.PropType<import("element-plus/es/components/table/src/table/defaults.mjs").Sort | undefined>;
            tooltipEffect: StringConstructor;
            tooltipOptions: globalThis.PropType<Partial<Pick<import("element-plus").ElTooltipProps, "showArrow" | "effect" | "enterable" | "popperClass" | "offset" | "placement" | "popperOptions" | "showAfter" | "hideAfter">> | undefined>;
            spanMethod: globalThis.PropType<((data: {
                row: any;
                rowIndex: number;
                column: import("element-plus/es/components/table/src/table-column/defaults.mjs").TableColumnCtx<any>;
                columnIndex: number;
            }) => number[] | {
                rowspan: number;
                colspan: number;
            } | undefined) | undefined>;
            selectOnIndeterminate: {
                type: BooleanConstructor;
                default: boolean;
            };
            indent: {
                type: NumberConstructor;
                default: number;
            };
            treeProps: {
                type: globalThis.PropType<{
                    hasChildren?: string | undefined;
                    children?: string | undefined;
                } | undefined>;
                default: () => {
                    hasChildren: string;
                    children: string;
                };
            };
            lazy: BooleanConstructor;
            load: globalThis.PropType<((row: any, treeNode: import("element-plus/es/components/table/src/table/defaults.mjs").TreeNode, resolve: (data: any[]) => void) => void) | undefined>;
            style: {
                type: globalThis.PropType<import("vue").CSSProperties>;
                default: () => {};
            };
            className: {
                type: StringConstructor;
                default: string;
            };
            tableLayout: {
                type: globalThis.PropType<"fixed" | "auto">;
                default: string;
            };
            scrollbarAlwaysOn: {
                type: BooleanConstructor;
                default: boolean;
            };
            flexible: BooleanConstructor;
            showOverflowTooltip: globalThis.PropType<boolean | Partial<Pick<import("element-plus").ElTooltipProps, "showArrow" | "effect" | "enterable" | "popperClass" | "offset" | "placement" | "popperOptions" | "showAfter" | "hideAfter">> | undefined>;
        }>> & {
            onSelect?: ((...args: any[]) => any) | undefined;
            "onExpand-change"?: ((...args: any[]) => any) | undefined;
            "onCurrent-change"?: ((...args: any[]) => any) | undefined;
            "onSelect-all"?: ((...args: any[]) => any) | undefined;
            "onSelection-change"?: ((...args: any[]) => any) | undefined;
            "onCell-mouse-enter"?: ((...args: any[]) => any) | undefined;
            "onCell-mouse-leave"?: ((...args: any[]) => any) | undefined;
            "onCell-contextmenu"?: ((...args: any[]) => any) | undefined;
            "onCell-click"?: ((...args: any[]) => any) | undefined;
            "onCell-dblclick"?: ((...args: any[]) => any) | undefined;
            "onRow-click"?: ((...args: any[]) => any) | undefined;
            "onRow-contextmenu"?: ((...args: any[]) => any) | undefined;
            "onRow-dblclick"?: ((...args: any[]) => any) | undefined;
            "onHeader-click"?: ((...args: any[]) => any) | undefined;
            "onHeader-contextmenu"?: ((...args: any[]) => any) | undefined;
            "onSort-change"?: ((...args: any[]) => any) | undefined;
            "onFilter-change"?: ((...args: any[]) => any) | undefined;
            "onHeader-dragend"?: ((...args: any[]) => any) | undefined;
        }, {
            ns: {
                namespace: globalThis.ComputedRef<string>;
                b: (blockSuffix?: string | undefined) => string;
                e: (element?: string | undefined) => string;
                m: (modifier?: string | undefined) => string;
                be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                em: (element?: string | undefined, modifier?: string | undefined) => string;
                bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                is: {
                    (name: string, state: boolean | undefined): string;
                    (name: string): string;
                };
                cssVar: (object: Record<string, string>) => Record<string, string>;
                cssVarName: (name: string) => string;
                cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                cssVarBlockName: (name: string) => string;
            };
            layout: import("element-plus/es/components/table/src/table-layout.mjs").default<any>;
            store: any;
            handleHeaderFooterMousewheel: (event: any, data: any) => void;
            handleMouseLeave: () => void;
            tableId: string;
            tableSize: globalThis.ComputedRef<"" | "default" | "small" | "large">;
            isHidden: globalThis.Ref<boolean>;
            isEmpty: globalThis.ComputedRef<boolean>;
            renderExpanded: globalThis.Ref<null>;
            resizeProxyVisible: globalThis.Ref<boolean>;
            resizeState: globalThis.Ref<{
                width: number | null;
                height: number | null;
                headerHeight: number | null;
            }>;
            isGroup: globalThis.Ref<boolean>;
            bodyWidth: globalThis.ComputedRef<string>;
            tableBodyStyles: globalThis.ComputedRef<{
                width: string;
            }>;
            emptyBlockStyle: globalThis.ComputedRef<{
                width: string;
                height: string;
            } | null>;
            debouncedUpdateLayout: import("lodash-es").DebouncedFunc<() => void>;
            handleFixedMousewheel: (event: any, data: any) => void;
            setCurrentRow: (row: any) => void;
            getSelectionRows: () => any;
            toggleRowSelection: (row: any, selected: boolean) => void;
            clearSelection: () => void;
            clearFilter: (columnKeys?: string[] | undefined) => void;
            toggleAllSelection: () => void;
            toggleRowExpansion: (row: any, expanded?: boolean | undefined) => void;
            clearSort: () => void;
            doLayout: () => void;
            sort: (prop: string, order: string) => void;
            t: import("element-plus").Translator;
            setDragVisible: (visible: boolean) => void;
            context: import("element-plus/es/components/table/src/table/defaults.mjs").Table<any>;
            computedSumText: globalThis.ComputedRef<string>;
            computedEmptyText: globalThis.ComputedRef<string>;
            tableLayout: globalThis.ComputedRef<"fixed" | "auto" | undefined>;
            scrollbarViewStyle: {
                display: string;
                verticalAlign: string;
            };
            tableInnerStyle: globalThis.ComputedRef<{
                height: string | number; /**
                 * FIXME: 合并单元格方法
                 */
                maxHeight?: undefined;
            } | {
                maxHeight: string | number;
                height?: undefined;
            } | {
                height?: undefined;
                maxHeight?: undefined;
            }>;
            scrollbarStyle: globalThis.ComputedRef<{
                height: string;
                maxHeight?: undefined;
            } | {
                maxHeight: string;
                height?: undefined;
            } | {
                height?: undefined;
                maxHeight?: undefined;
            }>;
            scrollBarRef: globalThis.Ref<any>;
            scrollTo: (options: number | ScrollToOptions, yCoord?: number | undefined) => void;
            setScrollLeft: (left?: number | undefined) => void;
            setScrollTop: (top?: number | undefined) => void;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select" | "select-all" | "expand-change" | "current-change" | "selection-change" | "cell-mouse-enter" | "cell-mouse-leave" | "cell-contextmenu" | "cell-click" | "cell-dblclick" | "row-click" | "row-contextmenu" | "row-dblclick" | "header-click" | "header-contextmenu" | "sort-change" | "filter-change" | "header-dragend")[], string, {
            style: import("vue").CSSProperties;
            className: string;
            border: boolean;
            tableLayout: "fixed" | "auto";
            data: any[];
            fit: boolean;
            lazy: boolean;
            scrollbarAlwaysOn: boolean;
            stripe: boolean;
            treeProps: {
                hasChildren?: string | undefined;
                children?: string | undefined;
            } | undefined;
            showHeader: boolean;
            showSummary: boolean;
            highlightCurrentRow: boolean;
            defaultExpandAll: boolean;
            selectOnIndeterminate: boolean;
            indent: number;
            flexible: boolean;
        }, {}, string, {}> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: globalThis.ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: globalThis.ComponentPublicInstance | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
        data: {
            type: globalThis.PropType<any[]>;
            default: () => never[];
        };
        size: {
            readonly type: globalThis.PropType<import("element-plus/es/utils/index.mjs").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        width: (StringConstructor | NumberConstructor)[];
        height: (StringConstructor | NumberConstructor)[];
        maxHeight: (StringConstructor | NumberConstructor)[];
        fit: {
            type: BooleanConstructor;
            default: boolean;
        };
        stripe: BooleanConstructor;
        border: BooleanConstructor;
        rowKey: globalThis.PropType<string | ((row: any) => string) | undefined>;
        showHeader: {
            type: BooleanConstructor;
            default: boolean;
        };
        showSummary: BooleanConstructor;
        sumText: StringConstructor;
        summaryMethod: globalThis.PropType<import("element-plus/es/components/table/src/table/defaults.mjs").SummaryMethod<any> | undefined>;
        rowClassName: globalThis.PropType<import("element-plus/es/components/table/src/table/defaults.mjs").ColumnCls<any> | undefined>;
        rowStyle: globalThis.PropType<import("element-plus/es/components/table/src/table/defaults.mjs").ColumnStyle<any> | undefined>;
        cellClassName: globalThis.PropType<import("element-plus/es/components/table/src/table/defaults.mjs").CellCls<any> | undefined>;
        cellStyle: globalThis.PropType<import("element-plus/es/components/table/src/table/defaults.mjs").CellStyle<any> | undefined>;
        headerRowClassName: globalThis.PropType<import("element-plus/es/components/table/src/table/defaults.mjs").ColumnCls<any> | undefined>;
        headerRowStyle: globalThis.PropType<import("element-plus/es/components/table/src/table/defaults.mjs").ColumnStyle<any> | undefined>;
        headerCellClassName: globalThis.PropType<import("element-plus/es/components/table/src/table/defaults.mjs").CellCls<any> | undefined>;
        headerCellStyle: globalThis.PropType<import("element-plus/es/components/table/src/table/defaults.mjs").CellStyle<any> | undefined>;
        highlightCurrentRow: BooleanConstructor;
        currentRowKey: (StringConstructor | NumberConstructor)[];
        emptyText: StringConstructor;
        expandRowKeys: globalThis.PropType<any[] | undefined>;
        defaultExpandAll: BooleanConstructor;
        defaultSort: globalThis.PropType<import("element-plus/es/components/table/src/table/defaults.mjs").Sort | undefined>;
        tooltipEffect: StringConstructor;
        tooltipOptions: globalThis.PropType<Partial<Pick<import("element-plus").ElTooltipProps, "showArrow" | "effect" | "enterable" | "popperClass" | "offset" | "placement" | "popperOptions" | "showAfter" | "hideAfter">> | undefined>;
        spanMethod: globalThis.PropType<((data: {
            row: any;
            rowIndex: number;
            column: import("element-plus/es/components/table/src/table-column/defaults.mjs").TableColumnCtx<any>;
            columnIndex: number;
        }) => number[] | {
            rowspan: number;
            colspan: number;
        } | undefined) | undefined>;
        selectOnIndeterminate: {
            type: BooleanConstructor;
            default: boolean;
        };
        indent: {
            type: NumberConstructor;
            default: number;
        };
        treeProps: {
            type: globalThis.PropType<{
                hasChildren?: string | undefined;
                children?: string | undefined;
            } | undefined>;
            default: () => {
                hasChildren: string;
                children: string;
            };
        };
        lazy: BooleanConstructor;
        load: globalThis.PropType<((row: any, treeNode: import("element-plus/es/components/table/src/table/defaults.mjs").TreeNode, resolve: (data: any[]) => void) => void) | undefined>;
        style: {
            type: globalThis.PropType<import("vue").CSSProperties>;
            default: () => {};
        };
        className: {
            type: StringConstructor;
            default: string;
        };
        tableLayout: {
            type: globalThis.PropType<"fixed" | "auto">;
            default: string;
        };
        scrollbarAlwaysOn: {
            type: BooleanConstructor;
            default: boolean;
        };
        flexible: BooleanConstructor;
        showOverflowTooltip: globalThis.PropType<boolean | Partial<Pick<import("element-plus").ElTooltipProps, "showArrow" | "effect" | "enterable" | "popperClass" | "offset" | "placement" | "popperOptions" | "showAfter" | "hideAfter">> | undefined>;
    }>> & {
        onSelect?: ((...args: any[]) => any) | undefined;
        "onExpand-change"?: ((...args: any[]) => any) | undefined;
        "onCurrent-change"?: ((...args: any[]) => any) | undefined;
        "onSelect-all"?: ((...args: any[]) => any) | undefined;
        "onSelection-change"?: ((...args: any[]) => any) | undefined;
        "onCell-mouse-enter"?: ((...args: any[]) => any) | undefined;
        "onCell-mouse-leave"?: ((...args: any[]) => any) | undefined;
        "onCell-contextmenu"?: ((...args: any[]) => any) | undefined;
        "onCell-click"?: ((...args: any[]) => any) | undefined;
        "onCell-dblclick"?: ((...args: any[]) => any) | undefined;
        "onRow-click"?: ((...args: any[]) => any) | undefined;
        "onRow-contextmenu"?: ((...args: any[]) => any) | undefined;
        "onRow-dblclick"?: ((...args: any[]) => any) | undefined;
        "onHeader-click"?: ((...args: any[]) => any) | undefined;
        "onHeader-contextmenu"?: ((...args: any[]) => any) | undefined;
        "onSort-change"?: ((...args: any[]) => any) | undefined;
        "onFilter-change"?: ((...args: any[]) => any) | undefined;
        "onHeader-dragend"?: ((...args: any[]) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{
        ns: {
            namespace: globalThis.ComputedRef<string>;
            b: (blockSuffix?: string | undefined) => string;
            e: (element?: string | undefined) => string;
            m: (modifier?: string | undefined) => string;
            be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
            em: (element?: string | undefined, modifier?: string | undefined) => string;
            bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
            bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
            is: {
                (name: string, state: boolean | undefined): string;
                (name: string): string;
            };
            cssVar: (object: Record<string, string>) => Record<string, string>;
            cssVarName: (name: string) => string;
            cssVarBlock: (object: Record<string, string>) => Record<string, string>;
            cssVarBlockName: (name: string) => string;
        };
        layout: import("element-plus/es/components/table/src/table-layout.mjs").default<any>;
        store: any;
        handleHeaderFooterMousewheel: (event: any, data: any) => void;
        handleMouseLeave: () => void;
        tableId: string;
        tableSize: globalThis.ComputedRef<"" | "default" | "small" | "large">;
        isHidden: globalThis.Ref<boolean>;
        isEmpty: globalThis.ComputedRef<boolean>;
        renderExpanded: globalThis.Ref<null>;
        resizeProxyVisible: globalThis.Ref<boolean>;
        resizeState: globalThis.Ref<{
            width: number | null;
            height: number | null;
            headerHeight: number | null;
        }>;
        isGroup: globalThis.Ref<boolean>;
        bodyWidth: globalThis.ComputedRef<string>;
        tableBodyStyles: globalThis.ComputedRef<{
            width: string;
        }>;
        emptyBlockStyle: globalThis.ComputedRef<{
            width: string;
            height: string;
        } | null>;
        debouncedUpdateLayout: import("lodash-es").DebouncedFunc<() => void>;
        handleFixedMousewheel: (event: any, data: any) => void;
        setCurrentRow: (row: any) => void;
        getSelectionRows: () => any;
        toggleRowSelection: (row: any, selected: boolean) => void;
        clearSelection: () => void;
        clearFilter: (columnKeys?: string[] | undefined) => void;
        toggleAllSelection: () => void;
        toggleRowExpansion: (row: any, expanded?: boolean | undefined) => void;
        clearSort: () => void;
        doLayout: () => void;
        sort: (prop: string, order: string) => void;
        t: import("element-plus").Translator;
        setDragVisible: (visible: boolean) => void;
        context: import("element-plus/es/components/table/src/table/defaults.mjs").Table<any>;
        computedSumText: globalThis.ComputedRef<string>;
        computedEmptyText: globalThis.ComputedRef<string>;
        tableLayout: globalThis.ComputedRef<"fixed" | "auto" | undefined>;
        scrollbarViewStyle: {
            display: string;
            verticalAlign: string;
        };
        tableInnerStyle: globalThis.ComputedRef<{
            height: string | number; /**
             * FIXME: 合并单元格方法
             */
            maxHeight?: undefined;
        } | {
            maxHeight: string | number;
            height?: undefined;
        } | {
            height?: undefined;
            maxHeight?: undefined;
        }>;
        scrollbarStyle: globalThis.ComputedRef<{
            height: string;
            maxHeight?: undefined;
        } | {
            maxHeight: string;
            height?: undefined;
        } | {
            height?: undefined;
            maxHeight?: undefined;
        }>;
        scrollBarRef: globalThis.Ref<any>;
        scrollTo: (options: number | ScrollToOptions, yCoord?: number | undefined) => void;
        setScrollLeft: (left?: number | undefined) => void;
        setScrollTop: (top?: number | undefined) => void;
    }> & {} & import("vue").ComponentCustomProperties & {}) | undefined>;
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
    selectedRows: globalThis.Ref<Record<string, any>[]>;
    selectedCount: globalThis.ComputedRef<number>;
    handleSelectChange: (selection: Record<string, any>[]) => void;
    handleIndex: (index: number) => number;
    selectableValue: (row: Record<string, any>) => any;
    searchData: globalThis.Ref<Record<string, string | number>>;
    loadData: (query?: Record<string, string | number>) => Promise<void>;
    handleSizeChange: () => Promise<void>;
    handleCurrentChange: () => Promise<void>;
    handleToggleRowSelection: () => void;
    hasActionBtn: globalThis.Ref<boolean>;
    actionsWidth: globalThis.Ref<number>;
    actionButtons: (row: Record<string, any>, index: number) => XTableActionButton[];
    getSelectedRows: () => Record<string, any>[];
    clearSelection: () => void;
    getTableData: () => Record<string, any>[];
    spanMethod: ({ rowIndex, columnIndex }: XTableSpanMethodProps) => {
        rowspan: number;
        colspan: number;
    } | undefined;
};
