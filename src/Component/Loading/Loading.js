import React from "react";

function Loading(props){
    const isDarkTheme = props.isDarkTheme;
    return(
        <>
            <div className={isDarkTheme ? "dark-theme loading-page" : "light-theme loading-page"}>
                <div className="center-loading">
                    <div className="logo-card">
                        <div className="logo-span a">A</div>
                        <div className="logo-span s">S</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Loading;