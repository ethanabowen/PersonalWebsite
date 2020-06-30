import React from 'react';
import './Education.css';

function Education(props) {
  return (
    <div className={props.className}>
      <div>{props.school} - { props.year }</div>
      
      <div>{ props.degree }</div>
    </div >
  );
}

export default Education;
