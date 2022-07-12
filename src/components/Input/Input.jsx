import "./Input.css";
import classNames from "classnames";

export default function Input({
  id,
  label,
  type,
  name,
  value,
  handleChange,
  errorMessage,
  valid,
  disabled,
  className,
}) {
  const style = classNames(
    "input__container",
    errorMessage && !valid && "input__container-error",
    className || "",
  );
  return (
    <div className={style}>
      <label htmlFor={id} className="input__label">
        {label}
      </label>
      <input
        className="input__field"
        type={type}
        id={id}
        name={name}
        valud={value}
        onChange={handleChange}
        disabled={disabled}
      />
      {errorMessage && !valid && (
        <span className="input__error">{errorMessage}</span>
      )}
    </div>
  );
}
