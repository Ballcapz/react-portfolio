import React, { useState, useEffect } from 'react';

import './Projects.css';

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
        <div className="projectContainer">
            {projects.map(function (proj, index) {
                return <Project key={index} project={proj} />;
            })}
        </div>
    );
}

function Project(props) {
    return (
        <a href={props.project.url} className="project">
            <h3>{props.project.title}</h3>
            <img src={props.project.picture} alt="Example" />
            <a className="linkText" href={props.project.url}>{props.project.url}</a>
        </a>
    );
}

export default Projects;