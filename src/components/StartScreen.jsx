import React from 'react'

export default function StartScreen(props) {
    return (
        <div className="start-screen">
            <h1 className="start-screen-title">Estudiamos</h1>
            <p className="start-screen-par">Let's see what you know.</p>
            <button 
            onClick={props.clickHandler}
            className="btn"
            >Start quiz</button>
        </div>
    )
}