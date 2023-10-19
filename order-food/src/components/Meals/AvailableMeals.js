import { useReducer } from 'react';
import classes from './AvailableMeals.module.css';
import Card from '../UI/Card/Card';
import MealItem from './MealItem/MealItem';

const DummyMeals = [
  { name: 'Sushi', description: 'Finest fish & veggies', price: 22.99 },
  { name: 'Schnitzel', description: 'A german speciality!', price: 16.5 },
  {
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  { name: 'Green Bowl', description: 'Healthy...and green...', price: 18.99 },
];

const cartItemsReducer = (state, action) => {
  if (action.type === 'ITEM_PRESENT') {
    console.log(state, action);
    return state.map((item) => {
      if (item.name === action.item.name)
        return {
          name: item.name,
          price: item.price,
          quantity: item.quantity + action.item.quantity,
        };
      else return item;
    });
  }
  if (action.type === 'ITEM_NOT_PRESENT') return [...state, action.item];
  return [];
};

function AvailableMeals() {
  let itemPresent = false;
  const [cartItems, dispatchCartItems] = useReducer(cartItemsReducer, []);

  const onCartItemAdd = (quantity, nameRef, priceRef) => {
    const cartItem = {
      name: nameRef,
      price: +priceRef.substring(1),
      quantity: +quantity,
    };

    if (cartItems.length === 0) {
      dispatchCartItems({ type: 'ITEM_NOT_PRESENT', item: cartItem });
      return;
    }

    cartItems.forEach((item) => {
      if (item.name === cartItem.name) itemPresent = true;
    });

    itemPresent
      ? dispatchCartItems({ type: 'ITEM_PRESENT', item: cartItem })
      : dispatchCartItems({ type: 'ITEM_NOT_PRESENT', item: cartItem });
  };

  const mealsList = DummyMeals.map((meal) => (
    <li key={meal.name}>
      <MealItem meal={meal} onCartItemAdd={onCartItemAdd} />
    </li>
  ));

  return (
    <Card className={classes['meals']}>
      <ul>{mealsList}</ul>
    </Card>
  );
}

export default AvailableMeals;
