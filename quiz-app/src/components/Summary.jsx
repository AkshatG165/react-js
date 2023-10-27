import questions from '../questions';
import completedLogo from '../assets/quiz-complete.png';

export default function Summary(props) {
  const correct = (
    (questions.filter(
      (question, key) => question.answers[0] === props.userAnswer[key]
    ).length /
      questions.length) *
    100
  ).toFixed(0);
  const skipped = (
    (questions.filter((question, key) => props.userAnswer[key] === 'Skipped')
      .length /
      questions.length) *
    100
  ).toFixed(0);
  const incorrect = 100 - correct - skipped;

  const summary = questions.map((question, key) => {
    let classes = 'user-answer ';
    if (props.userAnswer[key] === question.answers[0]) classes += 'correct';
    else if (props.userAnswer[key] === 'Skipped') classes += 'skipped';
    else classes += 'wrong';

    return (
      <li key={question.id}>
        <h3>{key + 1}</h3>
        <p className="question">{question.text}</p>
        <p className={classes}>{props.userAnswer[key]}</p>
      </li>
    );
  });

  return (
    <div id="summary">
      <img src={completedLogo} alt="Quiz Completed" />
      <h2>Quiz Completed</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skipped}%</span>
          <span className="text">Skipped</span>
        </p>
        <p>
          <span className="number">{correct}%</span>
          <span className="text">Answered Correctly</span>
        </p>
        <p>
          <span className="number">{incorrect}%</span>
          <span className="text">Answered Incorrectly</span>
        </p>
      </div>
      <ol>{summary}</ol>
    </div>
  );
}
