import classes from './MealItem.module.css';

function MealItem({ meal }) {
  return (
    <div className={classes['meal']}>
      <h3 className={classes['name']}>{meal.name}</h3>
      <p className={classes['description']}>{meal.description}</p>
      <p className={classes['price']}>{`$${meal.price}`}</p>
    </div>
  );
}

export default MealItem;
