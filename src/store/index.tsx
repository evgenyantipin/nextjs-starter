import { useMemo } from "react";
import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import reducers from "./reducers";

let store;

const middlewares = [thunkMiddleware];

const loggerMiddleware = createLogger({
  collapsed: false,
});

if (process.env.NODE_ENV !== "production" && typeof window !== "undefined") {
  middlewares.push(loggerMiddleware);
}

function initStore(initialState) {
  return createStore(reducers, initialState, compose(applyMiddleware(...middlewares)));
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState) {
  const s = useMemo(() => initializeStore(initialState), [initialState]);
  return s;
}
