import React, {useState, useEffect} from "react";
import Loading from "../Loading/Loading";

import MainContact from "./contact";
function Contact(props){
    const isDarkTheme = props.isDarkTheme;
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
        setLoading(false);
        }, 5000);
        return () => clearTimeout(timer)
    }, [])
    return(
        <>
            {loading ? <Loading isDarkTheme={isDarkTheme}/> : <MainContact isDarkTheme={isDarkTheme}/>}
        </>
    )

    
}
export default Contact;