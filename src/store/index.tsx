import thunkMiddleware from 'redux-thunk';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import postsReducer from './reducers/posts';
import counterReducer from './reducers/counter';

const loggerMiddleware = createLogger({
  collapsed: false
});

const rootReducer = combineReducers({
  posts: postsReducer,
  counter: counterReducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware, thunkMiddleware)
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
