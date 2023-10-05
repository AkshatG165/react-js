import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);

  const onFormSave = (expense) => {
    props.onAddExpense(expense);
  };

  const onStartEditing = () => setIsEditing(true);
  const onCancel = () => setIsEditing(false);

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={onStartEditing}>Add New Expense</button>}
      {isEditing && <ExpenseForm onCancel={onCancel} onFormSave={onFormSave} />}
    </div>
  );
}

export default NewExpense;
