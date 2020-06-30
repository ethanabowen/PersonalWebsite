import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Personal from './Personal';
import Education from './Education';
import Job from './Job';

import { personal, education, jobs } from './Constants.js';


function App() {
  return (
    <div className="App container">

      <div className="sectionHeader">Personal</div>
      <Personal {...personal} />

      <div className="sectionHeader">Education</div>
      <div className="row">
        {education.map((education, index) => {
          return <Education
            key={education.school + String(index)}
            className="col-6"
            {...education} />;
        })}
      </div>

      <div className="sectionHeader">Education</div>
      <div className="sectionHeader">Jobs</div>
      <div className="row">
        {jobs.map((job, index) => {
          return <Job
            key={job.company + String(index)}
            className="col-5"
            {...job}
          />;
        })}
      </div>
    </div >
  );
}

export default App;
