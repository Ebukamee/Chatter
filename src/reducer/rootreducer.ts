import authreducer from "./authreducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers ({
    auth : authreducer,
    firestore : firestoreReducer,
    firebase : firebaseReducer
})
export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;