import type { FormProps } from 'element-plus';
import type { XFormInstance, XFormItemSchema } from '../form/interface';
/**
 * 扩展 HTMLElement
 */
export interface FormElement extends HTMLElement {
    validate: () => Promise<boolean>;
    resetFields: () => void;
}
/**
 * 表单校验
 */
declare function validate(): Promise<boolean>;
/**
 * 重置表单
 */
declare function resetFields(): void;
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    header: {
        type: globalThis.PropType<string>;
        required: true;
        default: string;
    };
    modelValue: {
        type: globalThis.PropType<any>;
        default: undefined;
    };
    shadow: {
        type: globalThis.PropType<"hover" | "always" | "never">;
        default: string;
    };
    loading: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    schemas: {
        type: globalThis.PropType<XFormItemSchema[]>;
        required: true;
        default: () => never[];
    };
    elFormProps: {
        type: globalThis.PropType<Partial<FormProps>>;
        default: () => {
            labelWidth: string;
        };
    };
    searchBtnText: {
        type: globalThis.PropType<string>;
        default: string;
    };
    showRestButton: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
}, {
    validate: typeof validate;
    resetFields: typeof resetFields;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: any) => void;
    search: (value: any) => void;
    reset: (form: any) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    header: {
        type: globalThis.PropType<string>;
        required: true;
        default: string;
    };
    modelValue: {
        type: globalThis.PropType<any>;
        default: undefined;
    };
    shadow: {
        type: globalThis.PropType<"hover" | "always" | "never">;
        default: string;
    };
    loading: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    schemas: {
        type: globalThis.PropType<XFormItemSchema[]>;
        required: true;
        default: () => never[];
    };
    elFormProps: {
        type: globalThis.PropType<Partial<FormProps>>;
        default: () => {
            labelWidth: string;
        };
    };
    searchBtnText: {
        type: globalThis.PropType<string>;
        default: string;
    };
    showRestButton: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
}>> & {
    onReset?: ((form: any) => any) | undefined;
    "onUpdate:modelValue"?: ((value: any) => any) | undefined;
    onSearch?: ((value: any) => any) | undefined;
}, {
    header: string;
    modelValue: any;
    shadow: "hover" | "always" | "never";
    loading: boolean;
    schemas: XFormItemSchema[];
    elFormProps: Partial<FormProps>;
    searchBtnText: string;
    showRestButton: boolean;
}, {}>, Partial<Record<string, (_: {
    form: any;
    index: number;
}) => any>> & {
    action?(_: {
        form: any;
        formRef: XFormInstance | undefined;
    }): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
