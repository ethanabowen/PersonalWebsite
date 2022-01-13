import React from 'react';
import { Switch, Route } from "react-router-dom";
import Security from '../Security/Security';
import Storage from '../Storage/Storage';
import './Hub.css';

function Hub(props) {
  return (
    <div>
      <Route exact path="/hub/security" component={Security} />
      <Route exact path="/hub/storage" component={Storage} />
      Yoho yoho
    </div>
  );
}

export default Hub;
