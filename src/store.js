import { configureStore } from '@reduxjs/toolkit';
import ticketsReducer from './slices/ticketSlice';
import loginReducer from './slices/loginSlice';

const store = configureStore({
    reducer: {
       tickets: ticketsReducer,
       login: loginReducer
    }
})

export default store;