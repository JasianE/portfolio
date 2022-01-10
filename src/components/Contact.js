import React from 'react'
import github from './Assets/github.png'

const Contact = () => {
    return(
        <footer className='footer'>
            <h1 className='Text bold'>Contact</h1>
            <a href = 'https://github.com/JasianE' target = '_blank'>
                <img className='github' src = {github} alt = 'github'></img>
            </a>
            <a href= 'mailto:junchenli423@gmail.com'><h3 className='bold'>junchenli423@gmail.com</h3></a>
        </footer>
    )
}

export default Contact