import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    tickets: [],
    isLoading: false,
    error: "",
    searchTicketList: [],
    selectedSingleTicket: {},
    replyMessage: "",
}

const ticketListSlice = createSlice({
    name: "ticketList",
    initialState,
    reducers: {
        fetchTicketLoading: (state) => {
            state.isLoading = true;
        },
        fetchTicketSuccess: (state, action) => {
            state.tickets = action.payload;
            state.searchTicketList = action.payload;
            state.isLoading = false;
        },
        fetchTicketFail: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        searchTickets: (state, action) => {          
            state.searchTicketList = state.tickets.filter(row => {
                if(!action.payload) return row;

                return row.subject.toLowerCase().includes(action.payload.toLowerCase());
            })
        },
        fetchSingleTicketLoading: (state) => {
            state.isLoading = true;
        },
        fetchSingleTicketSuccess: (state, action) => {
            state.selectedSingleTicket = action.payload;
            state.isLoading = false;
            state.error = action.payload;
        },
        fetchSingleTicketFail: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        replyTicketLoading: (state) => {
            state.isLoading = true;
          },
        replyTicketSuccess: (state, { payload }) => {
            state.isLoading = false;
            state.error = "";
            state.replyMessage = payload;
          },
        replyTicketFail: (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
          },
    }
})

const {reducer, actions} = ticketListSlice;

export const { fetchTicketLoading, fetchTicketSuccess, fetchTicketFail, searchTickets,
     fetchSingleTicketLoading, fetchSingleTicketSuccess, fetchSingleTicketFail,
     replyTicketLoading, replyTicketSuccess, replyTicketFail } = actions;
export default reducer;