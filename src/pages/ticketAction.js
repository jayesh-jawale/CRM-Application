import {fetchTicketLoading, fetchTicketSuccess, fetchTicketFail, searchTickets,
    fetchSingleTicketLoading, fetchSingleTicketSuccess, fetchSingleTicketFail} from "../slices/ticketSlice";
import axios from "axios";

const rootUrl = "http://localhost:3001/v1/";
const getSingleTicketUlr = rootUrl + "ticket/";

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

export const fetchSingleTicket = (_id) => async (dispatch) => {
    dispatch(fetchSingleTicketLoading());
    try {
        const result = await axios.get(getSingleTicketUlr + _id,
        {
            headers: {
                Authorization: sessionStorage.getItem('accessJWT'),
            },
        })
        console.log(result)
        dispatch(fetchSingleTicketSuccess(result.data.data[0]));
    } catch (error) {
        dispatch(fetchSingleTicketFail(error.message));
    }
}

export const filterSearchTicket = (str) => (dispatch) => {
    dispatch(searchTickets(str));
}