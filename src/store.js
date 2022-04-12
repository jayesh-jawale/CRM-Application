import { configureStore } from '@reduxjs/toolkit';
import ticketsReducer from './slices/ticketSlice';
import loginReducer from './slices/loginSlice';
import userReducer from './slices/userSlice';

const store = configureStore({
    reducer: {
       tickets: ticketsReducer,
       login: loginReducer,
       user: userReducer
    }
})

export default store;