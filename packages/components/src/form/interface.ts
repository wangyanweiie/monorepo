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

type CheckboxType = 'box' | 'button';
type RadioType = 'cycle' | 'button';
type RadioValueType = string | number | boolean | undefined;

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
 * x form item switch
 */
interface XFormItemSwitchSchema<T> extends BaseXFormSchema<T> {
    components: 'el-switch';
    elProps?: Partial<SwitchProps> | ((form: any) => Partial<SwitchProps>);
}

/**
 * x form item checkbox
 */
interface XFormItemCheckBoxSchema<T> extends BaseXFormSchema<T> {
    components: 'el-checkbox';
    elProps?: Partial<XCheckBoxProps> | ((form: any) => Partial<XCheckBoxProps>);
}

/**
 * button
 */
interface XFormItemButtonSchema<T> extends BaseXFormSchema<T> {
    components: 'el-button';
    elProps?: Partial<ButtonProps> | ((form: any) => Partial<ButtonProps>);
}

/**
 * x form item divider
 */
interface XFormItemDividerSchema<T> extends BaseXFormSchema<T> {
    components: 'el-divider';
    elProps?: Partial<DividerProps> | ((form: any) => Partial<DividerProps>);
}

/**
 * x form item select
 */
interface XFormItemSelectSchema<T> extends BaseXFormSchema<T> {
    components: 'el-select-v2';
    elProps?: XSelectProp | ((form: any) => XSelectProp);
    api?: (data?: any) => Promise<any>;
}

/**
 * x form item cascader
 */
interface XFormItemCascaderSchema<T> extends BaseXFormSchema<T> {
    components: 'el-cascader';
    elProps?: any | ((form: any) => any);
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
 * x form item el-radio
 */
interface XFormItemRadioSchema<T> extends BaseXFormSchema<T> {
    components: 'x-radio';
    elProps?: XRadioProps | ((form: any) => XRadioProps);
}

/**
 * x form item select
 */
interface XFormItemSelectMultiSchema<T> extends BaseXFormSchema<T> {
    components: 'x-select';
    elProps?: XSelectMultiProp | ((form: any) => XSelectMultiProp);
    api?: (data?: any) => Promise<any>;
    isAllChoose?: boolean;
}

/**
 * x form item custom
 */
interface XFormItemCustomSchema<T> extends BaseXFormSchema<T> {
    components: 'custom';
    slotName: string;
}

type ComponentTypes =
    | 'el-input'
    | 'el-input-number'
    | 'el-checkbox'
    | 'el-switch'
    | 'el-button'
    | 'el-divider'
    | 'el-select-v2'
    | 'el-cascader'
    | 'el-date-picker'
    | 'x-radio'
    | 'x-checkbox'
    | 'x-select'
    | 'custom';

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
interface XFormInstance {
    validate: (callback?: FormValidateCallback | undefined) => FormValidationResult;
    resetFields: (props?: Arrayable<FormItemProp> | undefined) => void;
}

type ElFormProps = Partial<FormProps>;

interface SelectOption {
    label: string;
    value: string | number | boolean | undefined;
}

interface RadioOption extends Partial<RadioProps> {
    labelName?: string;
}

interface CheckBoxOption extends Partial<CheckboxProps> {
    labelName?: string;
}

interface XRadioProps {
    elProps?: Partial<RadioGroupProps>;
    options?: RadioOption[];
}

interface XCheckBoxProps {
    elProps?: Partial<CheckboxGroupProps>;
    options?: CheckBoxOption[];
}

interface XSelectProp extends ExtractPropTypes<typeof ElSelectV2> {
    // label字段表示
    labelSchema?: string;
}

interface XSelectMultiProp extends ExtractPropTypes<typeof ElSelect> {
    // label字段表示
    labelSchema?: string;
}

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
    XFormItemButtonSchema,
    XFormItemDividerSchema,
    XFormInstance,
    ElFormProps,
    RadioType,
    RadioValueType,
    CheckboxType,
    SelectOption,
    RadioOption,
    CheckBoxOption,
    XSelectMultiProp,
};
