import { useState } from "react";
import { useRef } from "react";

import "./App.css";
import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Display from "./components/Display";

function App() {
  const [isSubmit, setIsSubmit] = useState(false);

  const [generalData, setGeneralData] = useState(null);
  const [educationData, setEducationData] = useState(null);
  const [experienceData, setExperienceData] = useState(null);

  const formRef = useRef(null);

  const handleSubmit = () => {
    const isValid = formRef.current.reportValidity();
    if (isValid)
      setIsSubmit(true);
  };

  const handleGeneralData = (data) => {
    setGeneralData(data);
  };

  const handleEducationData = (data) => {
    setEducationData(data);
  };

  const handleExperienceData = (data) => {
    setExperienceData(data);
  };

  return (
    <>
      <div>
        <form ref={formRef}>
          <General isSubmit={isSubmit} handleDataSubmit={handleGeneralData} />
          <h2>Education</h2>
          <Education isSubmit={isSubmit} handleDataSubmit={handleEducationData} />
          <h2>Experience</h2>
          <Experience
            isSubmit={isSubmit}
            handleDataSubmit={handleExperienceData}
          />
        </form>
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <Display />
    </>
  );
}

export default App;
