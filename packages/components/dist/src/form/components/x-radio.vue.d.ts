import { type RadioGroupProps } from 'element-plus';
import type { RadioOption, RadioType } from '../interface';
/**
 * value type
 */
type ValueType = string | number | boolean | undefined;
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
    "update:modelValue": (value: ValueType) => void;
    change: (value: ValueType) => void;
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
    onChange?: ((value: ValueType) => any) | undefined;
    "onUpdate:modelValue"?: ((value: ValueType) => any) | undefined;
}, {
    type: RadioType;
    modelValue: string | number | boolean;
    options: RadioOption[];
    elProps: Partial<RadioGroupProps>;
}, {}>;
export default _default;
