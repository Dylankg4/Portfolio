import React, {useState} from "react";
import axios from 'axios'
import './ContactMe.css'

export default function ContactMe(){
    const [ sent, setSent ] = useState(false)
	const [ text, setText ] = useState({
		name: "",
		email: "",
		message: "",
	})

	const handleSend = async () => {
		setSent(true)
		try {
			await axios.post("http://localhost:4000/send_mail", {
				text
			})
		} catch (error) {
			console.log(error)
		}
	}

	const handleChange = (e) =>{
		setText({
			...text,
			[e.target.name]: e.target.value,
		})
		console.log(text, e.target.name)
	}


    function handleClick(){
        window.open('https://www.linkedin.com/in/dylankgardner/')
    }

    return(
        <div className="contactForm">
            <div className="link" onClick={handleClick}>
                <img className="image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/2048px-LinkedIn_icon_circle.svg.png" alt="LinkedIn logo"></img>
            </div>

			<div className="email">
			<h1 className="title">Contact me.</h1>
            {!sent ? (
				<form className='form' onSubmit={handleSend}>
					<input name="name" placeholder="Name" value={text.name} onChange={handleChange}></input>
					<input name="email" placeholder="Email" value={text.email} onChange={handleChange}></input>
					<textarea type="text" name="message" placeholder="Message" value={text.message} onChange={handleChange} />

					<button className="formButton">Send Email</button>
				</form>
			) : (
				<h1>Email Sent</h1>
			)}
			</div>
            
        </div>
    )
}