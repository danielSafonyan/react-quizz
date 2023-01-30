import React from 'react'
import Question from './Question'

export default function PlayingScreen(props) {
    const [questions, setQuestions] = React.useState(props.questions);
    const [isPlaying, setIsPlaying] = React.useState(true);
    
    // React.useEffect(() => console.log(questions), [questions])
    
    function checkAnswers() {
        setIsPlaying(false);
    }
    
    function calculateScore() {
       const score = questions.filter(el => el.user_answer === el.correct_answer)
       return score.length;
    }
    
    function answerClickHandler(questionData, userAnswer) {
        setQuestions(prevQuestions => prevQuestions.map(elem => {
            return elem.question === questionData.question ? {...elem, user_answer: userAnswer} : elem
        }))
    }

    const questionElements = questions.map((el, idx) => {
        return <Question 
                key={idx}
                {...el}
                isPlaying={isPlaying}
                answerClickHandler={isPlaying ? answerClickHandler 
                : () => (console.log("You can start again."))}
                />
    })
    return (
        <div className="question-container">
            {questionElements}
                {isPlaying ? 
                <div className="displayed-results">
                    <button 
                    className="btn"
                    onClick={checkAnswers}
                    >Check answers
                    </button>
            </div>
                    
                :
                <div className="displayed-results">
                    <div className="num-correct-answers">You scored {calculateScore()} of {questions.length} correct answers!</div>
                    <button 
                    className="btn"
                    onClick={() => props.restart(false)}
                    >Play again
                    </button>
            </div>
                    
                }
        </div>
    )
}