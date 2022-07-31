import axios from 'axios';
import { setAlert } from './alert';

import { GET_PET, PET_ERROR } from './types';

// Get current user pet
export const getUserPet = () => async dispatch => {
    try {
        const res = await axios.get('/api/pet/me');

        dispatch({
            type: GET_PET,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: PET_ERROR,
            payload: { msg: err.response.statusText, status:err.response.status }
        });
    }
}