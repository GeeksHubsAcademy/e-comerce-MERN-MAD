import {
    LOGIN,
    LOGOUT
} from "../types";

const userReducer = (state = {}, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                user: action.payload
            }
        case LOGOUT:
            return {
                ...state,
                user: undefined
            }
        default:
            return state
    }
}
export default userReducer;