import './App.css';
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Search from './components/Search';
import Contact from './components/Contact';
import Login from './components/Login';
import LoggedIn from './components/LoggedIn';
import Dashboard from './components/Dashboard';
import Post from './components/Post';
import Manage from './components/Manage';
import CreateUser from './components/CreateUser';

function App() {

  return (
    <Router>
      <div className="Pages">
        <Switch>
          {/* <Route path="/Home">
            <Home />
          </Route> */}

          {/* <Route path="/About">
            <About />
          </Route> */}

          {/* <Route path="/Search">
            <Search />
          </Route> */}

          {/* <Route path="/Contact">
            <Contact />
          </Route> */}

          <Route path="/Login">
            <Login />
          </Route>

          <Route path="/CreateUser">
            <CreateUser />
          </Route>
          
          {/* <Route path="/Dashboard">
            <Dashboard />
          </Route> */}

          {/* <Route path="/LoggedIn">
            <LoggedIn {...isLoggedIn ? <Dashboard /> : <Redirect to="/Login" />} />
          </Route> */}

          {/* <Route path="Post">
            <Post />
          </Route> */}

          {/* <Route path="Manage">
            <Manage />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
