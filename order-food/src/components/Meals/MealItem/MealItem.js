import { Fragment, useRef } from 'react';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

function MealItem(props) {
  const nameRef = useRef();
  const priceRef = useRef();

  const onCartItemAdd = (quantity) => {
    props.onCartItemAdd(
      quantity,
      nameRef.current.innerText,
      priceRef.current.innerText
    );
  };

  return (
    <Fragment>
      <div className={classes['meal']}>
        <h3 className={classes['name']} ref={nameRef}>
          {props.meal.name}
        </h3>
        <p className={classes['description']}>{props.meal.description}</p>
        <p
          className={classes['price']}
          ref={priceRef}
        >{`$${props.meal.price}`}</p>
      </div>
      <MealItemForm onCartItemAdd={onCartItemAdd} />
    </Fragment>
  );
}

export default MealItem;
