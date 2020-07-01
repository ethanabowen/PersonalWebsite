import React from 'react';
import './Skills.css';

function Skills(props) {
  return Object.keys(props.skills).map(techDomain => {
    return (
      <div key={techDomain} className="col-4 mx-auto">
        <div className="techdomain">{techDomain}</div>
        {props.skills[techDomain].sort((a, b) => a.proficiency > b.proficiency ? -1 : 1).map((skill, index) => {
          return <Skill
            key={skill.technology + index}
            {...skill}
          />
        })}
      </div>
    );

  });
}


function Skill(props) {
  return (

    <div className="row align-text-bottom">
      <div className="col-4">
        <span>{props.technology}</span>
      </div>
      <div className="row col">
        <div className={"proficiency-bar mb-1 text-center col-" + Math.floor(12 * props.proficiency / 10)}>{props.proficiency}</div>
        <div className={"proficiency-bar-nil mb-1 col-" + (12 - Math.floor(12 * props.proficiency / 10))} />
      </div>
    </div>
  )
}

export default Skills;
