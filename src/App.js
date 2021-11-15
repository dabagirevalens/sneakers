import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Men from "./components/Men";
import Women from "./components/Women";

import "./App.css";

const App =() =>{
  return (
    <BrowserRouter>
      <Routes>
        <Route excat path="/" element={ <Home />} />
        <Route  path="/about" element={ <About />} />
        <Route  path="/contact" element={ <Contact />} />
        <Route  path="/collections/men" element={ <Men />} />
        <Route  path="/collections/women" element={ <Women />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
