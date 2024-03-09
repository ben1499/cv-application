import Field from "./Field";
import { useState } from "react";

function Experience({ experienceList, onChange, onAdd, onRemove }) {

  // if (isSubmit == true) {
  //   handleDataSubmit(experienceList);
  // }

  return (
    <div>
      {experienceList.map((item) => (
        <div key={item.id} style={{ marginBottom: "16px" }}>
          <Field
            id="comp-name"
            formId={item.id}
            name="Company Name"
            value={item.companyName}
            required={true}
            onInputChange={onChange}
          />
          <Field
            id="pos-title"
            formId={item.id}
            name="Position Title"
            value={item.positionTitle}
            required={true}
            onInputChange={onChange}
          />
          <div className="text-field">
            <label htmlFor="responsibility">Responsibilities</label>
            <textarea
              data-id={item.id}
              style={{ resize: "none" }}
              name=""
              value={item.responsibilities}
              onChange={onChange}
              id="responsibility"
              cols="30"
              rows="5"
            ></textarea>
          </div>
          <Field
            id="from-date"
            formId={item.id}
            type="date"
            name="From Date"
            value={item.fromDate}
            onInputChange={onChange}
          />
          <Field
            id="to-date"
            formId={item.id}
            type="date"
            name="To Date"
            value={item.toDate}
            onInputChange={onChange}
          />
          {item.id == 1 ? (
            <button onClick={onRemove}>Remove</button>
          ) : null}
        </div>
      ))}
      {experienceList.length == 1 ? (
        <button onClick={onAdd}>Add New</button>
      ) : null}
    </div>
  );
}

export default Experience;
