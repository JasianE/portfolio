import React from 'react'
import TechSideBar from './TechSideBar'
import express from './Assets/express.png'

//takes in list of technologies, maps through them and put them in side bar
//Also takes in photo and link of each program, if link doesnt exist it doesnt add it
const ProjectCard = ({data}) => {
    const {name, technologies, photo, link} = data
    return(
        <div className = 'projectCard'>
            <h2 className = 'titleFor'>{name}</h2>
            <h3 className= 'techThisLmaoUntechableIAmGonzaloBarios'>TECH USED</h3>
            <img className = 'projectImage' alt = {name} src= {express}></img>
            <TechSideBar data = {technologies}/>
        </div>
    )
}

export default ProjectCard