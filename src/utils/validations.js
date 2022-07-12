function createValidationRule(ruleName, errorMessage, validationFunc) {
  return {
    name: ruleName,
    message: errorMessage,
    validate: validationFunc,
  };
}

const Validation = {
  required: (inputName) => {
    return createValidationRule(
      "required",
      `${inputName} is required`,
      (inputValue, formObj) => {
        if (!inputValue || inputValue.length <= 0) return false;
        return true;
      },
    );
  },
};

export default Validation;
