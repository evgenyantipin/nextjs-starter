import thunkMiddleware from "redux-thunk";
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

export const makeStore = (context) =>
  createStore(rootReducer, compose(applyMiddleware(...middlewares)));

export const wrapper = createWrapper(makeStore, { debug: true });
