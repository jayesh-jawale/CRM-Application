import { configureStore } from '@reduxjs/toolkit';
import ticketsReducer from './slices/ticketSlice';
import loginReducer from './slices/loginSlice';
import userReducer from './slices/userSlice';
import newTicketReducer from './slices/addNewTicketSlice';
import userRegistrationReducer from './slices/userRegistrationSlice';

const store = configureStore({
    reducer: {
       tickets: ticketsReducer,
       login: loginReducer,
       user: userReducer,
       newTicket: newTicketReducer,
       registration: userRegistrationReducer,
    }
})

export default store;