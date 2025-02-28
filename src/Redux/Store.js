import { applyMiddleware, compose, createStore } from "redux";
import { rootReducer } from "./RootReducer";
import logger from "redux-logger";

const middleWares = [logger]

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);