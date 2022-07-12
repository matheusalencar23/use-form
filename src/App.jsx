import "./App.css";
import useForm from "./hooks/useForm";
import createInput from "./utils/createInput";
import Validation from "./utils/validations";

function App() {
  const { renderForm, getValue, getAllValues, isFormValid } = useForm({
    name: {
      ...createInput({ label: "Nome", name: "name" }),
      validationRules: [Validation.required("name")],
    },
    email: { ...createInput({ label: "Email", name: "email", type: "email" }) },
  });

  return (
    <form>
      <h1>Singup Form</h1>
      {renderForm()}
      <button
        type="button"
        onClick={() => console.log(getAllValues())}
        disabled={!isFormValid()}
      >
        Submit
      </button>
      <p>{getValue("name")}</p>
      <p>{getValue("email")}</p>
    </form>
  );
}

export default App;
