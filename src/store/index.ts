import { createStore, applyMiddleware, Middleware } from "redux";
import logger from "redux-logger";
import thunk, { ThunkMiddleware, ThunkDispatch } from 'redux-thunk';
import rootReducer, { RootState } from "../reducer/rootreducer";

const middleware: Middleware[] = [thunk as ThunkMiddleware<RootState, any>];

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

export type AppDispatch = ThunkDispatch<RootState, undefined, any>;

export const store = createStore(rootReducer, applyMiddleware(...middleware));
