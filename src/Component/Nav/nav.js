import React, {useState} from "react";
import {BrowserRouter,Link} from "react-router-dom";

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
function Nav(props){
    const isDarkTheme = props.isDarkTheme;
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleClick = (url) => {
        window.location = `/${url}`;
    }
    return(
        <div className={isMenuOpen ? 'open' : ''}>
            <div className={isDarkTheme  ? 'nav-body dark-theme' : 'nav-body light-theme'} >
                <div className="nav">
                    <div className="heading">
                        <div className="logo">
                            <Link to="/"><h1>Akash Singh</h1></Link>
                        </div>
                        <div className="tag-line">
                            Web developer
                        </div>
                    </div>
                    <ul className="nav-item-list">
                        <li className="nav-item"><Link to="/about" to="about" onClick={(e) => setIsMenuOpen(false)}>ABOUT</Link></li>    
                        <li className="nav-item"><Link to="/skills" onClick={(e) => setIsMenuOpen(false)}>MY SKILLS</Link></li>    
                        <li className="nav-item"><Link to="/mini-projects" onClick={(e) => setIsMenuOpen(false)}>MINI PROJECTS</Link></li>    
                        <li className="nav-item"><Link to="/contact" onClick={(e) => setIsMenuOpen(false)}>CONTACT</Link></li>    
                    </ul>  
                    <ul className="social-sites-list">
                        <li className="social-item"><a target="_blank" href="https://www.facebook.com/profile.php?id=100013632814153"><FacebookIcon/></a></li>
                        <li className="social-item"><a target="_blank" href="https://www.instagram.com/akash_singh2512/"><InstagramIcon/></a></li>
                        <li className="social-item"><a target="_blank" href="https://www.linkedin.com/in/akash-singh-05868a169/"><LinkedInIcon/></a></li>
                        <li className="social-item"><a target="_blank" href="https://github.com/akashsingh-github"><GitHubIcon/></a></li>
                        <li className="social-item"><a target="_blank" href=""><WhatsAppIcon/></a></li>
                    </ul>
                    <div className={isMenuOpen ? 'side-menu open' : 'side-menu'}>
                        <div className={isMenuOpen ? 'open line' : 'line'} onClick={(e) => setIsMenuOpen(!isMenuOpen)}>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Nav;