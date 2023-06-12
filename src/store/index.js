import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterIcon";
import cartSlice from "./cart-slice";

const store = configureStore({
    reducer: {num: counterSlice.reducer, cart:cartSlice.reducer}
});

export default store;