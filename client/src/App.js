import './App.css';
import React, { useState } from "react";
import Dashboard from './components/Dashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {

  return (
    <Dashboard />
  );
}

export default App;
