import { useState, useEffect } from 'react';

export default function QuestionTimer(props) {
  const [timeLeft, setTimeLeft] = useState(props.timer);

  useEffect(() => {
    const timer = setTimeout(() => props.onTimeOver(), props.timer);
    const counter = setInterval(() => {
      setTimeLeft((prev) => prev - 4);
    }, 1);

    return () => {
      clearTimeout(timer);
      clearInterval(counter);
      setTimeLeft(props.timer);
    };
  }, [props.userAnswer]);

  return <progress id="question-time" value={timeLeft} max={props.timer} />;
}
