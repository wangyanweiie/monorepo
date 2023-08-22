<template>
    <el-form-item :label="schema.label" :prop="schema.prop as string" v-bind="itemProps">
        <slot v-if="schema.components === 'custom'" :name="schema.slotName"></slot>

        <component
            :is="isComponent"
            class="form-item-element"
            :model-value="currentValue"
            v-bind="componentProps"
            @update:model-value="updateData"
            @keydown.enter="handleEnter"
        ></component>
    </el-form-item>
</template>

<script setup lang="ts">
import type { XFormItemSchema } from './interface';
import { get, isNumber, isString, set } from 'lodash-es';
import { mergeProps, markRaw } from 'vue';
import {
    ElCheckbox,
    ElSwitch,
    ElCascader,
    ElDatePicker,
    ElInput,
    ElInputNumber,
    ElSelectV2,
    ElButton,
    ElRadio,
    ElDivider,
} from 'element-plus';
import XRadio from './components/x-radio.vue';
import XSelect from './components/x-select.vue';

interface LabelValue {
    label: string;
    value: string | number;
}

const maps = {
    'el-input': markRaw(ElInput),
    'el-input-number': markRaw(ElInputNumber),
    'el-select-v2': markRaw(ElSelectV2),
    'el-checkbox': markRaw(ElCheckbox),
    'el-radio': markRaw(ElRadio),
    'el-switch': markRaw(ElSwitch),
    'el-cascader': markRaw(ElCascader),
    'el-date-picker': markRaw(ElDatePicker),
    'el-button': markRaw(ElButton),
    'el-divider': markRaw(ElDivider),
    'x-radio': markRaw(XRadio),
    'x-select': markRaw(XSelect),
};

// props
const props = withDefaults(
    defineProps<{
        schema: XFormItemSchema;
        modelValue: any;
    }>(),
    {
        schema: () => ({
            components: 'el-input',
            prop: '',
            label: '',
        }),
        modelValue: undefined,
    }
);

// emits
const emits = defineEmits<{
    (e: 'update:modelValue', value: unknown): void;
    (e: 'enter'): void;
}>();

const { modelValue: schemaValue } = toRefs(props);

/**
 * schema.prop
 */
const { schema } = toRefs(props);

const currentValue = ref<unknown>(get(schemaValue, schema.value.prop, undefined));

/**
 * 更新数据
 */
function updateData(value: string | number | null | undefined): void {
    let selectedValue = value;
    if (isString(currentValue.value)) {
        selectedValue = selectedValue || '';
    } else if (isNumber(currentValue.value)) {
        if (selectedValue === undefined || selectedValue === null) {
            selectedValue = null;
        }
    }

    if (props.schema.components === 'el-select-v2' || props.schema.components === 'x-select') {
        if (componentProps.value.labelSchema) {
            getLabelSchemaValue(selectedValue);
        }
    }

    currentValue.value = selectedValue;
    emits('update:modelValue', set(schemaValue.value, schema.value.prop, selectedValue));
}

// 监听外部数据变化
watchEffect(() => {
    currentValue.value = get(schemaValue.value, schema.value.prop, undefined);
});

/**
 * is component
 */
const isComponent = computed<any>(() => {
    return get(maps, props.schema.components, undefined);
});

/**
 * extra props
 * 用于解决computed属性不触发更新的问题
 */
const extraProps = ref({
    options: [],
});

/**
 * 获取资源
 */
async function getResource(): Promise<boolean> {
    if (
        props.schema.components !== 'el-select-v2' &&
        props.schema.components !== 'el-cascader' &&
        props.schema.components !== 'x-select'
    ) {
        return false;
    }

    if (!props.schema.api) {
        return false;
    }

    const res = await props.schema.api(props.modelValue);
    extraProps.value = {
        options: res,
    };

    // label选id
    const label = props.modelValue[props.schema.elProps?.labelSchema];

    // 无label
    if (!label) {
        return true;
    }

    const item = componentProps.value.options.find((item: any) => item.label === label);

    // label存在于列表中
    if (item) {
        updateData(item.value);
    }

    return true;
}

/**
 * component props
 */
const componentProps = computed<any>(() => {
    const { schema } = props;

    // 排除custom
    if (schema.components === 'custom') {
        return undefined;
    }

    // 默认props
    const defaultProps: any = {
        placeholder: schema.label,
        clearable: true,
        // maxlength: 100,
    };

    // select || cascader
    if (
        schema.components === 'el-select-v2' ||
        schema.components === 'el-cascader' ||
        schema.components === 'x-select'
    ) {
        Object.assign(defaultProps, {
            /**
             * el-select-v2 visible-change
             */
            onVisibleChange: async (val: boolean): Promise<void> => {
                // 关闭不调用
                if (!val) {
                    return;
                }

                await getResource();
            },
            filterable: true,
            options: [],
        });
    }

    // merge props
    if (typeof schema.elProps === 'function') {
        const sec = schema.elProps(props.modelValue);
        return mergeProps(defaultProps, extraProps.value, sec);
    } else {
        return mergeProps(defaultProps, extraProps.value, schema.elProps);
    }
});

const itemProps = computed(() => {
    return typeof props.schema.elFormItemProps === 'function'
        ? props.schema.elFormItemProps(props.modelValue)
        : props.schema.elFormItemProps;
});

/**
 * 获取下拉的label
 */
function getLabelSchemaValue(value: any | any[]) {
    if (componentProps.value.multiple) {
        const selectedLabels = value
            .map((id: any) =>
                componentProps.value.options.find((item: LabelValue) => item.value === id)
            )
            .map((item: LabelValue) => item.label);

        emits(
            'update:modelValue',
            set(schemaValue.value, componentProps.value.labelSchema, selectedLabels.toString())
        );
    } else {
        const selected = componentProps.value.options.find(
            (item: LabelValue) => item.value === value
        );
        emits(
            'update:modelValue',
            set(schemaValue.value, componentProps.value.labelSchema, selected?.label || '')
        );
    }
}

/**
 * 查询
 */
function handleEnter(): void {
    emits('enter');
}

onMounted(() => {
    getResource();
});
</script>

<style lang="scss">
.form-item-element {
    width: 100%;
}
</style>
