<template>
    <div>
        <el-checkbox v-model="isAllChoose" :indeterminate="isIndeterminate" @change="handleCheckAllChange">
            全选
        </el-checkbox>

        <el-checkbox-group
            :model-value="checkedOptions"
            v-bind="elProps"
            @update:model-value="updateData"
            @change="handleChange"
        >
            <component :is="isComponent" v-for="(option, index) in options" :key="index" v-bind="option">
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

/**
 * props
 */
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
    },
);

/**
 * emits
 */
const emits = defineEmits<{
    (e: 'update:modelValue', value: CheckboxGroupValueType): void;
    (e: 'change', value: CheckboxGroupValueType): void;
}>();

/**
 * 动态组件
 */
const isComponent = computed<Component>(() => {
    return props.type === 'box' ? markRaw(ElCheckbox) : markRaw(ElCheckboxButton);
});

/**
 * 是否全选
 */
const isAllChoose = ref(props.allChoose ? true : false);

/**
 * 半选状态
 */
const isIndeterminate = ref(false);

/**
 * 选中的值
 */
const checkedOptions = ref<any>();
const checkedAll = props.options.map(item => item.label);

/**
 *
 * @param val 改变选中值
 */
function handleChange(val: CheckboxValueType[]): void {
    checkedOptions.value = val;
    isAllChoose.value = val.length === props.options.length;
    isIndeterminate.value = val.length > 0 && val.length < props.options.length;
    emits('change', checkedOptions.value as CheckboxGroupValueType);
}

/**
 * 全选
 */
function handleCheckAllChange(val: CheckboxValueType): void {
    checkedOptions.value = val ? checkedAll : [];
    isIndeterminate.value = false;
}

/**
 * 更新选中数据
 */
function updateData(val: CheckboxGroupValueType): void {
    emits('update:modelValue', val);
}
</script>
