import { createStore, applyMiddleware, Middleware, compose } from "redux";
import logger from "redux-logger";
import thunk, { ThunkMiddleware, ThunkDispatch } from 'redux-thunk';
import rootReducer, { RootState } from "../reducer/rootreducer";
import { getFirestore, reduxFirestore, createFirestoreInstance } from "redux-firestore";
import { getFirebase, reactReduxFirebase } from "react-redux-firebase";
import { firebaseConfig } from "../firebase/firebase";


const middleware: Middleware[] = [thunk.withExtraArgument({ getFirestore, getFirebase })];

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

const composeEnhancers =
  (typeof window !== 'undefined' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export type AppDispatch = ThunkDispatch<RootState, undefined, any>;

export const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(...middleware),
    reduxFirestore(firebaseConfig),
    // reactReduxFirebase(firebaseConfig)
  )
);



