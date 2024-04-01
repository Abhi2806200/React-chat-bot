import React from 'react'

const StartBtn = (props) => {
    const clickButton = () => {
       props.actions.initialAction(); 
    }
  return (
    <div>
        <button className='start-btn' onClick={()=>clickButton()}>Let's Get Started</button>
    </div>
  )
}

export default StartBtn