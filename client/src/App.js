import "./App.scss";
import React, { useState } from "react";
import About from './components/About';
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import PetProfile from "./components/PetProfile";
import ContactForm from "./components/ContactForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/profile" component={PetProfile} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={ContactForm} />
      </Switch>
    </Router>
  );
}

export default App;
