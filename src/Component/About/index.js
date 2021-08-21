import React, {useState, useEffect} from "react";
import AboutComponent from "./about";
import Loading from "../Loading/Loading";
function About(props){
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
            {loading ? <Loading isDarkTheme={isDarkTheme}/> : <AboutComponent isDarkTheme={isDarkTheme}/>}
            {/* <HomeComponent isDarkTheme={isDarkTheme}/> */}
        </>
    )
}
export default About;