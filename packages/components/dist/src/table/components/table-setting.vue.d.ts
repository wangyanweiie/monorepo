import type { XTableColumn } from '../interface';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: globalThis.PropType<any>;
        required: true;
        default: () => never[];
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: XTableColumn[]) => void;
    reload: () => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: globalThis.PropType<any>;
        required: true;
        default: () => never[];
    };
}>> & {
    "onUpdate:modelValue"?: ((value: XTableColumn[]) => any) | undefined;
    onReload?: (() => any) | undefined;
}, {
    modelValue: any;
}, {}>;
export default _default;
