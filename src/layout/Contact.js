import React from "react";
import './Contact.css'

export default function Contact(){
    function handleClick(){
        window.open('https://www.linkedin.com/in/dylankgardner/')
    }

    return(
        <div>
            <div className="link" onClick={handleClick}>
                <img className="image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/2048px-LinkedIn_icon_circle.svg.png" alt="LinkedIn logo"></img>
                
            </div>
            
        </div>
    )
}