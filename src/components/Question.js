import React from "react";

const Question = ({ question, options, handleAnswer }) => {
  return (
    <div>
      <h2>Q: {question}</h2>
      <ul>
        {options.map((option, index) => (
          <li key={index}>
            <button onClick={() => handleAnswer(option)}>{option}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
