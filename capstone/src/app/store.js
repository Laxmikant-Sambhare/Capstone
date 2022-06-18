import { configureStore } from '@reduxjs/toolkit';
import bookingreducer from '../features/bookingslice';
import cartReducer from '../features/counter/cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    bookings: bookingreducer,
  },
});
