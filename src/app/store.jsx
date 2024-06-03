import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { productsApi } from '../services/products';
import cartReducer from '../features/cart/cartSlice'
import { loadCartState, saveCartState } from '../utilities/localStorage';

const preloadedState = {
  cart: loadCartState(),
};

const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    cart: cartReducer,
  },

  preloadedState,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

setupListeners(store.dispatch);

store.subscribe(() => {
  saveCartState(store.getState().cart);
});

export  {store};