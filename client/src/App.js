import './App.css';
<<<<<<< HEAD
import ContactForm from './components/ContactForm';
=======
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Cookies from 'js-cookie';
import Home from './components/Home';
import About from './components/About';
import Search from './components/Search';
import Contact from './components/Contact';
import Login from './components/Login';
import LoggedIn from './components/LoggedIn';
import Dashboard from './components/Dashboard';
import Post from './components/Post';
import Manage from './components/Manage';

const isCookie = function() {
  const cookie = Cookies.get("token");
  return !!cookie;
}
>>>>>>> 634db7a5778a0739be62e0494df33269f510c902

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(isCookie());

  return (
<<<<<<< HEAD
    <div className="App">
 <ContactForm />
    </div>
=======
    <Router>
      <div className="Pages">
        <Nav />
        <Switch>
          <Route path="/Home">
            <Home />
          </Route>

          <Route path="/About">
            <About />
          </Route>

          <Route path="/Search">
            <Search />
          </Route>

          <Route path="/Contact">
            <Contact />
          </Route>

          <Route path="/Login">
            <Login setIsLoggedIn={setIsLoggedIn}/>
          </Route>
          
          <Route path="/Dashboard">
            <Dashboard />
          </Route>

          <Route path="/LoggedIn">
            <LoggedIn {...isLoggedIn ? <Dashboard /> : <Redirect to="/Login" />} />
          </Route>

          <Route path="Post">
            <Post />
          </Route>

          <Route path="Manage">
            <Manage />
          </Route>
        </Switch>
      </div>
    </Router>
>>>>>>> 634db7a5778a0739be62e0494df33269f510c902
  );
}

export default App;
