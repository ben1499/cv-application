import { useState } from "react";

import "./App.css";
import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";



function App() {
const [isSubmit, setIsSubmit] = useState(false);

const handleSubmit = () => {
  setIsSubmit(true);
}

  return (
    <>
      <div>
        <General isSubmit={isSubmit} />
        <h2>Education</h2>
        <Education isSubmit={isSubmit} />
        <h2>Experience</h2>
        <Experience isSubmit={isSubmit} />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
}

export default App;
