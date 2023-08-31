import { type RouteRecordRaw } from 'vue-router';
interface MenuStyle {
    backgroundColor: string;
    textColor: string;
    activeTextColor: string;
}
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    title: {
        type: globalThis.PropType<string>;
        default: string;
    };
    max: {
        type: globalThis.PropType<number>;
        default: undefined;
    };
    menuInfo: {
        type: globalThis.PropType<Map<string, number>>;
        default: undefined;
    };
    routes: {
        type: globalThis.PropType<RouteRecordRaw[]>;
        default: () => never[];
    };
    includeList: {
        type: globalThis.PropType<string[]>;
        default: undefined;
    };
    menuStyle: {
        type: globalThis.PropType<MenuStyle>;
        default: () => {
            backgroundColor: string;
            textColor: string;
            activeTextColor: string;
        };
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    title: {
        type: globalThis.PropType<string>;
        default: string;
    };
    max: {
        type: globalThis.PropType<number>;
        default: undefined;
    };
    menuInfo: {
        type: globalThis.PropType<Map<string, number>>;
        default: undefined;
    };
    routes: {
        type: globalThis.PropType<RouteRecordRaw[]>;
        default: () => never[];
    };
    includeList: {
        type: globalThis.PropType<string[]>;
        default: undefined;
    };
    menuStyle: {
        type: globalThis.PropType<MenuStyle>;
        default: () => {
            backgroundColor: string;
            textColor: string;
            activeTextColor: string;
        };
    };
}>>, {
    title: string;
    max: number;
    menuInfo: Map<string, number>;
    routes: RouteRecordRaw[];
    includeList: string[];
    menuStyle: MenuStyle;
}, {}>, {
    logo?(_: {
        collapsed: boolean;
    }): any;
    "header-right"?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
