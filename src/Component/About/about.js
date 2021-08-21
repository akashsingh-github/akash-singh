import React from "react";
import {withRouter} from "react-router-dom";

function AboutComponent(props){
    const isDarkTheme = props.isDarkTheme;
    return(
        <>
            <div className={isDarkTheme ? 'about dark-theme page' : 'about light-theme page' }>
                <div className="page-heading">
                    <h1>I, Me and Myself</h1>
                </div>
                <div className="half-split">
                    <div className="page-description">
                        <p>I am front end developer belongs to Kalyan (Near mumbai) from Maharashtra, India. I have serious passion for UI, animations and creating dynamic user experience. </p>
                        <p>Disciplined person, fast learner. I am currently in my Final year of engineering and completed Diploma in computer engineering from mumbai university. Loves to sing and play cricket. Fan of Rohit Sharma and like to watch cricket and tennis.</p>
                    </div>
                    <div className="about-highlight">
                        <ul>
                            <div className="list-flex">
                                <li className="list-heading">Birthday</li>
                                <li className="list-content">25 Dec 2000</li>
                            </div>
                            <div className="list-flex">
                                <li className="list-heading">Age</li>
                                <li className="list-content">21</li>
                            </div>
                            <div className="list-flex">
                                <li className="list-heading">Email</li>
                                <li className="list-content"> akash9321singh</li>
                            </div>
                            <div className="list-flex">
                                <li className="list-heading">Mobile No.</li>
                                <li className="list-content">+91 9321585085</li>
                            </div>
                            <div className="list-flex">
                                <li className="list-heading">Study</li>
                                <li className="list-content">BE in Computer Engineering</li>
                            </div>
                            <div className="list-flex">
                                <li className="list-heading">Address</li>
                                <li className="list-content address"> Adivali, Kalyan (E), Thane, Maharashtra - 421 306</li>
                            </div>
                            <div className="list-flex">
                                <li className="list-heading">Freelance</li>
                                <li className="list-content"> Available</li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AboutComponent;