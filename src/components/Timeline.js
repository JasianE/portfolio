import React, {useState} from 'react'
import Dot from './Dot'
import Story from './Story'

const Timeline = () => {
    const [showThing, setShowThing] = useState(false)

    const timeToChange = (e) => {
        setShowThing(e)
    }
    
    //:()
    const stories = [
        {date: 'October', story: ['HTML', 'CSS', 'GIT'], id: 1},
        {date: 'November', story: ['JS', 'DOM', 'CLI', 'LINUX'], id: 2},
        {date: 'December', story: ['OOP', 'FUNCTIONAL PROGRMAMING BASICS'], id: 3},
        {date: 'January', story: ['Nothing :()'], id: 4},
        {date: 'February', story: ['INHERITANCE', 'FACTORY FUNCTIONS', 'CLOSURE', 'CLASSES'], id: 5},
        {date: 'March', story: ['MODULAR CODE', 'WEBPACK', 'OOP PRINCIPLES', 'NPM'], id: 6},
        {date: 'April', story: ['JSON', 'ASYNC', 'JEST', 'FUNCTIONAL REACT'], id: 7},
        {date: 'May', story: ['FIREBASE'], id: 8},
        {date: 'June', story: ['NODEJS', 'EXPRESS', 'MONGODB', 'MONGOOSE'], id: 9},
        {date: 'July', story: ['REST APIS'], id: 10},
    ]

    return(
        <div className = {showThing ? 'timeLineBox' : 'timeline'}>
            {showThing ? <Story data = {showThing} change = {timeToChange}/> : 
            stories.map(key => <Dot data = {key} key = {key.id} change={timeToChange}/>)
            }
        </div>
    )
}

export default Timeline