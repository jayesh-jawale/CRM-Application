import {  registrationPending, registrationSuccess, registrationError} from '../slices/userRegistrationSlice';
import axios from "axios";

export const userRegistration = (newRegistration) => async (dispatch) => {
    dispatch(registrationPending());
    try {
        const result = await axios.post('http://localhost:3001/v1/user', newRegistration)
        console.log(result)
        result.data.status === "success" ?
            dispatch(registrationSuccess(result.data.message)) :
            dispatch(registrationError(result.data.message));

    } catch (error) {
        dispatch(registrationError(error.message));
    }
}