import {getUserPending, getUserSuccess, getUserFail} from '../slices/userSlice';
import axios from "axios";

export const userUserProfile = () => async (dispatch) => {
    dispatch(getUserPending());
    try {
        const accessJWT = sessionStorage.getItem('accessJWT')
        const result = await axios.get('http://localhost:3001/v1/user',
        {
            headers: {
                Authorization: accessJWT,
            },
        })
        dispatch(getUserSuccess(result.data));
    } catch (error) {
        dispatch(getUserFail(error.message));
    }
}

export const userLogout = async () => {
    try {
        const accessJWT = sessionStorage.getItem('accessJWT')
        await axios.delete('http://localhost:3001/v1/user/logout',
        {
            headers: {
                Authorization: accessJWT,
            },
        })
    } catch (error) {
        console.log(error);
    }
}