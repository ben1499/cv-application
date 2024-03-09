function Display({ generalData, educationData, experienceData }) {
  return (
    <div id="cv-container">
      <section className="personal-info-section">
        <h2 className="person-name">{generalData.name}</h2>
        <div className="contact-info">
          <p className="m-0">{generalData.phone_number}</p>
          <p className="m-0">{generalData.email}</p>
        </div>
      </section>
      <section className="education-info-section">
        <h1 className="title">Education</h1>
        <ul>
          {educationData.map(item => {
            return (
              <li key={item.id}>
               <p className="m-0 course-name">{item.courseName}</p>
               <p className="m-0">{item.institutionName}</p>
               <p className="m-0">Date of Completion: {item.dateOfCompletion}</p>
              </li>
            )
          })}
        </ul>
      </section>
      <section className="experience-info-section">
        <h1 className="title">Work Experience</h1>
        <ul>
          {experienceData.map(item => {
            return (
              <li key={item.id}>
               <div style={{display: "flex", justifyContent: "space-between"}}>
                 <p className="m-0 "><span className="course-name">{item.positionTitle}, </span>{item.companyName}</p>
                 <p className="m-0 duration">({item.fromDate} - {item.toDate})</p>
               </div>
               <p className="m-0">{item.responsibilities}</p>
               <p className="m-0">{item.dateOfCompletion}</p>
              </li>
            )
          })}
        </ul>
      </section>
    </div>
  )
}

export default Display;
