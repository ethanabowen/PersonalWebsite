import React from 'react'
import './Resume.css';

import Personal from '../Personal/Personal';
import School from '../School/School';
import Jobs from '../Jobs/Jobs';
import Skills from '../Skills/Skills';

import { personal, schools, jobs, skills } from '../../Constants.js';

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
      
        <div className="col-auto">
          <div className="row">
            <a href="https://www.youracclaim.com/badges/48949001-5ccb-4f7c-97bc-dab466b027c3/embedded">
              <img width="155" height="155" alt="" src="https://images.youracclaim.com/images/68468004-5a85-4f3b-bc58-590773979486/AWS-CloudPractitioner-2020.png" />
            </a>
          </div>
          <div className="row place-content-center">
            <span>09/20 - 09/23</span>
          </div>
        </div>
        <div className="col-auto">
          <div className="row">
              <img width="155" height="155" alt="" src="https://d1.awsstatic.com/training-and-certification/Certification%20Badges/AWS-Certified_Solutions-Architect_Associate_512x512.d82aee07920970350c427c8d0542bc239180a486.png" />
          </div>
          <div className="row place-content-center">
            <span>Testing May 1st</span>
          </div>
        </div>
        <div className="col-auto">
          <div className="row">
              <img width="155" height="155" alt="" src="https://d1.awsstatic.com/training-and-certification/Certification%20Badges/data-analytics-specialty-badge_512x512.f81954f771d19aebbeb21c337adadc9a79983c6e.png" />
          </div>
          <div className="row place-content-center">
            <span>Pursuing after SAA</span>
          </div>
        </div>
        
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
