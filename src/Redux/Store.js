import { applyMiddleware, compose, createStore } from "redux";
import { rootReducer } from "./RootReducer";
import logger from "redux-logger";

const middleWares = [logger]

// const loggerMiddleware = (state) => (next) => (action) => {
//     if(!action.type) {
//         next(action)
//     }

//     console.log('type:', action.type)
//     console.log('payload:', action.payload)
//     console.log('cuurentState:', state.getState())

//     next(action)

//     console.log('next State:', state.getState())
// };

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);