import React, {useState, useEffect} from "react";
import SkillComponent from "./skill";
import Loading from "../Loading/Loading";
function Skills(props){
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
            {/* <Loading isDarkTheme={isDarkTheme}/> */}
            {loading ? <Loading isDarkTheme={isDarkTheme}/> : <SkillComponent isDarkTheme={isDarkTheme}/>}
            {/* <HomeComponent isDarkTheme={isDarkTheme}/> */}
        </>
    )
}
export default Skills;