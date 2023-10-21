import { useReducer } from 'react';
import CartItemsContext from './cartitems-context';

const cartItemsReducer = (state, action) => {
  if (action.type === 'ADD_ITEM_PRESENT') {
    return state.map((item) => {
      if (item.name === action.item.name)
        return {
          name: item.name,
          price: item.price,
          quantity: item.quantity + action.item.quantity,
        };
      else return item;
    });
  }
  if (action.type === 'ADD_ITEM_NOT_PRESENT') return [...state, action.item];

  if (action.type === 'REMOVE_ITEM_PRESENT') {
    return state
      .map((item) => {
        if (item.name === action.item.name)
          return {
            name: item.name,
            price: item.price,
            quantity: item.quantity - action.item.quantity,
          };
        else return item;
      })
      .filter((item) => item.quantity >= 1);
  }
  return [];
};

function CartItemsProvider(props) {
  let itemPresent = false;
  const [cartItems, dispatchCartItems] = useReducer(cartItemsReducer, []);

  const addItem = (cartItem) => {
    if (cartItems.length === 0) {
      dispatchCartItems({
        type: 'ADD_ITEM_NOT_PRESENT',
        item: cartItem,
      });
      return;
    }

    cartItems.forEach((item) => {
      if (item.name === cartItem.name) itemPresent = true;
    });

    itemPresent
      ? dispatchCartItems({ type: 'ADD_ITEM_PRESENT', item: cartItem })
      : dispatchCartItems({
          type: 'ADD_ITEM_NOT_PRESENT',
          item: cartItem,
        });
  };

  const removeItem = (cartItem) =>
    dispatchCartItems({ type: 'REMOVE_ITEM_PRESENT', item: cartItem });

  return (
    <CartItemsContext.Provider
      value={{
        cartItems: cartItems,
        dispatchCartItems: dispatchCartItems,
        addItem: addItem,
        removeItem: removeItem,
      }}
    >
      {props.children}
    </CartItemsContext.Provider>
  );
}

export default CartItemsProvider;
