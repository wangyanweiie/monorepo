<template>
    <el-dialog
        v-model="visible"
        :title="title"
        :width="width"
        append-to-body
        destroy-on-close
        @opened="handleDialogOpen"
        @close="handleClose"
    >
        <template #header>
            <slot name="title"></slot>
        </template>

        <!-- <x-form
            ref="formRef"
            :model-value="formData"
            :el-form-props="elFormProps"
            :schemas="schemas"
            @update:model-value="updateData"
        >
        </x-form> -->

        <el-form ref="formRef" :model="formData" v-bind="elFormProps">
            <el-row>
                <el-col
                    v-for="(schema, index) in schemas"
                    :key="index"
                    :span="12"
                    v-bind="schema.colProps"
                >
                    <x-form-item
                        :model-value="formData"
                        :schema="schema"
                        @update:model-value="updateData"
                    >
                        <template #[customSlotName(schema)]>
                            <slot :name="customSlotName(schema)" :form="formData"></slot>
                        </template>
                    </x-form-item>
                </el-col>
            </el-row>
        </el-form>

        <template #footer>
            <slot name="action" :form="formData" :form-ref="formRef"></slot>

            <el-button v-if="isShowConfirm" type="primary" :loading="loading" @click="handleSubmit">
                确认
            </el-button>

            <el-button @click="handleCancel"> 取消 </el-button>
        </template>
    </el-dialog>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import type { XFormInstance, XFormItemSchema } from './interface';
import type { FormProps } from 'element-plus';
import XFormItem from './x-form-item.vue';

const props = withDefaults(
    defineProps<{
        modelValue: boolean;
        data?: any;
        /**
         * 标题
         */
        title?: string;
        width?: number | string;
        elFormProps?: Partial<FormProps>;
        loading?: boolean;
        /**
         * form
         */
        schemas?: XFormItemSchema[];

        isShowConfirm?: boolean;
    }>(),
    {
        data: () => ({}),
        title: '新增',
        width: undefined,
        elFormProps: () => ({ labelWidth: '120px' }),
        loading: false,
        schemas: () => [],
        isShowConfirm: true,
    }
);

const emits = defineEmits<{
    /**
     * 双向绑定
     */
    (e: 'update:modelValue', value: boolean): void;
    /**
     * 双向绑定
     */
    (e: 'update:data', value: any): void;
    /**
     * 对话框打开回调
     */
    (e: 'open', form: any): void;
    /**
     * 关闭回调
     */
    (e: 'close'): void;
    /**
     * 对话框保存回调
     */
    (e: 'submit', form: any): void;
}>();

/**
 * slot-name
 */
function customSlotName(schema: XFormItemSchema): string {
    return schema.components === 'custom' ? schema.slotName : '';
}

const formData = computed<any>({
    get: () => props.data,
    set: (value) => emits('update:data', value),
});

function updateData(): void {
    emits('update:data', formData.value);
}

/**
 * 处理对话框打开
 */
function handleDialogOpen() {
    emits('open', formData.value);
}

const visible = computed({
    get: () => props.modelValue,
    set: (newValue) => {
        emits('update:modelValue', newValue);
    },
});

/**
 * 处理对话框关闭
 */
function handleClose() {
    formRef.value?.resetFields();
    formData.value = {};
    emits('close');
}

function handleSubmit() {
    emits('submit', formData.value);
}

/**
 * 更新数据
 */
const formRef = ref<XFormInstance>();

/**
 * 取消弹窗
 */
function handleCancel() {
    formRef.value?.resetFields();

    visible.value = false;
}

async function validate(): Promise<boolean> {
    const valid = await formRef.value?.validate();

    if (!valid) {
        return false;
    }

    return true;
}
/**
 * 暴露方法
 */
defineExpose({
    validate,
    resetFields:
        formRef.value?.resetFields ??
        (() => {
            return;
        }),
});
</script>
