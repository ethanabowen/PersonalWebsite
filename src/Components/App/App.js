import React from 'react'
import '../bootstrap/dist/css/bootstrap.css';
import './App.css';

import Personal from './Components/Personal';
import School from './Components/School';
import Job from './Components/Job';
import Skills from './Components/Skills';

import { personal, schools, jobs, skills, projects } from '../../Constants.js';

function App() {
  return (
    <div className="container">

      <Personal {...personal} />

      <div className="section-header">Education</div>
      <div className="row justify-content-center">
        {schools.map((school, index) => {
          return <School
            key={school.school + index}
            className="col-sm-6 col-xs-12"
            {...school} />;
        })}
      </div>


      <div className="section-header justify-content-center mt-5 mb-2">Tech Skills</div>
      <div className="row">
        <Skills skills={skills} />
      </div>

      <div className="section-header mt-5 mb-2">Experience</div>
      <div className="row justify-content-center">
        {jobs.map((job, index) => {
          return job.title == 'Intern' ?
            <></> :
            <Job
              key={job.company + index}
              className="col-sm-10 col-xs-12"
              {...job}
            />;
        })}
      </div>

      <div className="section-header mt-5 mb-2">Projects</div>
      <div className="row justify-content-center">
        <ul>
          {projects.map((project, index) => {
            return <li key={"project" + index} >{project}</li>
          })}
        </ul>
      </div>
    </div >
  );
}

export default App;
