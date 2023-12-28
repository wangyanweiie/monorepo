import type { XDescriptionColumn } from './interface';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    title: {
        type: globalThis.PropType<string>;
        required: true;
        default: string;
    };
    border: {
        type: globalThis.PropType<boolean>;
        required: true;
        default: boolean;
    };
    column: {
        type: globalThis.PropType<number>;
        required: true;
        default: number;
    };
    size: {
        type: globalThis.PropType<"default" | "small" | "large">;
        required: true;
        default: string;
    };
    extra: {
        type: globalThis.PropType<string>;
        required: true;
        default: string;
    };
    direction: {
        type: globalThis.PropType<"horizontal" | "vertical">;
        required: true;
        default: string;
    };
    columns: {
        type: globalThis.PropType<XDescriptionColumn[]>;
        required: true;
        default: () => never[];
    };
    data: {
        type: globalThis.PropType<Record<string, any>>;
        required: true;
        default: () => {};
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    title: {
        type: globalThis.PropType<string>;
        required: true;
        default: string;
    };
    border: {
        type: globalThis.PropType<boolean>;
        required: true;
        default: boolean;
    };
    column: {
        type: globalThis.PropType<number>;
        required: true;
        default: number;
    };
    size: {
        type: globalThis.PropType<"default" | "small" | "large">;
        required: true;
        default: string;
    };
    extra: {
        type: globalThis.PropType<string>;
        required: true;
        default: string;
    };
    direction: {
        type: globalThis.PropType<"horizontal" | "vertical">;
        required: true;
        default: string;
    };
    columns: {
        type: globalThis.PropType<XDescriptionColumn[]>;
        required: true;
        default: () => never[];
    };
    data: {
        type: globalThis.PropType<Record<string, any>>;
        required: true;
        default: () => {};
    };
}>>, {
    title: string;
    border: boolean;
    column: number;
    size: "default" | "small" | "large";
    extra: string;
    direction: "horizontal" | "vertical";
    columns: XDescriptionColumn[];
    data: Record<string, any>;
}, {}>, Partial<Record<string, (_: {
    data: Record<string, any>;
    column: XDescriptionColumn;
    cellValue: any;
}) => any>>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
