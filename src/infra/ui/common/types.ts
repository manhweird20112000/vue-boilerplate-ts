import { type FormInstance } from 'ant-design-vue'

export interface ICommonField{
    label?: string
    showLabelRequired?: boolean,
    charRequired?: string
    data?: any,
    maxlength?: number
    type?: 'number' | 'button' | 'time' | 'reset' | 'submit' | 'image' | 'text' | 'search' | 'hidden' | 'color' | 'checkbox' | 'radio' | 'range' | 'date' | 'url' | 'email' | 'week' | 'month' | 'datetime-local' | 'file' | 'password' | 'tel' | 'textarea'
    name?: string,
    formRef?: FormInstance | undefined,
    placeholder?: string,
    showCount?: boolean,
    rows?: number
    disabled?: boolean,
    allowClear?: boolean
}

export interface IPagination{
  page: number,
  per_page: number,
  total: number
}
