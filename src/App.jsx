import { useState } from "react";
import { useRef } from "react";

import "./App.css";
import Header from "./components/Header.jsx"
import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Display from "./components/Display";

function App() {
  // const [isSubmit, setIsSubmit] = useState(false);
  const [showDisplay, setShowDisplay] = useState(false);
  const [formData, setFormData] = useState(null);
  const formRef = useRef(null);

  const [generalData, setGeneralData] = useState({
    name: "",
    email: "",
    phone_number: "",
  });
  const [educationData, setEducationData] = useState([
    { id: 0, institutionName: "", courseName: "", dateOfCompletion: "" },
  ]);
  const [experienceData, setExperienceData] = useState([
    {
      id: 0,
      companyName: "",
      positionTitle: "",
      responsibilities: "",
      fromDate: "",
      toDate: "",
    },
  ]);

  const handleSubmit = () => {
    const isValid = formRef.current.reportValidity();
    if (isValid) {
      // setIsSubmit(true);
      formRef.current.reset();
      setShowDisplay(true);
    }
    // setIsSubmit(false);
  };

  const handleSubmittedData = ({ source, data }) => {
    if (source == "general")
      setFormData((prevData) => ({ ...prevData, generalData: data }));
    else if (source == "education")
      setFormData((prevData) => ({ ...prevData, educationData: data }));
    else if (source == "experience")
      setFormData((prevData) => ({ ...prevData, experienceData: data }));

    if (
      formData &&
      formData.generalData &&
      formData.educationData &&
      formData.experienceData
    ) {
      setShowDisplay(true);
    }
  };

  const handleEdit = () => {
    console.log(generalData);
    setShowDisplay(false);
  };

  const handleGeneralDataChange = (e) => {
    const data = e.target.value;
    switch (e.target.id) {
      case "name":
        setGeneralData({ ...generalData, name: data });
        break;
      case "email":
        setGeneralData({ ...generalData, email: data });
        break;
      case "phone":
        setGeneralData({ ...generalData, phone_number: data });
        break;
    }
  };

  const handleEducationDataChange = (e) => {
    if (e.target.dataset.id == 0) {
      const firstItem = educationData[0];
      const secondItem = educationData.filter((item) => item.id == 1);
      if (e.target.id == "inst-name") {
        firstItem.institutionName = e.target.value;
      } else if (e.target.id == "course-name") {
        firstItem.courseName = e.target.value;
      } else {
        firstItem.dateOfCompletion = e.target.value;
      }
      setEducationData([firstItem, ...secondItem]);
    } else {
      const firstItem = educationData[0];
      const secondItem = educationData[1];
      if (e.target.id == "inst-name") {
        secondItem.institutionName = e.target.value;
      } else if (e.target.id == "course-name") {
        secondItem.courseName = e.target.value;
      } else {
        secondItem.dateOfCompletion = e.target.value;
      }
      setEducationData([firstItem, secondItem]);
    }
  };

  const addEducation = () => {
    setEducationData([
      ...educationData,
      { id: 1, institutionName: "", courseName: "", dateOfCompletion: "" },
    ]);
  };

  const removeEducation = () => {
    const filteredList = educationData.filter((item) => item.id == 0);
    setEducationData(filteredList);
  };

  const handleExperienceDataChange = (e) => {
    // If first form
    if (e.target.dataset.id == 0) {
      const firstItem = experienceData[0];
      const secondItem = experienceData.filter((item) => item.id == 1);
      if (e.target.id == "comp-name") {
        firstItem.companyName = e.target.value;
      } else if (e.target.id == "pos-title") {
        firstItem.positionTitle = e.target.value;
      } else if (e.target.id == "responsibility") {
        firstItem.responsibilities = e.target.value;
      } else if (e.target.id == "from-date")
        firstItem.fromDate = e.target.value;
      else firstItem.toDate = e.target.value;
      setExperienceData([firstItem, ...secondItem]);
    } else {
      const firstItem = experienceData[0];
      const secondItem = experienceData[1];
      if (e.target.id == "comp-name") {
        secondItem.companyName = e.target.value;
      } else if (e.target.id == "pos-title") {
        secondItem.positionTitle = e.target.value;
      } else if (e.target.id == "responsibility") {
        secondItem.responsibilities = e.target.value;
      } else if (e.target.id == "from-date")
        secondItem.fromDate = e.target.value;
      else secondItem.toDate = e.target.value;
      setExperienceData([firstItem, secondItem]);
    }
  };

  const addExperience = () => {
    setExperienceData([
      ...experienceData,
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
    const filteredList = experienceData.filter((item) => item.id == 0);
    setExperienceData(filteredList);
  };

  const resetForm = () => {
    setGeneralData({
      name: "",
      email: "",
      phone_number: "",
    })
    setEducationData([
      { id: 0, institutionName: "", courseName: "", dateOfCompletion: "" },
    ])
    setExperienceData([{
      id: 0,
      companyName: "",
      positionTitle: "",
      responsibilities: "",
      fromDate: "",
      toDate: "",
    },])
  }

  return (
    <>
     <Header />
      <main>
        {!showDisplay ? (
          <div>
            <form ref={formRef} className="mainForm">
              <div>
                <General
                  generalData={generalData}
                  onChange={handleGeneralDataChange}
                />
                <div className="form-section">
                  <h2>Education</h2>
                  <Education
                    educationList={educationData}
                    onChange={handleEducationDataChange}
                    onAdd={addEducation}
                    onRemove={removeEducation}
                  />
                </div>
              </div>
              <div className="form-section">
                <h2>Experience</h2>
                <Experience
                  experienceList={experienceData}
                  onChange={handleExperienceDataChange}
                  onAdd={addExperience}
                  onRemove={removeExperience}
                />
              </div>
            </form>
            <button onClick={resetForm}>Reset Form</button>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        ) : (
          <>
            <button className="edit-btn" onClick={handleEdit}>
              Edit
            </button>
            <Display
              generalData={generalData}
              educationData={educationData}
              experienceData={experienceData}
            />
          </>
        )}
      </main>
    </>
  );
}

export default App;
