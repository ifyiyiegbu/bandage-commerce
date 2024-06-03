import { createSlice } from '@reduxjs/toolkit';

const loadCartState = () => {
  try {
    const serializedState = localStorage.getItem('cart');
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error('Could not load cart state', err);
    return [];
  }
};

const saveCartState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('cart', serializedState);
  } catch (err) {
    console.error('Could not save cart state', err);
  }
};

const initialState = loadCartState();

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.find(product => product.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
      saveCartState(state);
    },
    removeFromCart: (state, action) => {
      const index = state.findIndex(product => product.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
      saveCartState(state);
    },
    updateQuantity: (state, action) => {
      const item = state.find(product => product.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
      saveCartState(state);
    },
    clearCart: () => {
      const newState = [];
      saveCartState(newState);
      return newState;
    }
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
