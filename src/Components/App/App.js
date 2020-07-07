import React from 'react'
import { Switch, Route, Link } from "react-router-dom";

import './App.css';
import { Navbar, Nav } from 'react-bootstrap';

import Resume from '../Resume/Resume';
import Projects from '../Projects/Projects';
import { welcome } from '../../Constants.js';

function App() {
  console.log(welcome);

  return (
    <div className="container">
      <Navbar expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link className="font-weight-bold" as={Link} to="/">Home</Nav.Link>
            <Nav.Link className="font-weight-bold" as={Link} to="/resume">Resume</Nav.Link>
            <Nav.Link className="font-weight-bold" as={Link} to="/projects">Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/resume">
          <Resume />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/">
          <Resume />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
