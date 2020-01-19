import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import Footer from "./Components/Footer";

ReactDOM.render(
  <Router>
    <App />
    <Footer />
  </Router>,
  document.getElementById("root")
);
