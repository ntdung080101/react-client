
import { LOGIN_USER, LOGIN_USER_FAILURE, LOGIN_USER_SUCCESSFUL, REGISTER_USER, REGISTER_USER_FAILURE, REGISTER_USER_SUCCESSFUL } from "./actionType";
import axios from '../../utils/axios';

export const signup = (userData) => (dispatch) => {
    dispatch({ type: REGISTER_USER });
    return axios.post('auth/register-customer', userData)
        .then(res => {
            dispatch({ type: REGISTER_USER_SUCCESSFUL, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: REGISTER_USER_FAILURE });
        })
}
