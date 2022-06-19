import { configureStore } from '@reduxjs/toolkit';
import bookingslice from '../features/bookingslice';
import cartReducer from '../features/counter/cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    bookings: bookingslice
  },
});
