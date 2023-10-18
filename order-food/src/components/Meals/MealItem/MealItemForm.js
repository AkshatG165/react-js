import classes from './MealItemForm.module.css';

function MealItemForm() {
  const onChange = (e) => {};
  const onSubmit = (e) => {
    e.preventDefault();
    console.log('Hi');
  };

  return (
    <form className={classes['form']} onSubmit={onSubmit}>
      <div>
        <label>Amount</label>
        <input type="number" defaultValue="1" min="1" onChange={onChange} />
      </div>
      <button type="submit">+Add</button>
    </form>
  );
}

export default MealItemForm;
