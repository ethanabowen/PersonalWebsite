import React from 'react';
import './Jobs.css';

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
    default: faIcon = faBriefcase;
  }

  return faIcon;
}

function Jobs(props) {
  return Object.keys(props.jobs).map(jobName => {
    return props.jobs[jobName]
      .map((job, index) => {
        return job.title === 'Intern' ?
          <div key={"intern" + index} />
          : <Job
            key={job.company + index}
            showtitle={index === 0}
            showdivider={props.jobs[jobName].length -1 === index}
            {...job}
          />;
      })
  });
}

function Job(props) {
  return (
    <div className={"card col-sm-10 col-xs-12"}>
      <div className="card-body">
        {props.showtitle &&
          <div className="card-title">
            <FontAwesomeIcon className="company-icon mr-3" icon={getIcon(props.icon)} />
            <a className="company" href={props.site}>{props.company}</a>
          </div>
        }
        <div className="card-subtitle">
          <div className="row">
            <span className="col">{props.title}</span>
            <span className="col text-right">{props.startDate} - {props.endDate}</span>
          </div>
        </div>
        <div className="card-text">
          <ul>
            {props.details != null && props.details.map((detail, index) => {
              return <li key={props.company + ",detail" + String(index)} >{detail}</li>
            })}
          </ul>
        </div>
      </div>
      {props.company !== "BNSF Railway" && props.showdivider &&
        <hr className="divider" />
      }
    </div>
  )
}

export default Jobs;
