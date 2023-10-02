import { useState } from 'react';
import '../Chart/Chart.css';
import Chart from '../Chart/Chart';

function ExpenseChart({ expenses }) {
  const initialBars = [
    { label: 'JAN', value: 0 },
    { label: 'FEB', value: 0 },
    { label: 'MAR', value: 0 },
    { label: 'APR', value: 0 },
    { label: 'MAY', value: 0 },
    { label: 'JUN', value: 0 },
    { label: 'JUL', value: 0 },
    { label: 'AUG', value: 0 },
    { label: 'SEP', value: 0 },
    { label: 'OCT', value: 0 },
    { label: 'NOV', value: 0 },
    { label: 'DEC', value: 0 },
  ];

  let maxVal = 0;
  expenses.forEach((expense) => {
    maxVal += expense.amount;
    initialBars[expense.date.getMonth()].value += expense.amount;
  });

  return <Chart bars={initialBars} maxVal={maxVal} />;
}

export default ExpenseChart;
