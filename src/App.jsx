import React, { useState, useEffect } from "react";
import "./App.css";

// components
import Header from "./components/Header";
import Links from "./components/Links";

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

function Projects() {

  const [projects, setProjects] = useState([]);

  const projectsUrl = `http://localhost:3000/projects`;
  const getProjects = () => {
    fetch(projectsUrl)
      .then(res => res.json())
      .then(response => {
        setProjects(response)
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getProjects()
  }, []);

  return (
    <div>
      {projects.map(function (proj, index) {
        return <Project key={index} project={proj} />;
      })}
    </div>
  );
}


function Project(props) {
  return (
    <div>
      <h3>{props.project.title}</h3>
      <a href={props.project.url}>{props.project.url}</a>
    </div>
  );
}

export default App;
