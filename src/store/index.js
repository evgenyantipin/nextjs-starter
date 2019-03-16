import thunkMiddleware from "redux-thunk";
import logger from "redux-logger";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import rootReducer from "./reducers";
import * as storage from "redux-storage";
import createEngine from "redux-storage-engine-localstorage";

const middlewares = [thunkMiddleware];

if (process.env.NODE_ENV !== "production" && typeof window !== "undefined") {
  middlewares.push(logger);
}

const reducer = storage.reducer(combineReducers(rootReducer));
const engine = createEngine("storage");

const middleware = storage.createMiddleware(engine, [], [ "GET_POSTS" ]);
const createStoreWithMiddleware = applyMiddleware(...middlewares, middleware)(
  createStore
);

export function initializeStore(initialState = {}) {
  return createStoreWithMiddleware(rootReducer);
}
