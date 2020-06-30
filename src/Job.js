import React from 'react';
import './Job.css';

function Job(props) {
  return (
    <div className={"card " + props.className}>
      <div className="card-body">
        <div className="card-title">
          <a href={props.site}>{props.company}</a>
        </div>
        <div className="card-subtitle">
          <div className="row">
            <span className="col">{props.startDate} - {props.endDate}</span>
            <span className="col pl-3">{props.title}</span></div>
        </div>
        <div className="card-text">
          <ul>
            {props.details != null && props.details.map((detail, index) => {
              return <li key={props.company + String(index)} >{detail}</li>
            })}
          </ul>
        </div>
      </div>

    </div>
  )
}

export default Job;
