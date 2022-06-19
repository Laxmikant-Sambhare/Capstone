import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {
    bookingItems: localStorage.getItem("bookingItems")
    ? JSON.parse(localStorage.getItem("bookingItems"))
    : [],
    bookingTatalQuantity: 0,
};

const bookingslice = createSlice({
    name: "bookings",
    initialState,
    reducers:{
      addTOBookings(state, action) {
        state.bookingItems.push(action.payload);
        localStorage.setItem("bookingItems", JSON.stringify(state.bookingItems));
        toast.success("Your slot is booked successfully", {
          position: "bottom-left",
        })
      },  
    },
});

export const { addTOBookings } = bookingslice.actions;

export default bookingslice.reducer;