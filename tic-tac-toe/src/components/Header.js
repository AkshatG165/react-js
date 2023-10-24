import logo from '../assets/game-logo.png';

function Header() {
  return (
    <header>
      <img src={logo} alt="tic-tac-toe.jpg" />
      <h1>Tic Tac Toe</h1>
    </header>
  );
}

export default Header;
