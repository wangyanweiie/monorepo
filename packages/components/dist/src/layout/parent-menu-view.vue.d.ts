import { type RouteRecordRaw } from 'vue-router';
declare const _default: import("vue").DefineComponent<{
    matchedIndex: {
        type: globalThis.PropType<number>;
        default: number;
    };
    menus: {
        type: globalThis.PropType<RouteRecordRaw[]>;
        required: true;
        default: () => never[];
    };
    cacheList: {
        type: globalThis.PropType<string[]>;
        default: undefined;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    matchedIndex: {
        type: globalThis.PropType<number>;
        default: number;
    };
    menus: {
        type: globalThis.PropType<RouteRecordRaw[]>;
        required: true;
        default: () => never[];
    };
    cacheList: {
        type: globalThis.PropType<string[]>;
        default: undefined;
    };
}>>, {
    matchedIndex: number;
    menus: RouteRecordRaw[];
    cacheList: string[];
}, {}>;
export default _default;
