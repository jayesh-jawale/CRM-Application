import {fetchTicketLoading, fetchTicketSuccess, fetchTicketFail, searchTickets,
    fetchSingleTicketLoading, fetchSingleTicketSuccess, fetchSingleTicketFail,
    replyTicketLoading, replyTicketSuccess, replyTicketFail,
    closeTicketLoading, closeTicketSuccess, closeTicketFail} from "../slices/ticketSlice";
import axios from "axios";

const rootUrl = "http://localhost:3001/v1/";
const getSingleTicketUlr = rootUrl + "ticket/";
const closeTicketURL = rootUrl + "ticket/close_ticket/";

export const fetchAllTickets = () => async (dispatch) => {
    dispatch(fetchTicketLoading());
    try {
        const result = await axios.get('http://localhost:3001/v1/ticket',
        {
            headers: {
                Authorization: sessionStorage.getItem('accessJWT'),
            },
        })
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
        dispatch(fetchSingleTicketSuccess(result.data.data.length && result.data.data[0]));
    } catch (error) {
        dispatch(fetchSingleTicketFail(error.message));
    }
}

export const replySingleTicket = (_id, msgObj) => async (dispatch) => {
    dispatch(replyTicketLoading());
    try {
        const result = await axios.put(getSingleTicketUlr + _id, msgObj, {
            headers: {
                Authorization: sessionStorage.getItem('accessJWT'),
            },
        })
        if(result.data.status === "error") {
            return replyTicketFail(result.data.message);
        }
        dispatch(fetchSingleTicket(_id));
        dispatch(replyTicketSuccess(result.data));
    } catch (error) {
        replyTicketFail(error.message);
    }
}

export const closeTicket = (_id) => async (dispatch) => {
    dispatch(closeTicketLoading());
    try {
        const result = await axios.patch(closeTicketURL + _id, {}, {
            headers: {
                Authorization: sessionStorage.getItem('accessJWT'),
            },
        })
        console.log(result)
        if(result.data.status === "error") {
            return closeTicketFail(result.data.message);
        }
        dispatch(fetchSingleTicket(_id));
        dispatch(closeTicketSuccess("Status updated successfully"));
    } catch (error) {
        closeTicketFail(error.message);
    }
}

export const filterSearchTicket = (str) => (dispatch) => {
    dispatch(searchTickets(str));
}