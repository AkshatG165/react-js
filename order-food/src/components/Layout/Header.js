import { Fragment } from 'react';
import classes from './Header.module.css';
import HeaderCart from './HeaderCart';
import mealsImage from '../../assets/meals.jpg';

function Header() {
  return (
    <Fragment>
      <div className={classes['header']}>
        <h1>ReactMeals</h1>
        <HeaderCart />
      </div>
    </Fragment>
  );
}

export default Header;
