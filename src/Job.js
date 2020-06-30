import React from 'react';
import logo from './logo.svg';
import './App.css';

function Job(props) {
  return (
    <div className="Job">
      <header className="Job__Header">
        {/*<img src={logo} className="Job__Logo" alt="logo" />*/}
        <p>
          {props.company}
        </p>
      </header>
      {props.title}
      {props.startDate} - {props.endDate}
    </div>
  );
}

export default Job;
