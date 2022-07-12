import { v4 as uuid4 } from "uuid";
import Input from "../components/Input/Input";

export default function createInput({
  id = uuid4(),
  type = "text",
  disabled = false,
  label,
  name,
  defaultValue = "",
}) {
  return {
    renderInput: (handleChange, valid, errorMessage) => {
      return (
        <Input
          id={id}
          label={label}
          type={type}
          name={name}
          disabled={disabled}
          handleChange={handleChange}
          valid={valid}
          errorMessage={errorMessage}
        />
      );
    },
    id,
    value: defaultValue,
    errorMessage: "",
    valid: false,
  };
}
