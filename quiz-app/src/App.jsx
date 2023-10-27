import { useState, Fragment } from 'react';
import Header from './components/Header';
import Quiz from './components/Quiz';
import questions from './questions';
import Summary from './components/Summary';

function App() {
  const [userAnswer, setUserAnswer] = useState([]);
  const questionsOver = !(userAnswer.length < questions.length);

  return (
    <Fragment>
      <Header />
      {!questionsOver && (
        <Quiz userAnswer={userAnswer} setUserAnswer={setUserAnswer} />
      )}
      {questionsOver && <Summary userAnswer={userAnswer} />}
    </Fragment>
  );
}

export default App;
