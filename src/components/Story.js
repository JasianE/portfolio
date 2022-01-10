import React from 'react'

const Story = (props) => {
    console.log(props)
    return(
        <div>
            <div className='close' onClick={() => {props.change(false)}}>X</div>
            <p>
                {props.data.story}
            </p>
        </div>
    )
}

export default Story