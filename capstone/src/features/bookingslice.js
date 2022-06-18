import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {
    bookingOrders: localStorage.getItem("bookingItems")
    ? JSON.parse(localStorage.getItem("bookingItems"))
    : [],
    bookingTatalQuantity: 0,
};

const bookingslice = createSlice({
    name: "bookings",
    initialState,
    reducers:{
      addTOBookings(state, action) {
        state.bookingOrders.push(action.payload);
      },  
    },
    
});

export const { addTOBookings } = bookingslice.actions;

export default bookingslice.reducer;