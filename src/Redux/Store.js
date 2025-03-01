import { applyMiddleware, compose, createStore } from "redux";
import { rootReducer } from "./RootReducer";
import logger from "redux-logger";
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
import { thunk } from "redux-thunk";

// Encryption on persistenet storage
const encryptor = encryptTransform({
    secretKey: "amardeepsingh1105@gmail.com",
    onError: function (error) {
        console.error("Encryption Error:", error);
    }
});

const persistConfig = {
    key: 'root',
    storage,
    transforms: [encryptor],
    whitelist: ['cart']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [process.env.NODE_ENV !== 'production' && logger, thunk].filter(Boolean)

const composeEnhancers = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const composedEnhancers = composeEnhancers(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composedEnhancers);

export const persistor = persistStore(store);