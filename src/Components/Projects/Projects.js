import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import './Projects.css';

import { collegeProjects, hobbyProjects } from '../../Constants.js';

function Projects(props) {
  return <>
    <div className="section-header">Projects</div>
    <div className="row justify-content-center">
      {hobbyProjects.map((project, index) => {
        return <HobbyProject key={"hobbyProject" + index} {...project} />;
      })}
    </div>

    <div className="section-header">College</div>
    <div className="row justify-content-center pb-5">
      <ul className="col-9">
        {collegeProjects.map((project, index) => {
          return <li key={"collegeProject" + index} >{project}</li>
        })}
      </ul>
    </div>
  </>
}

function HobbyProject(props) {
  return (
    <>
      <div className="row-12 pt-5"><h1 className="text-center">{props.title}</h1></div>
      <div className="row justify-content-center pt-2 pb-2">
        <div className="col-lg-3 col-sm-4">
          <span className="row">Last Publish Date: {props.lastPublishDate}</span>
          {props.gitHubUrl && <span className="row"><a className="social-icon" href={props.gitHubUrl} ><FontAwesomeIcon icon={faGithub} /> GitHub Repository</a></span>}
        </div>
        <div className="col-lg-6 col-sm-10 justify-content-left">
          <div className="row"><strong>Description:</strong> <div dangerouslySetInnerHTML={{__html: props.description}} /></div>

          {props.credits &&
            <div className="">
              <span className="row pt-4"><strong>Credits:</strong></span>
              <div className="row justify-content-center"><ul className="col-9">
                {props.credits.map((credit, index) => {
                  return <li key={"credit" + index} ><a href={credit.link}>{credit.title}</a></li>
                })}
              </ul>
              </div>
            </div>
          }
        </div>
      </div>
      {/*Not an awesome appoach, but for very custom project contents, they can be placed in the Constants.js file for direct injection (html included)*/}
      <div className="row-12">{props.contents}</div>
    </>
  )
}

export default Projects;
