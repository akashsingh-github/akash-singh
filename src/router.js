import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Home from "./Component/Home/index";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Skills from "./Component/Skills";
import MiniProjects from "./Component/MiniProjects";
import Nav from "./Component/Nav/nav";
function Routers(props){
    const isDarkTheme = props.isDarkTheme;
    return(
        <BrowserRouter>
            <Nav isDarkTheme={isDarkTheme}/>
            <Switch>
                <Route exact path="/" render={() => (
                    <Home isDarkTheme={isDarkTheme}/>
                )} />
                <Route exact path="/about" render={() => (
                    <About isDarkTheme={isDarkTheme}/>
                )} />
                <Route exact path="/skills" render={() => (
                    <Skills isDarkTheme={isDarkTheme}/>
                )} />
                <Route exact path="/mini-projects" render={() => (
                    <MiniProjects isDarkTheme={isDarkTheme}/>
                )} />
                <Route exact path="/contact" render={() => (
                    <Contact isDarkTheme={isDarkTheme}/>
                )} />

            </Switch>
        </BrowserRouter>
    )
}
export default Routers;