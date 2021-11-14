import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Men from "./components/Men";
import Women from "./components/Women";

import "./App.css";

function App() {
  return (
   <Home />
  );
}

export default App;
