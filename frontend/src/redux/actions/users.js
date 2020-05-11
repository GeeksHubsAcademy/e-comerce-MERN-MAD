import { REGISTER } from "../types";
import axios from 'axios'
import store from "../store";
export const register = (user) => {
    return axios.post('/users/register', user)
        .then(user => {
            store.dispatch({
                type: REGISTER
            })
            return user;
        })
}