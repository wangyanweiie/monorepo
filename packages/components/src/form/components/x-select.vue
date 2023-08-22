<template>
    <el-select
        v-bind="attrs"
        :model-value="value"
        @update:model-value="updateData"
        @change="handleChange"
    >
        <el-checkbox
            v-if="attrs.isAllChoose"
            v-model="checkAll"
            :indeterminate="isIndeterminate"
            :style="{
                marginLeft: 20 + 'px',
            }"
            @change="allChoose"
        >
            全选
        </el-checkbox>

        <el-option
            v-for="(item, i) in attrs.options"
            :key="i"
            :label="item.label"
            :value="item.value"
        >
        </el-option>
    </el-select>
</template>

<script setup lang="ts">
import { useAttrs } from 'vue';
import type { XSelectMultiProp } from '../interface';

const attrs = useAttrs() as XSelectMultiProp;

const emits = defineEmits<{
    (e: 'update:modelValue', value: any): void;
}>();

const value = ref<any>(attrs.modelValue);

const checkAll = ref<boolean>(false);

const isIndeterminate = ref<boolean>(false);

/**
 * 选中的数据
 */
const checkedOptions = ref<any[]>();

function updateData(val: any): void {
    emits('update:modelValue', val);
}
/**
 * 全选
 */
function allChoose(val: any) {
    checkedOptions.value = val ? attrs.options.map((item: any) => item.value) : [];
    isIndeterminate.value = false;
    emits('update:modelValue', checkedOptions.value);
}

/**
 * 是否全选
 */
function handleChange(val: string | any[]) {
    const checkedCount = val.length;
    checkAll.value = checkedCount === attrs.options.length;
    isIndeterminate.value = checkedCount > 0 && checkedCount < attrs.options.length;
}
</script>
