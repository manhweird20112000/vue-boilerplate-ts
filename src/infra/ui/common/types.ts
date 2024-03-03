import { type FormInstance } from 'ant-design-vue'

export interface ICommonField{
    label?: string
    showLabelRequired?: boolean,
    charRequired?: string
    data?: any,
    maxlength?: number
    type?: 'text' | 'textarea' | 'number' | 'password',
    name?: string,
    formRef?: FormInstance | undefined,
    placeholder?: string,
    showCount?: boolean,
    rows?: number
    disabled?: boolean,
    allowClear?: boolean
}
