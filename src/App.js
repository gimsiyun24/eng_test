import React, { useState } from "react";
import vocabularyData from "./data/vocabulary";
import Question from "./components/Question";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (selectedOption) => {
    const correctAnswer = vocabularyData[currentQuestion].answer;
    if (selectedOption === correctAnswer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < vocabularyData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="App">
      <h1>Vocabulary Test</h1>
      {showResult ? (
        <div>
          <h2>Your Score: {score} / {vocabularyData.length}</h2>
        </div>
      ) : (
        <Question
          question={vocabularyData[currentQuestion].word}
          options={vocabularyData[currentQuestion].options}
          handleAnswer={handleAnswer}
        />
      )}
    </div>
  );
}

export default App;
