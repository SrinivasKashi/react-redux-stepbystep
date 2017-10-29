import {render} from "react-dom";
import React from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { Provider } from "react-redux";

import App from './containers/App';

const mathReducer = (state = {
    result:1,
    lastValues:[]
}, action) => {
    switch(action.type){
        case "ADD":
            state = {
                ...state,
                result: state.result+action.payload,
                lastValues: [...state.lastValues,action.payload]
            }
            state.lastValues.push(action.payload);
            break;
        case "SUBTRACT":
            state = {
                ...state,
                result: state.result-action.payload,
                lastValues: [...state.lastValues,action.payload]
            }
            state.lastValues.push(action.payload);
            break;
    }
    return state;
}

const userReducer = (state = {
    name:"harsha",age:28
}, action) => {
    switch(action.type){
        case "SET_NAME":
            state = {
                ...state,
                name: action.payload
            }
            break;
        case "SET_AGE":
            state = {
                ...state,
                age: action.payload
            }
            break;
    }
    return state;
}

const myLogger = (store) => (next) => (action) => {
   // console.log("This is the action", action);
    next(action);
}
//const store = createStore(combineReducers({mathReducer:mathReducer,userReducer:userReducer})); below code is ES6

const store = createStore(combineReducers({math:mathReducer,user:userReducer}), {}, applyMiddleware(myLogger,createLogger()));
store.subscribe(() => {
  //  console.log("Store updated", store.getState());
})

render(
    <Provider store={store}>
        <App />
    </Provider>, 
    window.document.getElementById('app'));