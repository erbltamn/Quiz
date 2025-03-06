import React, { useState } from 'react';
import Quiz from './Quiz';
import { questions } from './dataModel';




function App() {
  const [showQuiz, setShowQuiz] = useState(false);

  const handleStartQuiz = () => {
    setShowQuiz(true);
  };

  return (
  <main className='box'>
    {!showQuiz && (
    <div className='quiz-title'>
      <h1>WELCOME TO THE</h1>
      <h2>Formula 1 Quiz</h2>
      <p>Number of questions: {questions.length}</p>
      <p>Total points: 0</p>
      <button className='click' onClick={handleStartQuiz}>
        Start
      </button>
    </div>
    )}

    {showQuiz && <Quiz questions={questions} />}

  </main>
  );
}


export default App;