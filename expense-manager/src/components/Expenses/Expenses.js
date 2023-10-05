import { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpenseChart from '../Expenses/ExpenseChart';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2023');

  const onFilter = (year) => {
    setFilteredYear(year);
  };

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear() === parseInt(filteredYear)
  );

  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onFilter={onFilter} />
      <ExpenseChart expenses={filteredExpenses} />
      <ExpensesList filteredExpenses={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
