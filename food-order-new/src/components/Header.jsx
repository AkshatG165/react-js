import logo from '../assets/logo.jpg';
import Cart from './Cart';

export default function Header(props) {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="ReactFood" />
        <h1>REACTFOOD</h1>
      </div>
      <Cart setShowCart={props.setShowCart} />
    </header>
  );
}
