import classes from './Header.module.css';
import logo from '../../assets/game-logo.png';

function Header() {
  return (
    <header classsName={classes['header']}>
      <img src={logo} alt="tic-tac-toe.jpg" />
      <h1>Tic Tac Toe</h1>
    </header>
  );
}

export default Header;
