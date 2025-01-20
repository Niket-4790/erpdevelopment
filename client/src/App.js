import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Show from "./view/show";
import Home from "./view/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/show" element={<Show />} />
      </Routes>
    </Router>
  );
}

export default App;
