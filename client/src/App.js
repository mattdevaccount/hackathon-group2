import './App.css';
import React, { useState } from "react";
import ContactForm from './components/ContactForm'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
// import Cookies from 'js-cookie';
// import Home from './components/Home';
// import About from './components/About';
// import Search from './components/Search';
// import Contact from './components/Contact';
// import Login from './components/Login';
// import LoggedIn from './components/LoggedIn';
// import Dashboard from './components/Dashboard';
// import Post from './components/Post';
// import Manage from './components/Manage';

// const isCookie = function() {
//   const cookie = Cookies.get("token");
//   return !!cookie;
// }

function App() {

  // const [isLoggedIn, setIsLoggedIn] = useState(isCookie());

  return (
    // <Router>
    //   <div className="Pages">
    //     <Nav />
    //     <Switch>
    //       <Route path="/Home">
    //         <Home />
    //       </Route>

    //       <Route path="/About">
    //         <About />
    //       </Route>

    //       <Route path="/Search">
    //         <Search />
    //       </Route>

    //       <Route path="/Contact">
    //         <Contact />
    //       </Route>

    //       <Route path="/Login">
    //         <Login setIsLoggedIn={setIsLoggedIn}/>
    //       </Route>
          
    //       <Route path="/Dashboard">
    //         <Dashboard />
    //       </Route>

    //       <Route path="/LoggedIn">
    //         <LoggedIn {...isLoggedIn ? <Dashboard /> : <Redirect to="/Login" />} />
    //       </Route>

    //       <Route path="Post">
    //         <Post />
    //       </Route>

    //       <Route path="Manage">
    //         <Manage />
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>
    <ContactForm />
  );
}

export default App;
