import Field from "./Field";
import { useState } from "react";

function Education({ educationList, onChange, onAdd, onRemove }) {
  // if (isSubmit == true) {
  //   handleDataSubmit(educationList);
  // }

  return (
    <div>
      {educationList.map((item) => (
        <div key={item.id} style={{ marginBottom: "12px" }}>
          {item.id == 1 ? (
            <div style={{ borderBottom: "1px solid #94a3b8" }}></div>
          ) : null}
          <Field
            id="inst-name"
            formId={item.id}
            name="Institution Name"
            value={item.institutionName}
            required={true}
            onInputChange={onChange}
          />
          <Field
            id="course-name"
            formId={item.id}
            name="Course Name"
            value={item.courseName}
            required={true}
            onInputChange={onChange}
          />
          <Field
            id="doc"
            formId={item.id}
            type="date"
            name="Date of Completion"
            value={item.dateOfCompletion}
            onInputChange={onChange}
          />
          {item.id == 1 ? (
            <button
              className="form-inner-btn"
              style={{ marginTop: "10px" }}
              onClick={onRemove}
            >
              Remove
            </button>
          ) : null}
        </div>
      ))}
      {educationList.length == 1 ? (
        <button className="form-inner-btn" onClick={onAdd}>
          Add New
        </button>
      ) : null}
    </div>
  );
}

export default Education;
