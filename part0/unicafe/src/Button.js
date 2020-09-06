import React from 'react'

//Param takes from the App component
const Button = ({feedback, setFeedback, text}) => {
    const handleClick = () => 
      setFeedback(feedback + 1)

    return (
    <button onClick = {handleClick}>{text}</button>
    )
}

export default Button;