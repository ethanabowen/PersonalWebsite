import React, { useEffect, useState } from 'react'
import './App.css';
import Job from './Job';
import Education from './Education';

import { API } from "aws-amplify";

import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

function App() {

  const [jobs, updateJobs] = useState([]);
  const education = {
    school: "Texas Tech University",
    degree: "Bachelor's of Science in Computer Science",
    startDate: "August 2008",
    endDate: "May 2012"
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
      <Education {...education} />
      <Education {...education} />

      <Job company="CBORD" title="dev" startDate="1234" endDate="5678" />
      <Job company="Lockheed Marin" title="dev" startDate="1234" endDate="5678" />
      <Job company="Pier 1" title="dev" startDate="1234" endDate="5678" />
      <Job company="BNSF" title="dev" startDate="1234" endDate="5678" />
    </div>
  );
}

export default App;
