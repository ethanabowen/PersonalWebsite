import React from 'react';
import logo from './logo.svg';
import './Education.css';

function Education(props) {
  return (
    <div className="Education">
      <header className="Education__Header">
        {/*<img src={logo} className="Job__Logo" alt="logo" />*/}
        {props.school}
      </header>
      {props.degree}
      {props.year}
    </div>
  );
}

export default Education;
