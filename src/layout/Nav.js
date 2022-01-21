import React, {useState} from "react"
import { useHistory } from "react-router-dom"
import './Nav.css'


export default function Nav() {
    const history = useHistory()
    const [action, setAction] = useState(false);

    return(
        <div className="menu">
            
            <ul className={action ? "show" : "hide"}>
            <li><button onClick={()=>history.push('/')}>About me</button></li>
            <li><button onClick={()=>history.push('/portfolio')}>Portfolio</button></li>
            <li><button onClick={()=>history.push('/Contact')}>Contact me</button></li>
            </ul>

            <button className="menuButton" onClick={()=> setAction(!action)}><i class="fas fa-bars"></i></button>
        </div>
    )
}