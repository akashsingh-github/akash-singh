import React from "react";

function SkillComponent(props){
    const isDarkTheme = props.isDarkTheme;
    return(
        <>
            <div className={isDarkTheme ? 'dark-theme page' : 'light-theme page' }>
                <div className="page-heading">
                    <h1>SKILLS & <br/>EXPERIENCE</h1>
                </div>
                <div className="half-split">
                    <div className="page-description">
                        <p>This will be the start of my journey in programming. Although I have done 2 internships.</p>
                        <p>First as a front end developer at Skyyrider online where the role was to integrate APIs into the application using React and Redux and handle the UI part of the system.</p>
                        <p>Second as a SEO where I have written few articles on a talented actor Ayushmann Khurrana and a famous photographer Atul Kasbekar.</p>
                    </div>
                    <div className="skills-container">
                        <div className="skills">
                            <div className="skill">
                                <h3>Front end</h3>
                                <div className="skill-percentage front-end"></div>
                            </div>
                            <div className="skill">
                                <h3>Back end</h3>
                                <div className="skill-percentage back-end"></div>
                            </div>
                            <div className="skill">
                                <h3>React</h3>
                                <div className="skill-percentage react"></div>
                            </div>
                            <div className="skill">
                                <h3>MongoDB and MySQL</h3>
                                <div className="skill-percentage db"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
export default SkillComponent;