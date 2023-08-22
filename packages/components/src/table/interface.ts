import type { PaginationProps, TableProps, ButtonProps, TableColumnCtx } from 'element-plus';

/**
 * 请求接口出参入参字段
 * Partial<APIKeyMap>
 */
export interface APIKeyMap {
    /** 查询时的当前页 key 值 */
    queryCurrentPageKey: string;
    /** 查询时的每页数量 key 值 */
    queryPageSizeKey: string;
    /** 返回时当前页 key 值 */
    returnCurrentPageKey: string;
    /** 返回时当前每页条数 key 值 */
    returnCurrentSizeKey?: string;
    /** 返回时的总数据量 key 值 */
    returnTotalKey: string;
    /** 返回时总页数 key 值 */
    returnPagesKey: string;
    /** 返回时的数据列表 key 值 */
    returnRecordKey: string;
}

/**
 * 分页参数
 */
export interface Pagination {
    /** 每页数量 */
    pageSize: number;
    /** 当前页 */
    page: number;
    /** 总数据量 */
    total: number;
}

/**
 * table props
 */
export interface XTableProp {
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
}

/**
 * 表格列配置
 */
export type XTableColumn<T = any> = Partial<TableColumnCtx<T>> & {
    label?: string;
    prop: keyof T | '';
    checked?: boolean;
};

/**
 * 表格数据类型
 */
export interface DataType {
    [key: string]: number | string | undefined | boolean | null | Array<DataType>;
}

/**
 * 操作按钮
 */
export interface ActionButton extends Partial<ButtonProps> {
    label: string;
    permission?: string;
    onClick: () => void;
}

/**
 * 导出配置
 */
export interface ExportConfig {
    exportApi?: (patams?: any) => Promise<void>;
    extraParams?: any[];
}
