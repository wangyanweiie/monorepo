import type { XFormItemSchema } from './interface';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    modelValue: {
        type: globalThis.PropType<any>;
        required: true;
        default: undefined;
    };
    schema: {
        type: globalThis.PropType<XFormItemSchema>;
        required: true;
        default: () => {
            components: string;
            prop: string;
            label: string;
        };
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: unknown) => void;
    enter: () => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: globalThis.PropType<any>;
        required: true;
        default: undefined;
    };
    schema: {
        type: globalThis.PropType<XFormItemSchema>;
        required: true;
        default: () => {
            components: string;
            prop: string;
            label: string;
        };
    };
}>> & {
    "onUpdate:modelValue"?: ((value: unknown) => any) | undefined;
    onEnter?: (() => any) | undefined;
}, {
    modelValue: any;
    schema: XFormItemSchema;
}, {}>, Partial<Record<string, (_: {}) => any>>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
