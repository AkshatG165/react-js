import { useContext } from 'react';
import FetchMenu from '../Http';
import useFetch from '../hooks/useFetch';
import Error from './Error.jsx';
import cartItemsContext from '../store/cartItems-context';

export default function Menu() {
  const cartItemCtx = useContext(cartItemsContext);
  const { data: menu, isLoading, error } = useFetch(FetchMenu, []);

  const menuItems = menu.map((item) => (
    <li key={item.id} className="meal-item">
      <img
        src={`http://localhost:3000/${item.image}`}
        alt={item.image.split('/')[1]}
      />
      <h3>{item.name}</h3>
      <p className="meal-item-price">{item.price}</p>
      <p className="meal-item-description">{item.description}</p>
      <button
        type="button"
        onClick={() => {
          cartItemCtx.addItem({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: 1,
          });
        }}
      >
        Add to Cart
      </button>
    </li>
  ));

  if (error) return <Error />;
  return (
    <ol id="meals">{isLoading ? <li>Fetching menu...</li> : menuItems}</ol>
  );
}
