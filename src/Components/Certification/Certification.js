import React from 'react';
import './Certification.css';

function Certification(props) {
  return (
    <div className="col-auto">
      <div className="row">
        <a href={props.link}>
          <img className="cert-image-dimensions" alt="" src={props.image} />
        </a>
      </div>
      <div className="row place-content-center">
        <span>{props.startDate} - {props.endDate}</span>
      </div>
    </div>
  );
}

export default Certification;
