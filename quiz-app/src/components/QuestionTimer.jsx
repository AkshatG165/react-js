import { useState, useEffect } from 'react';

export default function QuestionTimer(props) {
  const [timeLeft, setTimeLeft] = useState(5000);

  useEffect(() => {
    const timer = setTimeout(() => props.onTimeOver(), 5000);
    const counter = setInterval(() => {
      setTimeLeft((prev) => prev - 4);
    }, 1);

    return () => {
      clearTimeout(timer);
      clearInterval(counter);
      setTimeLeft(5000);
    };
  }, [props.userAnswer]);

  return <progress id="question-time" value={timeLeft} max="5000" />;
}
