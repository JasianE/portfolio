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
        {date: 'October', story: '1212', id: 1},
        {date: 'November', story: '', id: 2},
        {date: 'December', story: '', id: 3},
        {date: 'January', story: '', id: 4},
        {date: 'February', story: '', id: 5},
        {date: 'March', story: '', id: 6},
        {date: 'April', story: '', id: 7},
        {date: 'May', story: '', id: 8},
        {date: 'June', story: '', id: 9},
        {date: 'July', story: '', id: 10},
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