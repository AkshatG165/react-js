import { useState } from 'react';
import questions from '../questions';
import QuestionTimer from './QuestionTimer';

export default function Quiz(props) {
  const currentQuestion = questions[props.userAnswer.length];
  const choices = currentQuestion.answers;
  choices.sort(() => Math.random() - 0.5);

  const onTimeOver = () => props.setUserAnswer((prev) => [...prev, 'Skipped']);
  const onClick = (answer) => props.setUserAnswer((prev) => [...prev, answer]);

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          onTimeOver={onTimeOver}
          userAnswer={props.userAnswer}
          timer="10000"
        />
        <h2>{currentQuestion.text}</h2>
        <ul id="answers">
          {choices.map((choice, key) => (
            <li key={key} id={key} className="answer">
              <button onClick={() => onClick(choice)}>{choice}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
