import { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm(props) {
  const [newTitle, setNewTitle] = useState('');
  const titleOnChange = (e) => setNewTitle(e.target.value);

  const [newAmount, setNewAmount] = useState('');
  const amountOnChange = (e) => setNewAmount(e.target.value);

  const [newDate, setNewDate] = useState('');
  const dateOnChange = (e) => setNewDate(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();

    const expense = {
      id: Math.ceil(Math.random() * 100000).toString(),
      title: newTitle,
      amount: parseFloat(newAmount),
      date: new Date(newDate),
    };

    props.onFormSave(expense);

    setNewTitle('');
    setNewAmount('');
    setNewDate('');
  };

  const onCancel = () => props.onCancel();

  return (
    <form onSubmit={onSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={newTitle} onChange={titleOnChange} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={newAmount}
            onChange={amountOnChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={newDate}
            onChange={dateOnChange}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
