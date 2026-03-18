import { useRef } from "react";

export const useForm = <T extends object>(initialState: T) => {
  const formValues = useRef(initialState);

  const handlerChangeText = (value: string, field: keyof T) => {
    formValues.current = {
      ...formValues.current,
      [field]: value,
    };
  };

  const getFormValues = () => {
    return { ...formValues.current };
  };

  const resetForm = () => {
    formValues.current = initialState;
  };

  return {
    handlerChangeText,
    getFormValues,
    resetForm,
  };
};
