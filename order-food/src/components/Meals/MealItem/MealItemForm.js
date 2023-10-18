import classes from './MealItemForm.module.css';

function MealItemForm() {
  return (
    <form className={classes['form']}>
      <div>
        <label>Amount</label>
        <input type="number" defaultValue="1" />
      </div>
      <button type="submit">+Add</button>
    </form>
  );
}

export default MealItemForm;
