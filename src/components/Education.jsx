import Field from "./Field";
import { useState } from "react";

function Education({ isSubmit }) {
  const [educationList, setEducationList] = useState([
    { id: 0, institutionName: "", courseName: "", dateOfCompletion: "" },
  ]);

  const addEducation = () => {
    setEducationList([
      ...educationList,
      { id: 1, institutionName: "", courseName: "", dateOfCompletion: "" },
    ]);
  };

  const removeEducation = () => {
    const filteredList = educationList.filter((item) => item.id == 0);
    console.log(filteredList);
    setEducationList(filteredList);
  };

  const handleChange = (e) => {
    // If first form
    if (e.target.dataset.id == 0) {
      // const firstItem = educationList.filter((item) => item.id == 0);
      const firstItem = educationList[0];
      const secondItem = educationList.filter((item) => item.id == 1);
      if (e.target.id == "inst-name") {
        firstItem.institutionName = e.target.value;
      } else if (e.target.id == "course-name") {
        firstItem.courseName = e.target.value;
      } else {
        firstItem.yearOfCompletion = e.target.value;
      }
      setEducationList([firstItem, ...secondItem]);
    } else {
      const firstItem = educationList[0];
      const secondItem = educationList[1];
      if (e.target.id == "inst-name") {
        secondItem.institutionName = e.target.value;
      } else if (e.target.id == "course-name") {
        secondItem.courseName = e.target.value;
      } else {
        secondItem.yearOfCompletion = e.target.value;
      }
      setEducationList([firstItem, secondItem]);
    }
  };

  return (
    <div>
      {educationList.map((item) => (
        <div key={item.id} style={{ marginBottom: "16px" }}>
          <Field
            id="inst-name"
            formId={item.id}
            name="Institution Name"
            onInputChange={handleChange}
          />
          <Field
            id="course-name"
            formId={item.id}
            name="Course Name"
            onInputChange={handleChange}
          />
          <Field
            id="doc"
            formId={item.id}
            type="date"
            name="Date of Completion"
            onInputChange={handleChange}
          />
          {item.id == 1 ? (
            <button onClick={removeEducation}>Remove</button>
          ) : null}
        </div>
      ))}
      {educationList.length == 1 ? (
        <button onClick={addEducation}>Add New</button>
      ) : null}
    </div>
  );
}

export default Education;
