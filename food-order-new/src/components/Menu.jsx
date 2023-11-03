import FetchMenu from '../Http';
import useFetch from '../hooks/useFetch';
import Error from './Error.jsx';

export default function Menu() {
  const { data: menu, isloading, error } = useFetch(FetchMenu, []);
  const onItemAdd = () => {};

  const menuItems = menu.map((item) => (
    <li key={item.id} className="menu-item">
      <img
        src={`http://localhost:3000/${item.image}`}
        alt={item.image.split('/')[1]}
      />
      <h3>{item.name}</h3>
      <p className="price">{item.price}</p>
      <p className="description">{item.description}</p>
      <button type="button" onClick={onItemAdd}>
        Add to Cart
      </button>
    </li>
  ));

  if (error) return <Error />;
  return <ol id="menu">{isloading ? <p>Fetching menu...</p> : menuItems}</ol>;
}
