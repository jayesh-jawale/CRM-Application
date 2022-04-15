import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
    successMessage: "",
    error: "",
}

const newTicketSlice = createSlice({
    name: "newTicket",
    initialState,
    reducers: {
        newTicketLoading: (state) => {
            state.isLoading = true;
        },
        newTicketSuccess: (state, action) => {
            state.isLoading = false;
            state.successMessage = action.payload;
        },
        newTicketFail: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
})

const {reducer, actions} = newTicketSlice;

export const { newTicketLoading, newTicketSuccess, newTicketFail } = actions;
export default reducer;