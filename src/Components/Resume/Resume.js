import React from 'react'
import './Resume.css';

import Personal from '../Personal/Personal';
import School from '../School/School';
import Jobs from '../Jobs/Jobs';
import Skills from '../Skills/Skills';
import Certification from '../Certification/Certification';

import { personal, certifications, schools, jobs, skills } from '../../Constants.js';

function Resume() {
  return (
    <>
      <Personal {...personal} />

      <div className="section-header">Education</div>
      <div className="row justify-content-center">
        {schools.map((school, index) => {
          return <School
            key={school.school + index}
            {...school} />
        })}
      </div>

      <div className="section-header">Certificates</div>
      <div className="row justify-content-center">
        {certifications.map((certification, index) => {
          return <Certification
            key={certification.name + index}
            {...certification} />
        })}
      </div>

      <div className="section-header">Tech Skills</div>
      <div className="row">
        <Skills skills={skills} />
      </div>

      <div className="section-header">Experience ({personal.yearsExperience}+ years)</div>
      <div className="row justify-content-center">
        <Jobs jobs={jobs} />
      </div>

      <div className="section-header">Projects</div>
      <div className="row col justify-content-center pb-5">
        I highly encourage visiting the Projects page on my website and my GitHub page.
      </div>
    </>
  );
}

export default Resume;
