import { Fragment } from 'react';
import classes from './AvailableMeals.module.css';
import Card from '../UI/Card/Card';
import MealItemForm from './MealItem/MealItemForm';
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

function AvailableMeals() {
  const mealsList = DummyMeals.map((meal) => (
    <li key={meal.name}>
      <MealItem meal={meal} />
      <MealItemForm />
    </li>
  ));

  return (
    <Card className={classes['meals']}>
      <ul>{mealsList}</ul>
    </Card>
  );
}

export default AvailableMeals;
