import React from "react";
import { Route } from "react-router-dom";

import Home from "./Components/Home.js";
import Navbar from "./Components/Navbar.js";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/" component={Home} />
      {/* <Home /> */}
    </div>
  );
}

export default App;
