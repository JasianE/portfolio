import React from 'react'
import ProjectCard from './ProjectCard'

const ProjectCardContainer = () => {
    let projects = [
        {
            technologies: ['REACT', 'NODEJS', 'EXPRESS', 'MONGODB', 'JAVASCRIPT', 'NPM', 'GIT'],
            photo: '',
            link: '',
            name: 'PoopBook'
        },
        {
            technologies: [],
            photo: '',
            link: '',
            name: 'Bad Blog App'
        },
        {
            technologies: [],
            photo: '',
            link: '',
            name: 'Battleship'
        },
        {
            technologies: [],
            photo: '',
            link: '',
            name: 'Another Todo-List'
        },
        {
            technologies: [],
            photo: '',
            link: '',
            name: 'Weather App'
        },
        {
            technologies: [],
            photo: '',
            link: '',
            name: 'Wheres Waldo'
        },
        {
            technologies: [],
            photo: '',
            link: '',
            name: 'Library'
        },
        {
            technologies: [],
            photo: '',
            link: '',
            name: 'Wheres Waldo'
        },
        {
            technologies: [],
            photo: '',
            link: '',
            name: 'Calculator'
        },
    ]
    for(let i = 0; i < projects.length; i++){
        projects[i].id = i
    }
    return(
        <div className = 'projectCardContainer'>
            {projects.map(key => <ProjectCard data = {key} key = {key.id}/>)}
        </div>
    )
}

export default ProjectCardContainer