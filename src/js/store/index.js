import {createStore } from "redux";
import rootReducer from "../reducers/index";

//createStore is the function for creating the Redux store.
//createStore takes a reducer as the first argument, rootReducer in our case.
const store = createStore(rootReducer);

export default store;