import React from "react";
import { Route } from "react-router-dom";

import Home from "./Components/Home.js";
import Navbar from "./Components/Navbar.js";

import "./App.css";
import CloutCharts from "./Components/CloutCharts/CloutCharts.js";
import Revitalize from "./Components/Revitalize/Revitalize.js";
import QuestForTheBest from "./Components/Q4TB/QuestForTheBest.js";
import SolveEmployment from "./Components/SolveEmployment/SolveEmployment.js";
import About from "./Components/About.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/cloutcharts" component={CloutCharts} />
      <Route exact path="/revitalize" component={Revitalize} />
      <Route exact path="/questforthebest" component={QuestForTheBest} />
      <Route exact path="/solve-employment" component={SolveEmployment} />
      <Route exact path="/about" component={About} />
    </div>
  );
}

export default App;
