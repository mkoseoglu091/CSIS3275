import { ADMIN_LOADED, ADMIN_AUTH_ERROR, ADMIN_LOGIN_SUCCESS, ADMIN_LOGIN_FAIL } from "../actions/types";

const adminInitialState = {
    token: localStorage.getItem('token'),
    isAdminAuthenticated: null,
    adminLoading: true,
    admin: null
}

export default function(state = adminInitialState, action) {
    const { type, payload } = action;
    switch(type) {
        case ADMIN_LOADED:
            return {
                ...state,
                isAdminAuthenticated: true,
                adminLoading: false,
                admin: payload
            }
        case ADMIN_LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token);
            return {
                ...state,
                ...payload,
                isAdminAuthenticated: true,
                adminLoading: false
            }
        case ADMIN_AUTH_ERROR:
        case ADMIN_LOGIN_FAIL:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAdminAuthenticated: false,
                adminLoading: false
            }
        default:
            return state;
    }
}