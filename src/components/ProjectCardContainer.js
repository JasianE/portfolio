import React from 'react'
import ProjectCard from './ProjectCard'
import poopbook from './Assets/poopbook.png'
import battle from './Assets/Shots/battle.png'
import blog from './Assets/Shots/blog.png'
import calculator from './Assets/Shots/calculator.png'
import etch from './Assets/Shots/etch.png'
import library from './Assets/Shots/library.png'
import memory from './Assets/Shots/memory.png'
import tic from './Assets/Shots/tic.png'
import todo from './Assets/Shots/todo.png'
import waldo from './Assets/Shots/waldo.png'

const ProjectCardContainer = () => {
    let projects = [
        {
            technologies: ['REACT', 'NODEJS', 'EXPRESS', 'MONGODB', 'JAVASCRIPT', 'NPM', 'GIT'],
            photo: poopbook,
            link: 'https://pookbook-a9819.web.app',
            name: 'PoopBook'
        },
        {
            technologies: ['REACT', 'NODEJS', 'EXPRESS', 'MONGODB', 'JAVASCRIPT', 'NPM', 'GIT'],
            photo: blog,
            link: 'https://blog-8b261.web.app',
            name: 'Bad Blog App'
        },
        {
            technologies: ['REACT', 'JAVASCRIPT', 'NPM', 'GIT', 'JEST'],
            photo: battle,
            link: 'https://rqsadqwesad12313asd.web.app',
            name: 'Battleship'
        },
        {
            technologies: ['REACT', 'JAVASCRIPT', 'NPM', 'WEBPACK'],
            photo: todo,
            link: 'https://o1disfkasok312oek.web.app/',
            name: 'Another Todo-List'
        },
        {
            technologies: ['JAVASCRIPT'],
            photo: etch,
            link: 'https://rawcdn.githack.com/JasianE/Etch-A-Sketch/593f3ff18b8976a572884006d3b752516f679d5e/index.html',
            name: 'Etch-A-Sketch'
        },
        {
            technologies: ['REACT', 'JAVASCRIPT', 'NPM', 'GIT'],
            photo: waldo,
            link: 'https://wherewaldo.herokuapp.com/',
            name: 'Wheres Waldo'
        },
        {
            technologies: ['REACT', 'JAVASCRIPT', 'NPM', 'GIT', 'WEBPACK'],
            photo: library,
            link: 'https://newlibraryapp.web.app',
            name: 'Library'
        },
        {
            technologies: ['JAVASCRIPT'],
            photo: tic,
            link: 'https://rawcdn.githack.com/JasianE/Tic-Tac-Toe/80b3d97b8bb16bd4cd7b075ea59e4aa1b0336761/index.html',
            name: 'Tic-Tac-Toe'
        },
        {
            technologies: ['JAVASCRIPT', 'NPM', 'GIT', 'REACT'],
            photo: calculator,
            link: 'https://calculator123123.web.app/',
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