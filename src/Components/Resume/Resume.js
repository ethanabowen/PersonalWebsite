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
            <a href="https://www.credly.com/badges/f866b75d-7266-4b06-83bf-a8d1c535e95c">
              <img width="155" height="155" alt="" src="https://images.credly.com/size/340x340/images/68468004-5a85-4f3b-bc58-590773979486/AWS-CloudPractitioner-2020.png" />
            </a>
          </div>
          <div className="row place-content-center">
            <span>12/21 - 12/24</span>
          </div>
        </div>
        <div className="col-auto">
          <div className="row">
            <a href="https://www.credly.com/badges/3a7b71a8-fd59-41a4-be34-359e292487b5">
              <img width="155" height="155" alt="" src="https://images.credly.com/size/340x340/images/598f6ac6-2dbd-4394-8ae4-943b2f4c43ea/AWS-Developer-Associate-2020.png" />
            </a>
          </div>
          <div className="row place-content-center">
            <span>12/21 - 12/24</span>
          </div>
        </div>
        <div className="col-auto">
          <div className="row">
            <a href="https://www.credly.com/badges/1e44a067-d3ba-47cc-8a80-3e4c9e9fc670">
              <img width="155" height="155" alt="" src="https://images.credly.com/size/340x340/images/4bc21d8b-4afe-4fbd-9a90-a9de8bf7b240/AWS-SolArchitect-Associate-2020.png" />
            </a>
          </div>
          <div className="row place-content-center">
            <span>08/21 - 08/24</span>
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
