import React from "react"
import Nav from "./Nav"
import AboutMe from "./AboutMe"
import Portfolio from "./Portfolio"
import ContactMe from "./ContactMe"
import './Layout.css'
import { Switch, Route } from "react-router-dom"

function Layout() {
    return(
        <div className="page">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog==" crossOrigin="anonymous" />
            <div className="nav">
                <Nav/>
            </div>
            <div className="content">
            <Switch>
                <Route exact path="/">
                    <AboutMe/>
                </Route>
                <Route path ="/portfolio">
                    <Portfolio/>
                </Route>
                <Route path="/ContactMe">
                    <ContactMe/>
                </Route>
            </Switch>
            </div>
            
        </div>
    )
}

export default Layout