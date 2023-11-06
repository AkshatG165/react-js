import { useReducer } from 'react';
import CartItemsContext from './cartItems-context';

const reducer = (state, action) => {
  if (action.type === 'addItem_new') return [...state, action.item];
  if (action.type === 'addItem_existing')
    return state.map((item) => {
      if (item.id === action.item.id)
        return {
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity + 1,
        };
      else return item;
    });
  if (action.type === 'removeItem') {
    return state
      .map((item) => {
        if (item.id === action.item.id)
          return {
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity - 1,
          };
        else return item;
      })
      .filter((item) => item.quantity !== 0);
  }
  return state;
};

export default function CartItemsProvider(props) {
  const [cartItems, dispatchCartItems] = useReducer(reducer, []);

  const addItem = (cartItem) => {
    if (cartItems.some((item) => item.id === cartItem.id))
      dispatchCartItems({ type: 'addItem_existing', item: cartItem });
    else dispatchCartItems({ type: 'addItem_new', item: cartItem });
  };

  const removeItem = (cartItem) =>
    dispatchCartItems({ type: 'removeItem', item: cartItem });

  return (
    <CartItemsContext.Provider
      value={{
        cartItems: cartItems,
        addItem: addItem,
        removeItem: removeItem,
      }}
    >
      {props.children}
    </CartItemsContext.Provider>
  );
}
