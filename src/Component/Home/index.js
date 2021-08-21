import React,{useState, useEffect} from "react";

import Loading from "../Loading/Loading";
import HomeComponent from "./home";
function Home(props){
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
            {loading ? <Loading isDarkTheme={isDarkTheme}/> : <HomeComponent isDarkTheme={isDarkTheme}/>}
            {/* <HomeComponent isDarkTheme={isDarkTheme}/> */}
        </>
    )
}
export default Home;