import {
    REGISTER,
    LOGIN,
    LOGOUT
} from "../types";
import axios from 'axios'
import store from "../store";
export const register = (user) => {
    return axios.post('/users/register', user)
        .then(res => {
            store.dispatch({
                type: REGISTER
            })
            return res.data;
        })
}
export const login = (user) => {
    return axios.post('/users/login', user)
        .then(res => {
            store.dispatch({
                type: LOGIN,
                payload: res.data.user,
            })
            localStorage.setItem('authToken', res.data.token)
            return res;
        })
}
export const logout = () => {
    localStorage.removeItem('authToken')
    store.dispatch({
        type: LOGOUT
    })
}