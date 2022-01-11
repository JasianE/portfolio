import React from 'react'

const Story = (props) => {
    console.log(props)
    return(
        <div>
            <div className='close' onClick={() => {props.change(false)}}>X</div>
            <div className='learning'>
                {props.data.story.map(key => <p key = {props.data.story.indexOf(key)}>Learned: {key}</p>)}
            </div>
        </div>
    )
}

export default Story