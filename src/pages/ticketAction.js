import {fetchTicketLoading, fetchTicketSuccess, fetchTicketFail, searchTickets} from "../slices/ticketSlice";
import axios from "axios";

export const fetchAllTickets = () => async (dispatch) => {
    dispatch(fetchTicketLoading());
    try {
        const result = await axios.get('http://localhost:3001/v1/ticket',
        {
            headers: {
                Authorization: sessionStorage.getItem('accessJWT'),
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