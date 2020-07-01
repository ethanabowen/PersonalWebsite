import React from 'react';
import './Job.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faStore, faTrain, faFighterJet, faUniversity, faDna, faBriefcase } from '@fortawesome/free-solid-svg-icons'

function getIcon(icon) {
  var faIcon = faBriefcase;
  switch (icon) {
    case 'university': faIcon = faUniversity; break;
    case 'fighter-jet': faIcon = faFighterJet; break;
    case 'store': faIcon = faStore; break;
    case 'train': faIcon = faTrain; break;
    case 'dna': faIcon = faDna; break;
  }

  return faIcon;
}

function Job(props) {
  return (
    <div className={"card " + props.className}>
      <div className="card-body">
        <div className="card-title">
          <FontAwesomeIcon className="company-icon mr-3" icon={getIcon(props.icon)} />
          <a className="company" href={props.site}>{props.company}</a>
        </div>
        <div className="card-subtitle">
          <div className="row">
            <span className="col">{props.title}</span>
            <span className="col text-right">{props.startDate} - {props.endDate}</span>
          </div>
        </div>
        <div className="card-text">
          <ul>
            {props.details != null && props.details.map((detail, index) => {
              return <li key={props.company + String(index)} >{detail}</li>
            })}
          </ul>
        </div>
      </div>
      {props.company !== "BNSF Railway" &&
        <hr className="divider" />
      }
    </div>
  )
}

export default Job;
