import "./App.scss";

import React, { useState, useEffect } from "react";
import About from './components/About';
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import PetProfile from "./components/PetProfile";
import ContactForm from "./components/ContactForm";
import Cookies from 'js-cookie';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

function App() {
  const [petPool, setPetPool] = useState([]);
  const [petPoolTrigger, setPetPoolTrigger] = useState(true)

  const [userPool, setUserPool] = useState([]);
  const [userPoolTrigger, setUserPoolTrigger] = useState(true)

  const getPetPool = async () => {
    const response = await axios.get('http://localhost:4000/getPets');
    console.log(response.data);
    setPetPool(response.data);
    setPetPoolTrigger(false);
  }

  const getUserPool = async () => {
    const response = await axios.get('http://localhost:4000/getUsers');
    setUserPool(response.data);
    setUserPoolTrigger(false);
  }

  useEffect(() => {
    if (petPoolTrigger === true) {
      getPetPool();
    }
    if (userPoolTrigger === true) {
      getUserPool();
    }
  });

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route 
        path="/profile" 
        component={PetProfile}
        petPool={petPool} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={ContactForm} />
      </Switch>
    </Router>
  );
}

export default App;