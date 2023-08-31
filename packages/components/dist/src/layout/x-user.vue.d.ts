interface DropdownItem {
    title: string;
    onClick?: () => void;
}
declare const _default: import("vue").DefineComponent<{
    userName: {
        type: globalThis.PropType<string>;
        default: string;
    };
    dropdownItems: {
        type: globalThis.PropType<DropdownItem[]>;
        default: () => {
            title: string;
        }[];
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    userName: {
        type: globalThis.PropType<string>;
        default: string;
    };
    dropdownItems: {
        type: globalThis.PropType<DropdownItem[]>;
        default: () => {
            title: string;
        }[];
    };
}>>, {
    userName: string;
    dropdownItems: DropdownItem[];
}, {}>;
export default _default;
