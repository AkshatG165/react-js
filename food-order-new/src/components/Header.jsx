import logo from '../assets/logo.jpg';
import Cart from './Cart';

export default function Header() {
  return (
    <header id="header">
      <div className="logo">
        <img src={logo} alt="ReactFood" />
        <h1>REACTFOOD</h1>
      </div>
      <Cart />
    </header>
  );
}
