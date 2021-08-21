import React from "react";

import Project from "./projects";
import {projectCollection} from "./projectCollection";

function ProjectComponent(props){
    const isDarkTheme = props.isDarkTheme;
    const projectMap = projectCollection.map((project, i) => {
        return <Project key={project.id} id={project.id} description={project.description} title={project.title} thumbnail={project.thumbnail} gitLink={project.gitLink} technologies={project.technologies} />
    })
    return(
        <>
            <div className={isDarkTheme ? 'dark-theme page' : 'light-theme page' }>
                <div className="page-heading">
                    <h1>MINI PROJECTS</h1>
                </div>
                <div className="page-description">
                As I am Fresher to this work I don’t have any big project worked for any clients but there are few mini project done by me:
                </div>
                <div className="projects">
                    {projectMap}
                </div>
            </div>  
        </>
    )
}
export default ProjectComponent;