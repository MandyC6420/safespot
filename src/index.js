import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { Safespot } from "./components/Safespot"
import "./index.css"

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Safespot />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
