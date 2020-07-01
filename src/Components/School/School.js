import React from 'react';
import './School.css';

function School(props) {
  return (
    <div className="col-md-6 col-sm-12 col-xs-12 text-center pt-3">
      <div>{props.school} - {props.year}</div>
      <div>{props.degree}</div>
    </div >
  );
}

export default School;
