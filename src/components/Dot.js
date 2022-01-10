import React from 'react'
import { useState } from 'react'

const Dot = (props) => {
    //Create 12 dots, each for one month of learning
    //On the click of a dot change the container to the text of what i accomplished for that month in terms of code
    //Have an x buttom on that that changes it 
    const {date, id} = props.data
    
    return(
        <div className = 'dot' onClick={() => {props.change(props.data)}}>
            <h4 className = {id % 2 === 0 ? 'subbingTop' : 'subbingBottom'}>{date}</h4>
        </div>
    )
}

export default Dot