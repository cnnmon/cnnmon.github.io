import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Home from './screens/Home.js';
import About from './screens/About.js';
import Work from './screens/Work.js';
import './App.scss';

function App() {

  return (
    <Router>
      <div className="App">
        <div className="navigation">
          <NavLink exact to="/" className="navLink" activeClassName="activeNavLink">TIFFANYWANG</NavLink>
          <div className="right">
            <NavLink exact to="/about" className="navLink" activeClassName="activeNavLink">ABOUT</NavLink>
            <NavLink exact to="/work" className="navLink" activeClassName="activeNavLink">WORK</NavLink>
          </div>
        </div>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/work">
            <Work />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
