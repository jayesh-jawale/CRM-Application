import { configureStore } from '@reduxjs/toolkit';
import ticketsReducer from './pages/ticketSlice';

const store = configureStore({
    reducer: {
       tickets: ticketsReducer
    }
})

export default store;