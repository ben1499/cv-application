import Field from "./Field";
import { useState } from "react";

function Experience({ isSubmit }) {
  const [experienceList, setExperienceList] = useState([
    {
      id: 0,
      companyName: "",
      positionTitle: "",
      responsibilities: "",
      fromDate: "",
      toDate: "",
    },
  ]);

  const addExperience = () => {
    setExperienceList([
      ...experienceList,
      {
        id: 1,
        companyName: "",
        positionTitle: "",
        responsibilities: "",
        fromDate: "",
        toDate: "",
      },
    ]);
  };

  const removeExperience = () => {
    const filteredList = experienceList.filter((item) => item.id == 0);
    console.log(filteredList);
    setExperienceList(filteredList);
  };

  const handleChange = (e) => {
    console.log(e.target.id);
    console.log(e.target.value);
    // If first form
    if (e.target.dataset.id == 0) {
      // const firstItem = experienceList.filter((item) => item.id == 0);
      const firstItem = experienceList[0];
      const secondItem = experienceList.filter((item) => item.id == 1);
      if (e.target.id == "comp-name") {
        firstItem.companyName = e.target.value;
      } else if (e.target.id == "pos-title") {
        firstItem.courseName = e.target.value;
      } else if (e.target.id == "responsibility") {
        console.log(e.target.value);
        firstItem.responsibilities = e.target.value;
      } else if (e.target.id == "from-date")
        firstItem.fromDate = e.target.value;
      else firstItem.toDate = e.target.value;
      setExperienceList([firstItem, ...secondItem]);
    } else {
      const firstItem = experienceList[0];
      const secondItem = experienceList[1];
      if (e.target.id == "comp-name") {
        secondItem.institutionName = e.target.value;
      } else if (e.target.id == "pos-title") {
        secondItem.courseName = e.target.value;
      } else if (e.target.id == "responsibility") {
        secondItem.responsibilities = e.target.value;
      } else if (e.target.id == "from-date")
        secondItem.fromDate = e.target.value;
      else secondItem.toDate = e.target.value;
      setExperienceList([firstItem, secondItem]);
    }
  };

  return (
    <div>
      {experienceList.map((item) => (
        <div key={item.id} style={{ marginBottom: "16px" }}>
          <Field
            id="comp-name"
            formId={item.id}
            name="Company Name"
            onInputChange={handleChange}
          />
          <Field
            id="pos-title"
            formId={item.id}
            name="Position Title"
            onInputChange={handleChange}
          />
          <div className="text-field">
            <label htmlFor="responsibility">Responsibilities</label>
            <textarea
              style={{ resize: "none" }}
              name=""
              onChange={handleChange}
              id="responsibility"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <Field
            id="from-date"
            formId={item.id}
            type="date"
            name="From Date"
            onInputChange={handleChange}
          />
          <Field
            id="to-date"
            formId={item.id}
            type="date"
            name="To Date"
            onInputChange={handleChange}
          />
          {item.id == 1 ? (
            <button onClick={removeExperience}>Remove</button>
          ) : null}
        </div>
      ))}
      {experienceList.length == 1 ? (
        <button onClick={addExperience}>Add New</button>
      ) : null}
    </div>
  );
}

export default Experience;
