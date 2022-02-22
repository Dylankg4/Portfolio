import React, {useState} from "react"
import { useHistory } from "react-router-dom"
import './Nav.css'


export default function Nav() {
    const history = useHistory()
    const [action, setAction] = useState(false);

    return(
        <div className="menu">
            <div className="github-link" onClick={()=>window.open('https://github.com/Dylankg4')}>
                <img className="github-img" src="https://www.nicepng.com/png/full/52-520535_free-files-github-github-icon-png-white.png" alt="Github"></img>
            </div>

            <div className="linkedin-link" onClick={()=> {
                window.open('https://www.linkedin.com/in/dylankgardner/')
            }}>
                <img className="linkedin-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/2048px-LinkedIn_icon_circle.svg.png" alt="LinkedIn logo"></img>
                
            </div>

            <ul className={action ? "show" : "hide"}>
                <li><button onClick={()=>history.push('/')}>About me</button></li>
                <li><button onClick={()=>history.push('/Portfolio')}>Portfolio</button></li>
                <li><button onClick={()=>history.push('/ContactMe')}>Contact me</button></li>
            </ul>

            <button className="menuButton" onClick={()=> setAction(!action)}>
                <i className="bi bi-list"></i>
            </button>
        </div>
    )
}