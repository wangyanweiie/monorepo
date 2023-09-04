import { type RadioGroupProps } from 'element-plus';
import type { RadioType, RadioValueType, RadioOption } from '../interface';
declare const _default: import("vue").DefineComponent<{
    type: {
        type: globalThis.PropType<RadioType>;
        default: string;
    };
    modelValue: {
        type: globalThis.PropType<string | number | boolean>;
        default: undefined;
    };
    options: {
        type: globalThis.PropType<RadioOption[]>;
        default: () => never[];
    };
    elProps: {
        type: globalThis.PropType<Partial<RadioGroupProps>>;
        default: undefined;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: RadioValueType) => void;
    change: (value: RadioValueType) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: globalThis.PropType<RadioType>;
        default: string;
    };
    modelValue: {
        type: globalThis.PropType<string | number | boolean>;
        default: undefined;
    };
    options: {
        type: globalThis.PropType<RadioOption[]>;
        default: () => never[];
    };
    elProps: {
        type: globalThis.PropType<Partial<RadioGroupProps>>;
        default: undefined;
    };
}>> & {
    onChange?: ((value: RadioValueType) => any) | undefined;
    "onUpdate:modelValue"?: ((value: RadioValueType) => any) | undefined;
}, {
    type: RadioType;
    modelValue: string | number | boolean;
    options: RadioOption[];
    elProps: Partial<RadioGroupProps>;
}, {}>;
export default _default;
