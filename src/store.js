import { configureStore } from '@reduxjs/toolkit';
import ticketsReducer from './slices/ticketSlice';
import loginReducer from './slices/loginSlice';
import userReducer from './slices/userSlice';
import newTicketReducer from './slices/addNewTicketSlice';

const store = configureStore({
    reducer: {
       tickets: ticketsReducer,
       login: loginReducer,
       user: userReducer,
       newTicket: newTicketReducer
    }
})

export default store;