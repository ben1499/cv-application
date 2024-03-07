import Field from "./Field";
import { useState } from "react";

function General({ isSubmit, handleDataSubmit }) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone_number: "",
  });

  if (isSubmit == true) {
    handleDataSubmit(formState);
  }

  const handleChange = (e) => {
    if (e.target.id == "name")
      setFormState({ ...formState, name: e.target.value });
    else if (e.target.id == "email")
      setFormState({ ...formState, email: e.target.value });
    else setFormState({ ...formState, phone_number: e.target.value });
  };

  return (
    <div>
      <h2>General Information</h2>
      <Field id="name" name="Name" required={true} onInputChange={handleChange} />
      <Field id="email" name="Email" onInputChange={handleChange} />
      <Field id="phone" name="Phone Number" onInputChange={handleChange} />
    </div>
  );
}

export default General;
