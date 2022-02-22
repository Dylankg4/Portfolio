import React, {useState} from "react";
import './Portfolio.css'

export default function Portfolio() {
    const [card, setCard] = useState(0)

    const projects = [
        {
            name: 'Restaurant reservation app',
            type: 'Fullstack web application',
            tools: 'Javascript, HTML, CSS, React, Node, Express, Knex, PostgreSQL',
            description: 'Designed so that customers can make reservations at a restaurant on days that are open and available.',
            link: 'https://github.com/Dylankg4/Restaurant-reservations-project',
        },
        {
            name: 'We love Movies',
            type: 'Backend web application',
            tools: 'Javascript, Node, Express, Knex, PostgreSQL',
            description: 'Application to look through movies and what theaters they are playing at',
            link: 'https://github.com/Dylankg4/We-Love-Movies',
        },
        {
            name: 'Flashcard App',
            type: '',
            tools: '',
            description: '',
            link: '',
        },
        {
            name: 'ThinkfulBNB',
            type: '',
            tools: '',
            description: '',
            link: '',
        },
        {
            name: 'Pomodoro timer',
            type: '',
            tools: '',
            description: '',
            link: '',
        },
    ]

    function projectRender() {
        return (
            <>
                {
                projects.map((project, idx)=>{
                    return <div onClick={() => setCard(idx)} className={card === idx ? `project expand`: 'project small'} key={idx}><h3 className="projectTitle">{project.name}</h3>
                    <p className="projectText">{project.tools}</p>
                    <p className="projectText">{project.description}</p>
                    <a href={project.link}>Github</a>
                    </div>
                })
                }
            </>
        )
    }

    return (
        <div className="portfolio">
            <div className="link" onClick={()=>window.open('https://github.com/Dylankg4')}>
                <img className="github" src="https://www.nicepng.com/png/full/52-520535_free-files-github-github-icon-png-white.png" alt='Github logo'></img>
            </div>
            <h1 className="pageTitle">Portfolio</h1>
            <div className="projects">
            {projectRender()}
            </div>
        </div>
    )
}