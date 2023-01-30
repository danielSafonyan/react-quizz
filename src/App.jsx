import React from 'react'
import StartScreen from './components/StartScreen'
import PlayingScreen from './components/PlayingScreen'

export default function App() {
    const [triviaStarted, setTriviaStarted] = React.useState(false);
    const [triviaQuestions, setTriviaQuestions] = React.useState([]);

    function randomizeArray(array) {
        const oldArray = [...array]
        const newArray = []
        while (oldArray.length > 0) {
            const randomIdx = Math.floor(Math.random() * oldArray.length)
            const randomEl = oldArray.splice(randomIdx, 1).pop()
            newArray.push(randomEl)
            }
        return newArray;
    }
    
    // Recieves API response, adds new property users_answer, saves array into triviaQuestions
    function getQuestionsAPI() {
        fetch("https://opentdb.com/api.php?amount=5&type=multiple")
        .then(res => res.json())
        .then(res => {
            const questionArrayUserAnswer = res.results.map(el => {
                const answers = randomizeArray([el.correct_answer, ...el.incorrect_answers])
                return {...el, user_answer: "", answers: answers}
                })
            setTriviaQuestions(questionArrayUserAnswer)
            })
    }
    
    React.useEffect(getQuestionsAPI, [triviaStarted])
    
    function startGame() {
        setTriviaStarted(true);
    }
    return (
        <main>
       { triviaStarted ? <PlayingScreen restart={setTriviaStarted} questions={triviaQuestions}/> : <StartScreen clickHandler={startGame}/> }
       </main>
    )
}