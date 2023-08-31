import type { FormProps } from 'element-plus';
import type { XFormItemSchema } from './interface';
/**
 * 表单校验
 */
declare function validate(): Promise<boolean>;
/**
 * 重置表单
 */
declare function resetFields(): void;
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    modelValue: {
        type: globalThis.PropType<any>;
        required: true;
        default: () => {};
    };
    schemas: {
        type: globalThis.PropType<XFormItemSchema[]>;
        required: true;
        default: () => never[];
    };
    elFormProps: {
        type: globalThis.PropType<Partial<FormProps>>;
        default: undefined;
    };
}, {
    validate: typeof validate;
    resetFields: typeof resetFields;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: any) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: globalThis.PropType<any>;
        required: true;
        default: () => {};
    };
    schemas: {
        type: globalThis.PropType<XFormItemSchema[]>;
        required: true;
        default: () => never[];
    };
    elFormProps: {
        type: globalThis.PropType<Partial<FormProps>>;
        default: undefined;
    };
}>> & {
    "onUpdate:modelValue"?: ((value: any) => any) | undefined;
}, {
    modelValue: any;
    schemas: XFormItemSchema[];
    elFormProps: Partial<FormProps>;
}, {}>, Partial<Record<string, (_: {
    form: any;
}) => any>> & {
    action?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
