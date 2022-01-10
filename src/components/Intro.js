import React from "react";
import Timeline from "./Timeline";

//Text is black first, then markiplier slides in and text turns to white all slowly and markiplier goes in all slowly and hes 
//like hello everybody my name is markiplier and today well be playing finve nighgts at fredies

const Intro = () => {
    return(
        <div className = 'Intro'>
            <h1 className = 'Text'>Hi, I'm <b className='bold'>Jun.</b></h1>
            <h2 className = 'bigBody'>I'm a highschool student who likes to learn how to code.</h2>
            <br></br>
            <br></br>
            <br></br>
            <Timeline/>
            <br></br>
            <br></br>
            <br></br>
            <h2 className="body">I started learning web development with The Odin Project 
            back in October 2020, I finished it's full stack Javascript path in the August of 2021, 
            and I've been experimenting ever since.
            </h2>
            <br></br>
            <h2 className="body">Here are some of my <a className = 'bold' href="https://github.com/JasianE?tab=repositories" 
            target = '_blank'>
                <b>projects.</b></a>
            </h2>
        </div>
    )
}
export default Intro