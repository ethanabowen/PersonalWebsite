import React, { useEffect, useState } from 'react'
import './App.css';
import Job from './Job';
import Education from './Education';

import { API } from "aws-amplify";

import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

function App() {

  const [jobs, updateJobs] = useState([]);
  const educationTTU = {
    school: "Texas Tech University",
    degree: "Bachelor's of Science in Computer Science",
    year: 2012
  }

  const educationUTA = {
    school: "University of Texas at Arlington",
    degree: "Master’s of Science in Computer Science",
    year: 2016
  }

  const cbordCSGold = {
    company: "CBORD",
    title: "dev",
    startDate: "1234",
    endDate: "5678"
  }

  const cbordPlatform = {
    company: "CBORD",
    title: "dev",
    startDate: "1234",
    endDate: "5678"
  }

  async function loadJob() {
    let resp = await API.get("resumeapi", "/jobs")
      .then(response => {
        // Add your code here
        console.log("success!", response);
        updateJobs(response.jobs);
      })
      .catch(error => {
        console.log("error", error.response);
      });

    console.log("resp", resp);

    return resp;
  }
  useEffect(() => {
    loadJob();
  });

  return (
    <div className="App">
      <Education {...educationUTA} />
      <Education {...educationTTU} />

      <Job  {...cbordPlatform}/>
      <Job  {...cbordCSGold}/>
      <Job company="Lockheed Marin" title="dev" startDate="09/2018" endDate="04/2019"
        details={[
          "Built a plugin-based dependency injection library using native Java.",
          "Refactored and heavily optimized entire CI/CD pipeline via Jenkins/Groovy."]}
      />
      <Job company="Pier 1" title="dev" startDate="1234" endDate="5678" />
      <Job company="BNSF" title="dev" startDate="1234" endDate="5678" />
    </div>
  );
}

export default App;
