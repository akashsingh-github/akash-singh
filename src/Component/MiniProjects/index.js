import React, {useState, useEffect} from "react";
import Project from "./projects";
import {projectCollection} from "./projectCollection";
import ProjectComponent from "./projectComponent";
import Loading from "../Loading/Loading";
function MiniProjects(props){
    const isDarkTheme = props.isDarkTheme;
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
        setLoading(false);
        console.log("time fired!!");
        console.log(loading)
        }, 5000);
        return () => clearTimeout(timer)
    }, [])
    return(
        <>
            {loading ? <Loading isDarkTheme={isDarkTheme}/> : <ProjectComponent isDarkTheme={isDarkTheme} />}
        </>
    )
}
export default MiniProjects;