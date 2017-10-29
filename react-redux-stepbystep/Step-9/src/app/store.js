import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import math from "./reducers/MathReducer";
import user from "./reducers/UserReducer";

export default createStore(
                combineReducers({math,user}),
                 {}, 
                 applyMiddleware(createLogger(),thunk, promise()));