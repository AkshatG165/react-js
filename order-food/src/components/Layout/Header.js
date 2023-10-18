import { Fragment } from 'react';
import classes from './Header.module.css';
import HeaderCart from './HeaderCart';
import mealsImage from '../../assets/meals.jpg';

function Header(props) {
  return (
    <Fragment>
      <div className={classes['header']}>
        <h1>ReactMeals</h1>
        <HeaderCart onModalLoad={props.onModalLoad} />
      </div>
      <div className={classes['meals-bg']}>
        <img src={mealsImage} alt="meals.jpg" />
      </div>
    </Fragment>
  );
}

export default Header;
