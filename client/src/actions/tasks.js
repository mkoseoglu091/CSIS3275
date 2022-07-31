import axios from 'axios';
import { setAlert } from './alert';

import { GET_TASKS, TASKS_ERROR } from './types';

// Get current user tasks
export const getUserTasks = () => async dispatch => {
    try {
        const res = await axios.get('/api/tasks/me');

        dispatch({
            type: GET_TASKS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: TASKS_ERROR,
            payload: { msg: err.response.statusText, status:err.response.status }
        });
    }
}