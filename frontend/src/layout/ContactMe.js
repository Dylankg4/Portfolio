import React, {useState} from "react";
import axios from 'axios'
import './ContactMe.css'

export default function ContactMe(){
    const [ sent, setSent ] = useState(false)
	const [ text, setText ] = useState("")
	const handleSend = async (e) => {
		setSent(true)
		try {
			await axios.post("http://localhost:4000/send_mail", {
				text
			})
		} catch (error) {
			console.log(error)
		}
	}


    function handleClick(){
        window.open('https://www.linkedin.com/in/dylankgardner/')
    }

    return(
        <div>
            <div className="link" onClick={handleClick}>
                <img className="image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/2048px-LinkedIn_icon_circle.svg.png" alt="LinkedIn logo"></img>
                
            </div>
            {!sent ? (
				<form onSubmit={handleSend}>
					<input type="text" value={text} onChange={(e) => setText(e.target.value)} />

					<button>Send Email</button>
				</form>
			) : (
				<h1>Email Sent</h1>
			)}
            
        </div>
    )
}