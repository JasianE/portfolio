import React from 'react'
import express from './Assets/express.png'
import npm from './Assets/npm.png'
import git from './Assets/git.png'
import jest from './Assets/jest.png'
import mongo from './Assets/mongodb.png'
import react from './Assets/react.png'
import redux from './Assets/redux.png'
import js from './Assets/js.png'
import webpack from './Assets/webpack.png'
import github from './Assets/github.png'
import node from './Assets/nodejs.png'

const TechSideBar = ({data}) => {
    const links = data.map((key) => {
        let result;
        switch(key){
            case 'REACT':
                result = react
                break;
            case 'REDUX':
                result = redux
                break;
            case 'JAVASCRIPT':
                result = js
                break;
            case 'WEBPACK':
                result = webpack
                break;
            case 'GITHUB':
                result = github
                break;
            case 'GIT':
                result = git
                break;
            case 'NODEJS':
                result = node
                break;
            case 'EXPRESS':
                result = express
                break;
            case 'NPM':
                result = npm
                break;
            case 'MONGODB': 
                result = mongo
                break;
            case 'JEST':
                result = jest;
                break;
            default:
                return result
        }
        return result
    })
    const style = links.length > 5 ? 'logoBIG' : links.length > 3 ? 'logoMID' : 'logoSMALL'
    let i = 0;
    return (
        <div className = 'sidebar'>
            {links.map((key) => {i++; return <img className = {style} src = {key} alt = {'logo'} key = {i}/>})}
        </div>
    )
}

export default TechSideBar