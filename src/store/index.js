import thunkMiddleware from "redux-thunk";
// import logger from "redux-logger";
// import { createStore, applyMiddleware, compose, combineReducers } from "redux";
// import rootReducer from "./reducers";
// import * as storage from "redux-storage";
// import createEngine from "redux-storage-engine-localstorage";

// const middlewares = [thunkMiddleware];

// if (process.env.NODE_ENV !== "production" && typeof window !== "undefined") {
//   middlewares.push(logger);
// }

// const reducer = storage.reducer(combineReducers(rootReducer));
// const engine = createEngine("storage");

// const middleware = storage.createMiddleware(engine, [], [ "GET_POSTS" ]);
// const createStoreWithMiddleware = applyMiddleware(...middlewares, middleware)(
//   createStore
// );

// export function initializeStore(initialState = {}) {
//   return createStoreWithMiddleware(rootReducer);
// }

// import { createStore, applyMiddleware, compose } from "redux";
// import thunkMiddleware from "redux-thunk";
// import { createLogger } from "redux-logger";
// import rootReducer from "./reducers";

// const loggerMiddleware = createLogger({
//   collapsed: false,
// });

// const middlewares = [thunkMiddleware];

// if (process.env.NODE_ENV !== "production" && typeof window !== "undefined") {
//   middlewares.push(loggerMiddleware);
// }

// function configureStore(initialState) {
//   const store = createStore(
//     rootReducer,
//     initialState,
//     compose(applyMiddleware(...middlewares))
//   );

//   return store;
// }

// export default configureStore;

import { createLogger } from "redux-logger";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "./reducers";
import { createStore, applyMiddleware, compose } from "redux";

const middlewares = [thunkMiddleware];

const loggerMiddleware = createLogger({
  collapsed: false,
});

if (process.env.NODE_ENV !== "production" && typeof window !== "undefined") {
  middlewares.push(loggerMiddleware);
}

// export const makeStore = (context) =>
//   createStore(
//     rootReducer,
//     applyMiddleware(compose(applyMiddleware(...middlewares)))
//   );

export const makeStore = (context) =>
  createStore(rootReducer, compose(applyMiddleware(...middlewares)));

export const wrapper = createWrapper(makeStore, { debug: true });
