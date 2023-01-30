import React from 'react'

export default function Question(props) {
    const chosenAnswerStyles = {
        background: "#D6DBF5",
        border: "0.5px solid #D6DBF5"
    }
    const correctAnswer = {
        background: "#94D7A2",
        border: "0.5px solid #94D7A2"
    }
    const incorrectAnswer = {
        background: "#F8BCBC",
        border: "0.5px solid #F8BCBC"
    }
    
    
    
    const answerElements = props.answers.map((el, idx) => {
        let style; 
        
        if (props.isPlaying && props.user_answer === el) style = chosenAnswerStyles;
        if (!props.isPlaying && props.user_answer === el) style = incorrectAnswer;
        if (!props.isPlaying && props.correct_answer === el) style = correctAnswer;
        
        return (
            <div 
                key={idx} 
                style={style}
                className="question-answer"
                dangerouslySetInnerHTML={{__html: `${el}`}}
                onClick={() => props.answerClickHandler(props, el)}
            ></div>)
    })
    
    return (
        <div>
        <div className="question">
            <h2 className="question-title" dangerouslySetInnerHTML={{__html: `${props.question}`}}></h2>
            <div className="question-answers">
                {answerElements}
            </div> 
        </div>
        <div className="question-border" />
        </div>
    )
}