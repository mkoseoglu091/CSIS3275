import { GET_PET, PET_ERROR } from "../actions/types";

const initialState = {
    pet: null,
    loading: true,
    error: {}
}

export default function(state = initialState, action) {
    const {type, payload} = action;

    switch(type) {
        case GET_PET:
            return {
                ...state,
                pet: payload,
                loading: false
            }
        case PET_ERROR:
            return {
                ...state,
                error: payload,
                loading:false
            }
        default:
            return state;
    }
}