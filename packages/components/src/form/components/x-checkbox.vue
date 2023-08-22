<template>
    <div>
        <el-checkbox
            v-model="isAllChoose"
            :indeterminate="isIndeterminate"
            @change="handleCheckAllChange"
            >全选</el-checkbox
        >
        <el-checkbox-group
            :model-value="checkedOptions"
            v-bind="elProps"
            @update:model-value="updateData"
            @change="handleChange"
        >
            <component
                :is="isComponent"
                v-for="(option, index) in options"
                :key="index"
                v-bind="option"
            >
                {{ option.labelName }}
            </component>
        </el-checkbox-group>
    </div>
</template>

<script setup lang="ts">
import {
    ElCheckbox,
    ElCheckboxButton,
    type CheckboxGroupProps,
    type CheckboxGroupValueType,
    type CheckboxValueType,
} from 'element-plus';
import type { Component } from 'vue';
import type { CheckBoxOption, CheckboxType } from '../interface';

const props = withDefaults(
    defineProps<{
        modelValue?: CheckboxGroupValueType;
        options?: CheckBoxOption[];
        elProps?: Partial<CheckboxGroupProps>;
        type?: CheckboxType;
        allChoose?: boolean;
    }>(),
    {
        modelValue: undefined,
        options: () => [],
        elProps: undefined,
        type: 'box',
        allChoose: false,
    }
);
const isComponent = computed<Component>(() => {
    return props.type === 'box' ? markRaw(ElCheckbox) : markRaw(ElCheckboxButton);
});

const emits = defineEmits<{
    (e: 'update:modelValue', value: CheckboxGroupValueType): void;
    (e: 'change', value: CheckboxGroupValueType): void;
}>();

function updateData(val: CheckboxGroupValueType): void {
    emits('update:modelValue', val);
}

const isAllChoose = ref(props.allChoose ? true : false);

const checkedAll = props.options.map((item) => item.label);

function handleChange(val: CheckboxValueType[]): void {
    checkedOptions.value = val;
    const checkedCount = val.length;
    isAllChoose.value = checkedCount === props.options.length;

    isIndeterminate.value = checkedCount > 0 && checkedCount < props.options.length;

    emits('change', checkedOptions.value as CheckboxGroupValueType);
}

const isIndeterminate = ref(false);

const checkedOptions = ref<any>();

const handleCheckAllChange = (val: CheckboxValueType) => {
    checkedOptions.value = val ? checkedAll : [];

    isIndeterminate.value = false;
};
</script>
