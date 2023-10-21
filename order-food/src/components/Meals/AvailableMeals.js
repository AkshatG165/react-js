import { useContext } from 'react';
import classes from './AvailableMeals.module.css';
import Card from '../UI/Card/Card';
import MealItem from './MealItem/MealItem';
import CartItemsContext from '../../store/cartitems-context';

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

function AvailableMeals() {
  const cartItemsctx = useContext(CartItemsContext);

  const onCartItemAdd = (quantity, nameRef, priceRef) => {
    const cartItem = {
      name: nameRef,
      price: +priceRef.substring(1),
      quantity: +quantity,
    };
    cartItemsctx.addItem(cartItem);
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
