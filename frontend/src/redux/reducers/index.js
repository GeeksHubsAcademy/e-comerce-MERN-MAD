import { combineReducers } from "redux";
import user from './user.js'
import product from './product.js'
const rootReducer = combineReducers({
    user,
    product
});
export default rootReducer;