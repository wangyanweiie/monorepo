import { type FormProps } from 'element-plus';
import type { XFormInstance, XFormItemSchema } from './interface';
/**
 * 表单校验
 */
declare function validate(): Promise<boolean>;
/**
 * 重置表单
 */
declare function resetFields(): void;
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    title: {
        type: globalThis.PropType<string>;
        default: string;
    };
    size: {
        type: globalThis.PropType<string | number>;
        default: string;
    };
    data: {
        type: globalThis.PropType<any>;
        default: () => {};
    };
    width: {
        type: globalThis.PropType<string | number>;
        default: string;
    };
    modelValue: {
        type: globalThis.PropType<boolean>;
        required: true;
        default: boolean;
    };
    loading: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    elType: {
        type: globalThis.PropType<"el-dialog" | "el-drawer">;
        default: string;
    };
    schemas: {
        type: globalThis.PropType<XFormItemSchema[]>;
        default: () => never[];
    };
    elFormProps: {
        type: globalThis.PropType<Partial<FormProps>>;
        default: () => {
            labelWidth: string;
        };
    };
    isShowConfirm: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
}, {
    validate: typeof validate;
    resetFields: typeof resetFields;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: boolean) => void;
    "update:data": (value: any) => void;
    open: (form: any) => void;
    close: () => void;
    submit: (form: any) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    title: {
        type: globalThis.PropType<string>;
        default: string;
    };
    size: {
        type: globalThis.PropType<string | number>;
        default: string;
    };
    data: {
        type: globalThis.PropType<any>;
        default: () => {};
    };
    width: {
        type: globalThis.PropType<string | number>;
        default: string;
    };
    modelValue: {
        type: globalThis.PropType<boolean>;
        required: true;
        default: boolean;
    };
    loading: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    elType: {
        type: globalThis.PropType<"el-dialog" | "el-drawer">;
        default: string;
    };
    schemas: {
        type: globalThis.PropType<XFormItemSchema[]>;
        default: () => never[];
    };
    elFormProps: {
        type: globalThis.PropType<Partial<FormProps>>;
        default: () => {
            labelWidth: string;
        };
    };
    isShowConfirm: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
}>> & {
    onSubmit?: ((form: any) => any) | undefined;
    onOpen?: ((form: any) => any) | undefined;
    onClose?: (() => any) | undefined;
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    "onUpdate:data"?: ((value: any) => any) | undefined;
}, {
    title: string;
    size: string | number;
    data: any;
    width: string | number;
    modelValue: boolean;
    loading: boolean;
    elType: "el-dialog" | "el-drawer";
    schemas: XFormItemSchema[];
    elFormProps: Partial<FormProps>;
    isShowConfirm: boolean;
}, {}>, Partial<Record<string, (_: {
    form: any;
}) => any>> & {
    title?(_: {}): any;
    "form-append"?(_: {}): any;
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
