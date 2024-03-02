import { type FormInstance } from 'ant-design-vue'

export function useValidateField (){
  const validateField = (name: string, formRef: FormInstance): void =>  {
    formRef.validateFields(name)
  }

  const clearValidateField = (name: string, formRef: FormInstance) => {
    formRef.clearValidate(name)
  }
  return { validateField, clearValidateField }
}
