import { GET_TASKS, TASKS_ERROR } from "../actions/types";

const initialState = {
    tasks: null,
    loading: true,
    error: {}
}

export default function(state = initialState, action) {
    const {type, payload} = action;

    switch(type) {
        case GET_TASKS:
            return {
                ...state,
                tasks: payload,
                loading: false
            }
        case TASKS_ERROR:
            return {
                ...state,
                error: payload,
                loading:false
            }
        default:
            return state;
    }
}