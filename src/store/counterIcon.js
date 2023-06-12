import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'num',
    initialState: {counter: 0},
    reducers: {
        increase(state) {
            state.counter++;
        },
        decrease(state) {
            state.counter--;
        }
    }
})

export const numActions = counterSlice.actions;

export default counterSlice;