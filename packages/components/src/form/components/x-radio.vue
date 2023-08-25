<template>
    <el-radio-group :model-value="modelValue" v-bind="elProps" @update:model-value="updateData" @change="handleChange">
        <component :is="isComponent" v-for="(option, index) in options" :key="index" v-bind="option">
            {{ option.labelName }}
        </component>
    </el-radio-group>
</template>

<script setup lang="ts">
import { ElRadio, ElRadioButton, type RadioGroupProps } from 'element-plus';
import type { RadioOption, RadioType } from '../interface';

type ValueType = string | number | boolean | undefined;

const props = withDefaults(
    defineProps<{
        modelValue?: string | number | boolean;
        options?: RadioOption[];
        elProps?: Partial<RadioGroupProps>;
        type?: RadioType;
    }>(),
    {
        modelValue: undefined,
        options: () => [],
        elProps: undefined,
        type: 'cycle',
    },
);

const emits = defineEmits<{
    (e: 'update:modelValue', value: ValueType): void;
    (e: 'change', value: ValueType): void;
}>();

const isComponent = computed<Component>(() => {
    return props.type === 'cycle' ? markRaw(ElRadio) : markRaw(ElRadioButton);
});

function handleChange(value: ValueType): void {
    emits('change', value);
}

function updateData(value: ValueType): void {
    emits('update:modelValue', value);
}
</script>
