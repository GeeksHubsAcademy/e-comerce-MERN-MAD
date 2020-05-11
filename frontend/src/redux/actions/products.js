import axios from 'axios';
import store from '../store'
import { GET_ALL_PRODUCTS, ADD_CART } from '../types';
export const getAllProducts = async() => {
    const token = localStorage.getItem('authToken');
    const res = await axios.get('/products', {
        headers: {
            Authorization: token
        }
    });
    store.dispatch({
        type: GET_ALL_PRODUCTS,
        payload: res.data
    })
}
export const addCart = ({ _id }) => {
    const { product } = store.getState();
    if (!product.cart.includes(_id)) {
        store.dispatch({
            type: ADD_CART,
            payload: _id
        })
    }
}