import Field from "./Field";
import { useState, useEffect } from "react";

function General({ generalData, onChange }) {

  // if (isSubmit == true) {
  //   handleDataSubmit(formState);
  // }

  return (
    <div className="form-section">
      <h2>General Information</h2>
      <Field id="name" name="Name" value={generalData.name} required={true} onInputChange={onChange} />
      <Field id="email" name="Email"  value={generalData.email} onInputChange={onChange} />
      <Field id="phone" name="Phone Number" value={generalData.phone_number} onInputChange={onChange} />
    </div>
  );
}

export default General;
