import type {
    RadioProps,
    ColProps,
    FormItemProps,
    InputNumberProps,
    InputProps,
    SwitchProps,
    RadioGroupProps,
    CheckboxGroupProps,
    CheckboxProps,
    ButtonProps,
    DividerProps,
    FormValidateCallback,
    FormValidationResult,
    FormItemProp,
    FormProps,
    ElSelect,
    ElSelectV2,
} from 'element-plus';
import type { Arrayable } from 'element-plus/es/utils';
import type { ExtractPropTypes } from 'vue';

interface XSelectMultiProp extends ExtractPropTypes<typeof ElSelect> {
    // label字段表示
    labelSchema?: string;
}

interface XSelectProp extends ExtractPropTypes<typeof ElSelectV2> {
    // label字段表示
    labelSchema?: string;
}

type CheckboxType = 'box' | 'button';

type RadioType = 'cycle' | 'button';
/**
 * x form item 基础类型
 */
interface BaseXFormSchema<T> {
    label: string;
    prop: keyof T | '';
    components: ComponentTypes;
    elFormItemProps?: Partial<FormItemProps> | ((form: any) => Partial<FormItemProps>);
    colProps?: Partial<ColProps>;
}

/**
 * x form item input
 */
interface XFormItemInputSchema<T> extends BaseXFormSchema<T> {
    components: 'el-input';
    elProps?: Partial<InputProps> | ((form: any) => Partial<InputProps>);
}

/**
 * x form item input-number
 */
interface XFormItemInputNumberSchema<T> extends BaseXFormSchema<T> {
    components: 'el-input-number';
    elProps?: Partial<InputNumberProps> | ((form: any) => Partial<InputNumberProps>);
}

/**
 * x form item select
 */
interface XFormItemSelectSchema<T> extends BaseXFormSchema<T> {
    components: 'el-select-v2';
    elProps?: XSelectProp | ((form: any) => XSelectProp);
    // TODO: 类型推导
    api?: (data?: any) => Promise<any>;
}

/**
 * x form item select
 */
interface XFormItemSelectMultiSchema<T> extends BaseXFormSchema<T> {
    components: 'x-select';
    elProps?: XSelectMultiProp | ((form: any) => XSelectMultiProp);
    // TODO: 类型推导
    api?: (data?: any) => Promise<any>;
    isAllChoose?: boolean;
}

/**
 * x form item cascader
 */
interface XFormItemCascaderSchema<T> extends BaseXFormSchema<T> {
    components: 'el-cascader';
    elProps?: any | ((form: any) => any);
    // TODO: 类型推导
    api?: (data?: any) => Promise<any>;
}

/**
 * x form item date-picker
 */
interface XFormItemDatePickerSchema<T> extends BaseXFormSchema<T> {
    components: 'el-date-picker';
    elProps?: any | ((form: any) => Partial<any>);
}

/**
 * x form item custom
 */
interface XFormItemCustomSchema<T> extends BaseXFormSchema<T> {
    components: 'custom';
    slotName: string;
}

/**
 * x form item switch
 */
interface XFormItemSwitchSchema<T> extends BaseXFormSchema<T> {
    components: 'el-switch';
    elProps?: Partial<SwitchProps> | ((form: any) => Partial<SwitchProps>);
}

/**
 * button
 */
interface XFormItemButtonSchema<T> extends BaseXFormSchema<T> {
    components: 'el-button';
    elProps?: Partial<ButtonProps> | ((form: any) => Partial<ButtonProps>);
}

/**
 * x form item el-radio
 */
interface XFormItemRadioSchema<T> extends BaseXFormSchema<T> {
    components: 'x-radio';
    elProps?: XRadioProps | ((form: any) => XRadioProps);
}

/**
 * x form item divider
 */
interface XFormItemDividerSchema<T> extends BaseXFormSchema<T> {
    components: 'el-divider';
    elProps?: Partial<DividerProps> | ((form: any) => Partial<DividerProps>);
}

/**
 * x form item checkbox
 */
interface XFormItemCheckBoxSchema<T> extends BaseXFormSchema<T> {
    components: 'el-checkbox';
    elProps?: Partial<XCheckBoxProps> | ((form: any) => Partial<XCheckBoxProps>);
}

type ComponentTypes =
    | 'el-input'
    | 'el-input-number'
    | 'el-select-v2'
    | 'el-checkbox'
    | 'el-switch'
    | 'el-cascader'
    | 'el-date-picker'
    | 'x-radio'
    | 'x-checkbox'
    | 'custom'
    | 'el-divider'
    | 'el-button'
    | 'x-select';

/**
 * select option
 */
interface SelectOption {
    label: string;
    value: string | number | boolean | undefined;
}

/**
 * radio option
 */
interface RadioOption extends Partial<RadioProps> {
    /**
     * 显示值
     */
    labelName?: string;
}

/**
 * x radio props
 */
interface XRadioProps {
    elProps?: Partial<RadioGroupProps>;
    options?: RadioOption[];
}

/**
 * radio option
 */
interface CheckBoxOption extends Partial<CheckboxProps> {
    /**
     * 显示值
     */
    labelName?: string;
}

/**
 * x checkbox props
 */
interface XCheckBoxProps {
    elProps?: Partial<CheckboxGroupProps>;
    options?: CheckBoxOption[];
}

/**
 * x form item
 */
type XFormItemSchema<T = any> =
    | XFormItemInputSchema<T>
    | XFormItemButtonSchema<T>
    | XFormItemInputNumberSchema<T>
    | XFormItemSelectSchema<T>
    | XFormItemCheckBoxSchema<T>
    | XFormItemSwitchSchema<T>
    | XFormItemCascaderSchema<T>
    | XFormItemDatePickerSchema<T>
    | XFormItemRadioSchema<T>
    | XFormItemCustomSchema<T>
    | XFormItemDividerSchema<T>
    | XFormItemSelectMultiSchema<T>;
/**
 * x form ref
 */
export interface XFormInstance {
    validate: (callback?: FormValidateCallback | undefined) => FormValidationResult;
    resetFields: (props?: Arrayable<FormItemProp> | undefined) => void;
}

export type ElFormProps = Partial<FormProps>;

export type {
    BaseXFormSchema,
    ComponentTypes,
    XFormItemSchema,
    XFormItemInputSchema,
    XFormItemInputNumberSchema,
    XFormItemSelectSchema,
    XFormItemSelectMultiSchema,
    XFormItemCascaderSchema,
    XFormItemDatePickerSchema,
    XFormItemCustomSchema,
    XFormItemCheckBoxSchema,
    XFormItemSwitchSchema,
    XFormItemRadioSchema,
    SelectOption,
    RadioOption,
    CheckBoxOption,
    CheckboxType,
    RadioType,
    XFormItemButtonSchema,
    XFormItemDividerSchema,
    XSelectMultiProp,
};
