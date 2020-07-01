import React from 'react'
import './App.css';

import Personal from '../Personal/Personal';
import School from '../School/School';
import Jobs from '../Jobs/Jobs';
import Skills from '../Skills/Skills';  

import { welcome, personal, schools, jobs, skills, projects } from '../../Constants.js';

function App() {
  console.log(welcome);

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

      <div className="section-header justify-content-center">Tech Skills</div>
      <div className="row justify-content-center">
        <Skills skills={skills} />
      </div>

      <div className="section-header">Experience ({personal.yearsExperience}+ years)</div>
      <div className="row justify-content-center">
        <Jobs jobs={jobs} />
      </div>

      <div className="section-header">Projects</div>
      <div className="row justify-content-center very-bottom-margin">
        <ul className="col-9">
          {projects.map((project, index) => {
            return <li key={"project" + index} >{project}</li>
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
