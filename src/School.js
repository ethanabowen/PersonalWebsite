import React from 'react';
import './School.css';

function School(props) {
  return (
    <div className={props.className}>
      <div>{props.school} - { props.year }</div>
      <div>{ props.degree }</div>
    </div >
  );
}

export default School;
