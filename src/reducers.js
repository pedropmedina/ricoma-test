export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const TOGGLE_CART = 'TOGGLE_CART';

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case ADD_ITEM:
      return { ...state, cart: [...state.cart, payload] };
    case REMOVE_ITEM:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== payload)
      };
    case TOGGLE_CART:
      return {
        ...state,
        showCart: !state.showCart
      };
    default:
      return state;
  }
};
