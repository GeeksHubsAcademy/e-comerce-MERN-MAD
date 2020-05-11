import axios from "axios";
export const API_URL = window.location.href.includes('localhost') ? 'http://localhost:3001' : '';

axios.defaults.baseURL = API_URL;