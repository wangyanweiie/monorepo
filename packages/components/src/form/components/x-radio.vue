<template>
    <el-radio-group :model-value="modelValue" v-bind="elProps" @change="handleChange" @update:model-value="updateData">
        <component :is="isComponent" v-for="(option, index) in options" :key="index" v-bind="option">
            {{ option.labelName }}
        </component>
    </el-radio-group>
</template>

<script setup lang="ts">
import { ElRadio, ElRadioButton, type RadioGroupProps } from 'element-plus';
import type { RadioOption, RadioType } from '../interface';

/**
 * value type
 */
type ValueType = string | number | boolean | undefined;

/**
 * props
 */
const props = withDefaults(
    defineProps<{
        modelValue?: string | number | boolean;
        options?: RadioOption[];
        type?: RadioType;
        elProps?: Partial<RadioGroupProps>;
    }>(),
    {
        modelValue: undefined,
        options: () => [],
        type: 'cycle',
        elProps: undefined,
    },
);

/**
 * emits
 */
const emits = defineEmits<{
    (e: 'update:modelValue', value: ValueType): void;
    (e: 'change', value: ValueType): void;
}>();

/**
 * 动态组件
 */
const isComponent = computed<Component>(() => {
    return props.type === 'button' ? markRaw(ElRadioButton) : markRaw(ElRadio);
});

/**
 * 改变选中值
 */
function handleChange(value: ValueType): void {
    emits('change', value);
}

/**
 * 更新选中的数据
 */
function updateData(value: ValueType): void {
    emits('update:modelValue', value);
}
</script>
