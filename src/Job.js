import React from 'react';
import logo from './logo.svg';
import './Job.css';

function Job(props) {
  return (
    <div className="Job col-6">
      <header className="Job__Header">
        {/*<img src={logo} className="Job__Logo" alt="logo" />*/}
        <p>
          {props.company}
        </p>
      </header>

      {props.title}
      {props.startDate} - {props.endDate}

      Roles/Projects:
      {props.details != null && props.details.map(detail => {
        return <div>{detail}</div>
      })}
    </div>
  );
}

export default Job;
