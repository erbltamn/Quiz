import React, {useState} from 'react';
import './Quiz.css'
// import { questions } from './dataModel';

function Quiz({ questions }) {
    const [index, setIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
    const [showImg,setShowImg] =useState(false)

    const currentQuestion = questions[index];

    const handleAnswer = (answerIndex) => {
        let correctAnswerIndex = currentQuestion.correctOption;

        if (answerIndex === correctAnswerIndex) {
            setScore(score + currentQuestion.points);
            setIsAnswerCorrect(true);
            setShowImg(true);
        } else {
            setIsAnswerCorrect(false);
            setShowImg(false);
        }
        setSelectedAnswer(answerIndex);

        setTimeout(() => {
            nextQuestion();
        }, 1000);
    };


    const nextQuestion = () => {
        if (index < questions.length - 1) {
            setIndex(index + 1);
        } else {
            setIndex(questions.length)
        }
    
        setSelectedAnswer(null);
        setIsAnswerCorrect(null);
        setShowImg(false);
    };

    if (index >= questions.length) {
        return (
            <div className='quiz-result'>
                <h2>Quiz Completed!</h2>
                <p>Your score: {score} / {questions.reduce((acc, q) => acc + q.points, 0)} </p>
            </div>
        );
    }

    return (
        <div className='question-box'>
            {showImg ? (
                <div className='img-wow'>
                    <img src='' alt='Correct'></img>
                </div>
             ):(
            <div>
            <h1>Formula 1 quiz</h1>
            <hr />
            <h2>{currentQuestion.question}</h2>
            <div className='options'>
                {currentQuestion.options.map((option, idx) =>(
                    <button 
                    key={idx} 
                    className={`option ${selectedAnswer === idx ? (isAnswerCorrect ? 'correct' : 'incorrect') : ''}`} 
                    onClick={() => handleAnswer(idx)}
                    disabled={selectedAnswer !== null}>
                        {option}
                    </button>
                ))}
            </div>
            {selectedAnswer !== null && (
                <button className='next' onClick={nextQuestion}>Next</button>
            )}
            <div className='which'>{index+1} of {questions.length} questions</div>
                </div>
             )}
            
           
        </div>
    );
}
// console.log(questions);

export default Quiz;
