import {fetchTicketLoading, fetchTicketSuccess, fetchTicketFail, searchTickets} from "../slices/ticketSlice";
import axios from "axios";

export const fetchAllTickets = () => async (dispatch) => {
    dispatch(fetchTicketLoading());
    try {
        const result = await axios.get('http://localhost:3001/v1/ticket',
        {
            headers: {
                Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imphd2FsZWpheWVzaDEyM0BnbWFpbC5jb20iLCJpYXQiOjE2NDk3MDA3MTcsImV4cCI6MTY0OTcwMTYxN30.VybEuz7p6lZGwD8CZesqB2i7vt1FW_kPPwAWommSDv8',
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