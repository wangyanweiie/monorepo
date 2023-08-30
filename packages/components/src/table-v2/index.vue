<template>
    <div class="table" :style="{ height: height, width: width }">
        <el-auto-resizer>
            <template #default="{ height: autoHeight, width: autoWidth }">
                <el-card :shadow="shadow" :body-style="bodyStyle">
                    <div class="table__wrap">
                        <!-- 顶部区域 -->
                        <div class="table__header">
                            <div v-if="title" class="table__header__title">
                                <slot name="title">
                                    <span>{{ title }}</span>
                                </slot>
                            </div>

                            <el-scrollbar>
                                <div class="table__header__operation">
                                    <slot name="operation" :checked-rows="selectedRows"> </slot>
                                    <!-- <table-setting v-model="tableColumns" @reload="loadData(searchData)" /> -->
                                </div>
                            </el-scrollbar>
                        </div>

                        <!-- 表格区域 -->
                        <div class="table__main">
                            <el-table-v2
                                ref="tableRef"
                                fixed
                                :row-key="rowKey"
                                :width="autoWidth"
                                :height="autoHeight"
                                :row-height="rowHeight"
                                :header-height="headerHeight"
                                :columns="tableColumns"
                                :data="tableData"
                                :header-class="typeof headerClass === 'function' && headerClass()"
                                :row-class="typeof rowClass === 'function' && rowClass()"
                                :onmouseover="handleMouseOver"
                                :onmouseleave="handleMouseLeave"
                            >
                                <!-- loading -->
                                <template v-if="loading" #overlay>
                                    <div class="el-loading-mask loading">
                                        <el-icon class="is-loading" color="var(--el-color-primary)" :size="26">
                                            <loading-icon />
                                        </el-icon>
                                    </div>
                                </template>

                                <!-- empty -->
                                <template v-if="!tableData.length" #empty>
                                    <div class="flex items-center justify-center h-100%">
                                        <el-empty :description="emptyText" />
                                    </div>
                                </template>
                            </el-table-v2>
                        </div>

                        <!-- 底部区域 -->
                        <div v-if="tableData.length" class="table__bottom">
                            <div v-if="pagination.pageSize !== -1" class="pagination">
                                <el-pagination
                                    v-model:current-page="pagination.currentPage"
                                    v-model:page-size="pagination.pageSize"
                                    :page-sizes="[10, 20, 50, 100]"
                                    :total="pagination.total"
                                    :background="true"
                                    layout=" ->, slot,total, sizes, prev, pager, next, jumper"
                                    @current-change="handleCurrentChange"
                                    @size-change="handleSizeChange"
                                >
                                    <template #default> 已选中 {{ selectedCount }} 条数据 </template>
                                </el-pagination>
                            </div>

                            <div v-else class="total">共 {{ tableData.length }} 条</div>
                        </div>
                    </div>
                </el-card>
            </template>
        </el-auto-resizer>
    </div>
</template>

<script lang="ts" setup>
import type { Column } from 'element-plus';
import { Loading as LoadingIcon } from '@element-plus/icons-vue';
import type { APIKeyMap } from './interface';
import useIndex from './useIndex';
// import TableSetting from './components/table-setting.vue';

/**
 * 定义组件选项
 */
defineOptions({
    name: 'XTable',
});

/**
 * props
 */
const props = withDefaults(
    defineProps<{
        /** 容器宽度 */
        width?: string;
        /** 容器高度 */
        height?: string;
        /** card-shadow */
        shadow?: 'always' | 'never' | 'hover';
        /** card-body-style */
        bodyStyle?: Record<string, string>;
        /** 表格标题 */
        title?: string;
        /** 是否展示索引 */
        showIndex?: boolean;
        /** 是否可选 */
        selectable?: boolean;
        /** 每行的 key 值 */
        rowKey?: string;
        /** 表格行高度 */
        rowHeight?: number;
        /** 表头行高度 */
        headerHeight?: number;
        /** loading */
        loading?: boolean;
        /** 无数据提示 */
        emptyText?: string;
        /** 请求接口 */
        api?: any;
        /** 请求接口参数 */
        apiParams?: Record<string, string | number>;
        /** 接口字段映射 */
        apiKeyMap?: APIKeyMap;
        /** 表格列配置 */
        columns: Column<any>[];
        /** 表格数据 */
        data?: Record<string, any>[];
        /** 是否为分页格式 */
        dividePage?: boolean;
        /** 分页设置 */
        paginationProp?: Record<string, number>;
        /** 表头行样式 */
        headerClass?: any;
        /** 表格行样式 */
        rowClass?: any;
        /** 滚动 */
        scroll?: boolean;
    }>(),
    {
        width: '100%',
        height: '500px',
        shadow: 'hover',
        bodyStyle: () => {
            return {
                padding: '15px',
            };
        },
        title: '数据列表',
        showIndex: false,
        selectable: false,
        rowKey: 'id',
        rowHeight: 45,
        headerHeight: 45,
        loading: false,
        emptyText: '暂无数据',
        api: undefined,
        apiParams: () => ({}),
        apiKeyMap: () => ({
            queryCurrentPageKey: 'page',
            queryPageSizeKey: 'limit',
            returnCurrentPageKey: 'current',
            returnTotalKey: 'total',
            returnPagesKey: 'pages',
            returnRecordKey: 'records',
        }),
        columns: () => [],
        data: () => [],
        dividePage: true,
        paginationProp: () => ({
            pageSize: 10,
        }),
        headerClass: null,
        rowClass: null,
        scroll: false,
    },
);

/**
 * useIndex
 */
const {
    tableRef,
    selectedRows,
    selectedCount,
    tableColumns,
    tableData,
    pagination,
    handleMouseOver,
    handleMouseLeave,
    searchData,
    loadData,
    handleCurrentChange,
    handleSizeChange,
} = useIndex(props);

/**
 * 暴露的属性与方法
 */
defineExpose({
    selectedRows,
    loadData,
});
</script>

<style lang="scss" scoped>
.table {
    width: 100%;

    &__wrap {
        position: relative;
    }

    &__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        padding: 0 10px 10px 10px;

        &__title {
            justify-content: left;

            span {
                font-size: 18px;
                font-weight: bold;
            }
        }

        &__operation {
            display: flex;
            align-items: center;
        }
    }

    &__bottom {
        .pagination {
            padding-top: 10px;
        }

        .total {
            padding-top: 10px;
            display: flex;
            justify-content: flex-end;
            text-align: right;
            font-size: 14px;
        }
    }
}

:deep(.example-showcase) :deep(.el-table-v2__overlay) {
    z-index: 9;
}

.loading {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
