import {fetchTicketLoading, fetchTicketSuccess, fetchTicketFail, searchTickets} from "./ticketSlice";
import axios from "axios";

export const fetchAllTickets = () => async (dispatch) => {
    dispatch(fetchTicketLoading());
    try {
        const result = await axios.get('http://localhost:3001/v1/ticket',
        {
            headers: {
                Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imphd2FsZWpheWVzaDEyM0BnbWFpbC5jb20iLCJpYXQiOjE2NDg5ODIwMjcsImV4cCI6MTY0ODk4MjkyN30.bWlJ0BgjZnf2ju1j-84fYEPWVojXKXSnez_kv_xf_RU',
            },
        })
        console.log(result)
        dispatch(fetchTicketSuccess(result.data.data));
    } catch (error) {
        dispatch(fetchTicketFail(error.message));
    }
}

export const filterSearchTicket = (str) => (dispatch) => {
    dispatch(searchTickets(str));
}