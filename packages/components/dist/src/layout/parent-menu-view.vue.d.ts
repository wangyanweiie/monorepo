import { type RouteRecordRaw } from 'vue-router';
declare const _default: import("vue").DefineComponent<{
    menus: {
        type: globalThis.PropType<RouteRecordRaw[]>;
        required: true;
        default: () => never[];
    };
    cacheList: {
        type: globalThis.PropType<string[]>;
        default: undefined;
    };
    matchedIndex: {
        type: globalThis.PropType<number>;
        default: number;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    menus: {
        type: globalThis.PropType<RouteRecordRaw[]>;
        required: true;
        default: () => never[];
    };
    cacheList: {
        type: globalThis.PropType<string[]>;
        default: undefined;
    };
    matchedIndex: {
        type: globalThis.PropType<number>;
        default: number;
    };
}>>, {
    menus: RouteRecordRaw[];
    cacheList: string[];
    matchedIndex: number;
}, {}>;
export default _default;
