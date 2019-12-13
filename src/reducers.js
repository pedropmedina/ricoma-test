export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const TOGGLE_CART = 'TOGGLE_CART';

const inArray = (array, id) => array.find(item => item.id === id);

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case ADD_ITEM:
      return {
        ...state,
        cart: !inArray(state.cart, payload.id)
          ? [...state.cart, payload]
          : state.cart
      };
    case REMOVE_ITEM:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== payload)
      };
    case UPDATE_ITEM:
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === payload.id ? { ...item, color: payload.color } : item
        )
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
