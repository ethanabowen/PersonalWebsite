import React from 'react'
import './App.css';

import Personal from '../Personal/Personal';
import School from '../School/School';
import Jobs from '../Jobs/Jobs';
import Skills from '../Skills/Skills';

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
            {...school} />;
        })}
      </div>

      <div className="section-header justify-content-center mt-5">Tech Skills</div>
      <div className="row justify-content-center">
        <Skills skills={skills} />
      </div>

      <div className="section-header mt-5">Experience</div>
      <div className="row justify-content-center">
        <Jobs jobs={jobs} />
      </div>

      <div className="section-header mt-5">Projects</div>
      <div className="row justify-content-center">
        <ul className="col-9">
          {projects.map((project, index) => {
            return <li key={"project" + index} >{project}</li>
          })}
        </ul>
      </div>
    </div >
  );
}

export default App;
