


import {createStore} from "../../node_modules/_redux@4.0.4@redux";
import { reducers } from "./reducers";

const store = createStore(reducers);

console.log(store.getState());  // Map

export default store;

