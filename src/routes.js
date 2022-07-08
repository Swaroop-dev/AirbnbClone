import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import About from "./Components/About"


export default function MainRoute() {
  return (
    <Router>
      <Routes>
        <Route exact path="/about" element={<About/>} />       
        <Route exact path="/" element={<App/>} />       
      </Routes>
    </Router>
  );
}
