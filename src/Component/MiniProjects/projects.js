import React from "react";
import GitHubIcon from '@material-ui/icons/GitHub';

function Project(props){
    const {title, id, technologies, description, gitLink, thumbnail} = props;
    // console.log(technologies);
    const techMap = technologies.map((tech, i) => {
        return <li>{tech}</li>
    })
    return(
        <>
            <div className="project">
                <div className="project-thumbnail">
                    <img src={thumbnail}/>
                    <a className="git-link" href={gitLink}><GitHubIcon/> </a>
                </div>
                <div className="project-title">
                    <h2>{title}</h2>
                </div>
                <div className="project-description">
                    <p>{description}</p>
                </div>
                <div className="project-tech">
                    {techMap}
                </div>
            </div>
        </>
    )
}
export default Project;