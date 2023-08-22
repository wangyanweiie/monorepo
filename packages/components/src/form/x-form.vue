<template>
    <el-form ref="formRef" :model="modelValue" v-bind="elFormProps">
        <el-row>
            <el-col
                v-for="(schema, index) in schemas"
                :key="index"
                :span="12"
                v-bind="schema.colProps"
            >
                <x-form-item
                    :model-value="modelValue"
                    :schema="schema"
                    @update:model-value="updateData"
                >
                    <template #[customSlotName(schema)]>
                        <slot :name="customSlotName(schema)" :form="modelValue"></slot>
                    </template>
                </x-form-item>
            </el-col>
            <slot name="action"></slot>
        </el-row>
    </el-form>
</template>

<script setup lang="ts">
import type { FormInstance, FormProps } from 'element-plus';
import type { XFormItemSchema } from './interface';
import XFormItem from './x-form-item.vue';

withDefaults(
    defineProps<{
        modelValue: any;
        schemas: XFormItemSchema[];
        elFormProps?: Partial<FormProps>;
    }>(),
    {
        modelValue: () => ({}),
        schemas: () => [],
        elFormProps: undefined,
    }
);

const emits = defineEmits<{
    (e: 'update:modelValue', value: any): void;
}>();

const formRef = ref<FormInstance>();

/**
 * slot-name
 */
function customSlotName(schema: XFormItemSchema): string {
    return schema.components === 'custom' ? schema.slotName : '';
}

/**
 * 更新数据
 */
function updateData(value: any): void {
    emits('update:modelValue', value);
}

function resetFields(props: string[]) {
    formRef.value?.resetFields(props);
}

async function validate(): Promise<boolean> {
    return new Promise((resolve) => {
        formRef.value
            ?.validate()
            .then(() => {
                resolve(true);
            })
            .catch(() => {
                resolve(false);
            });
    });
}

/**
 * 暴露方法
 */
defineExpose({
    validate,
    resetFields,
});
</script>
