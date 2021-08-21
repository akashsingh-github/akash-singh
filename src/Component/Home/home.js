import React from "react";

function HomeComponent(props){
    const isDarkTheme = props.isDarkTheme;
    return(
        <div className={isDarkTheme ? 'home dark-theme page' : 'home light-theme page'}>
           <div className="home-page-headings">
                <h1 className="first-head">Hi,</h1>
                <h1 className="second-head">I am <span>Akash</span>,</h1>
                <h1 className="third-head"><span>Front end developer</span></h1>
            </div>
            <p className="page-p">Front end with basic knowledge of backend</p>

            <a href="#" className="contact-btn">CONTACT</a>
        </div>
    )
}
export default HomeComponent;