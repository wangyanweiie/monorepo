<template>
    <el-card class="x-search-form" :shadow="shadow">
        <el-form ref="formRef" :model="formData" v-bind="elFormProps">
            <el-row>
                <template v-for="(schema, index) in schemas" :key="index">
                    <el-collapse-transition>
                        <el-col v-if="isShow ? !formItemShow(index) : true" v-bind="mergeColProps(schema.colProps)">
                            <x-form-item
                                :model-value="formData"
                                :schema="schema"
                                @update:model-value="updateFormData"
                                @enter="handleEnter"
                            >
                                <template #[customSlotName(schema)]>
                                    <slot :name="customSlotName(schema)" :form="formData" :index="0"></slot>
                                </template>
                            </x-form-item>
                        </el-col>
                    </el-collapse-transition>
                </template>

                <el-col v-bind="colSpan">
                    <div class="x-search-form__actions">
                        <slot name="action" :form="formData" :form-ref="formRef"></slot>

                        <el-button type="primary" :loading="loading" @click="handleSearch">
                            {{ searchBtnText }}
                        </el-button>

                        <el-button v-if="showRestButton" @click="handleReset"> 重置 </el-button>

                        <el-button v-if="showCollapse" circle @click="handleChange">
                            <el-icon>
                                <component :is="collapsed ? ArrowDownBold : ArrowUpBold"></component>
                            </el-icon>
                        </el-button>
                    </div>
                </el-col>
            </el-row>
        </el-form>
    </el-card>
</template>

<script setup lang="ts">
import type { ColProps, FormProps } from 'element-plus';
import type { XFormInstance, XFormItemSchema } from '../form/interface';
import XFormItem from '../form/x-form-item.vue';
import { ArrowDownBold, ArrowUpBold } from '@element-plus/icons-vue';

/**
 * 表单form值
 */
export interface XFormValue {
    [key: string]: any;
}

/**
 * 扩展HTMLElement
 */
export interface FormElement extends HTMLElement {
    validate: () => Promise<boolean>;
    resetFields: () => void;
}

const props = withDefaults(
    defineProps<{
        modelValue?: any;
        loading?: boolean;
        schemas: XFormItemSchema[];
        elFormProps?: Partial<FormProps>;
        shadow?: 'hover' | 'never' | 'always';
        showRestButton?: boolean;
        searchBtnText?: string;
    }>(),
    {
        modelValue: undefined,
        loading: false,
        schemas: () => [],
        elFormProps: () => ({
            labelWidth: '120px',
        }),
        shadow: 'hover',
        showRestButton: true,
        searchBtnText: '查询',
    },
);

const emits = defineEmits<{
    (e: 'update:modelValue', value: any): void;
    (e: 'search', value: any): void;
    (e: 'reset', form: any): void;
}>();

// const formData = ref<Record<string, any>>(props.modelValue);
const { modelValue: formData } = toRefs(props);

function updateFormData() {
    emits('update:modelValue', formData.value);
}

/**
 * slot-name
 */
function customSlotName(schema: XFormItemSchema): string {
    return schema.components === 'custom' ? schema.slotName : '';
}

const formRef = ref<XFormInstance>();

/**
 * 计算 form 表单字段数量
 */

const countFormItems = computed(() => {
    const count = props.schemas.length;

    const showMore = count > 7 ? true : false;
    return {
        count: count > 7 && collapsed.value === true ? 7 : count > 7 && collapsed.value === false ? count : count,
        showMore,
    };
});
/**
 * 查询
 */
function handleSearch(): void {
    emits('search', formData.value);
}

/**
 * 重置
 */
function handleReset(): void {
    formData.value = undefined;

    props.schemas.forEach((schema: any) => {
        if (schema.elProps && schema.elProps.labelSchema) {
            formData.value[schema.elProps.labelSchema] = undefined;
        }
    });
    formRef.value?.resetFields();
    emits('reset', formData.value);
}

/**
 * 是否默认折叠搜索项
 */

const collapsed = ref(true);

/**
 * 是否收缩查询表单
 */
const isShow = ref(countFormItems.value.showMore);

/**
 * 展开 / 收起
 */

function formItemShow(itemIndex: number) {
    // 默认展示两行，7个搜索框
    let count = 0;
    // 第 7 个搜索框的位置
    let location = 7;

    props.schemas.forEach((item: XFormItemSchema, index: number) => {
        count = count + 1;

        if (count === 7) {
            location = index;
        }
    });

    //超过7的部分
    if (itemIndex > location) {
        return true;
    }
    //不超过7的部分
    return false;
}

/**
 *  判断是否显示 展开/合并 按钮
 */

const showCollapse = computed(() => {
    if (!countFormItems.value.showMore) {
        return false;
    } else {
        return true;
    }
});

const colSpan = computed(() => {
    return {
        xs: { span: 24 },
        sm: {
            span: 24 - ((countFormItems.value.count * 12) % 24),
        },
        md: {
            span: 24 - ((countFormItems.value.count * 8) % 24),
        },
        lg: { span: 24 - ((countFormItems.value.count * 6) % 24) },
        xl: { span: 24 - ((countFormItems.value.count * 6) % 24) },
    };
});

function handleChange() {
    collapsed.value = !collapsed.value;
    if (collapsed.value) {
        isShow.value = true;
    } else {
        isShow.value = false;
    }
}

function mergeColProps(colProps?: Partial<ColProps>): Partial<ColProps> {
    return {
        xs: 24,
        sm: colProps ? colProps : 12,
        md: colProps ? colProps : 8,
        lg: colProps ? colProps : 6,
        xl: colProps ? colProps : 6,
    };
}

/**
 * enter事件
 */
function handleEnter(): void {
    emits('search', formData.value);
}

defineExpose({
    validate: formRef.value?.validate ?? (() => Promise.resolve(false)),
    resetFields:
        formRef.value?.resetFields ??
        (() => {
            return;
        }),
});
</script>

<style lang="scss" scoped>
.x-search-form {
    margin-bottom: 15px;
}
.x-search-form :deep(.el-card__body) {
    padding-bottom: 0;
}

.x-search-form__actions {
    width: 100%;
    text-align: right;
    margin-bottom: 18px;
}
</style>
./interface./x-form-item.vue
