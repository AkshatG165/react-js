import { useRef } from 'react';
import classes from './MealItemForm.module.css';

function MealItemForm(props) {
  const amountRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    props.onCartItemAdd(amountRef.current.value);
  };

  return (
    <form className={classes['form']} onSubmit={onSubmit}>
      <div>
        <label>Amount</label>
        <input type="number" defaultValue="1" min="1" ref={amountRef} />
      </div>
      <button type="submit">+Add</button>
    </form>
  );
}

export default MealItemForm;
