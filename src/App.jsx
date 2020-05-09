import React, { useState, useEffect } from "react";
import "./App.css";

// components
import Header from "./components/Header";
import Links from "./components/Links";
import Projects from "./components/Projects";

function App() {
  return (
    <div className={"App"}>
      <Header />
      <Links />
      <h2 className="projects">Projects</h2>
      <Projects />
    </div>
  );
}






export default App;
