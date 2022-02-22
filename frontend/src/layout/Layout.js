import React from "react"
import Nav from "./Nav"
import AboutMe from "./AboutMe"
import Portfolio from "./Portfolio"
import ContactMe from "./ContactMe"
import './Layout.css'
import { Switch, Route, useLocation, useHistory } from "react-router-dom"

function Layout() {
    const history = useHistory()
    const location = useLocation()

    let left = false
    let right = true

    let leftPath = ''
    let rightPath = ''

    function pathName(e) {
        let classClick = e.target.className;
        if(classClick.includes('right')){
            if(location.pathname === '/Portfolio') {
                history.push('ContactMe')
            } else if (location.pathname === '/'){
                history.push('/Portfolio')
            }
        } else {
            if(location.pathname === '/Portfolio') {
                history.push('/')
            } else if (location.pathname === '/ContactMe'){
                history.push('/Portfolio')
            }
        }
    }

    if(location.pathname === '/Portfolio'){
        rightPath = 'Contact me'
        right = true
        leftPath = 'About me'
        left = true
    } else if(location.pathname === '/ContactMe') {
        rightPath = ''
        right = false
        leftPath = 'Portfolio'
        left = true
    } else {
        rightPath = 'Portfolio'
        right = true
        leftPath = ''
        left = false
    }

    return(
        <div className="page">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css" />

            <div className="nav">
                <Nav/>
            </div>

            
            <div className={ left ?
                `arrow left-arrow` : 
                `arrow left-arrow dark`
                } 
                onClick={pathName}>
                    <div  className="arrow-name">{`${leftPath}`}</div>
                <i className="bi bi-chevron-left"></i>
            </div>
            <div className={right ? `arrow right-arrow` : 'arrow right-arrow dark'} onClick={pathName}>
            <div className="arrow-name">{`${rightPath}`}</div>
                <i className="bi bi-chevron-right"></i>
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