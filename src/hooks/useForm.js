import React, { useCallback, useState } from "react";

export default function useForm(formObj) {
  const [form, setForm] = useState(formObj);

  function renderForm() {
    return Object.values(form).map((inputObj) => {
      const { id, valid, errorMessage, renderInput } = inputObj;
      return (
        <React.Fragment key={id}>
          {renderInput(onInputChange, valid, errorMessage)}
        </React.Fragment>
      );
    });
  }

  const isInputFieldValid = useCallback(
    (inputObj) => {
      if (inputObj.validationRules && inputObj.validationRules.length > 0) {
        for (const rule of inputObj.validationRules) {
          if (rule.validate(inputObj.value, form)) {
            return true;
          } else {
            inputObj.errorMessage = rule.message;
            return false;
          }
        }
      }
    },
    [form],
  );

  const onInputChange = useCallback(
    (event) => {
      const { name, value } = event.target;
      const inputObj = { ...form[name] };
      inputObj.value = value;

      const isValidInput = isInputFieldValid(inputObj);

      if (isValidInput && !inputObj.valid) inputObj.valid = true;
      else if (!isValidInput && inputObj.valid) inputObj.valid = false;

      setForm({ ...form, [name]: inputObj });
    },
    [form, isInputFieldValid],
  );

  const getAllValues = useCallback(() => {
    let values = {};
    Object.entries(form).forEach(([name, objetValue]) => {
      values[name] = objetValue.value;
    });
    return values;
  }, [form]);

  const getValue = useCallback(
    (term) => {
      return form[term].value;
    },
    [form],
  );

  const isFormValid = useCallback(() => {
    let isValid = true;
    const formObj = Object.values(form);

    formObj.forEach((inputObj) => {
      if (inputObj.validationRules && inputObj.validationRules.length > 0) {
        for (const rule of inputObj.validationRules) {
          if (!rule.validate(inputObj.value, form)) {
            isValid = false;
          }
        }
      }
    });
    return isValid;
  }, [form]);

  return { renderForm, getAllValues, getValue, isFormValid };
}
