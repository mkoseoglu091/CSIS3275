import axios from 'axios';
import { setAlert } from './alert';
import { ADMIN_LOADED, ADMIN_AUTH_ERROR, ADMIN_LOGIN_SUCCESS, ADMIN_LOGIN_FAIL } from './types';
import setAuthToken from '../utils/setAuthToken';

// Load Admin
export const loadAdmin = () => async dispatch => {
    // if there is a token, load it
    if(localStorage.token) {
        setAuthToken(localStorage.token);
    }

    try {
        const res = await axios.get('/api/auth/admin');

        dispatch({
            type: ADMIN_LOADED,
            payload: res.data
        });
    } catch(err) {
        dispatch({
            type: ADMIN_AUTH_ERROR
        });
    }
}


// Login Admin
export const loginAdmin = ( email, password ) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ email, password });

    try {
        const res = await axios.post('/api/auth/admin', body, config);
        dispatch({
            type: ADMIN_LOGIN_SUCCESS,
            payload: res.data
        });

        dispatch(loadAdmin());
    } catch(err) {
        const errors = err.response.data.errors;
        if(errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
        
        dispatch({
            type: ADMIN_LOGIN_FAIL
        });
    }
}