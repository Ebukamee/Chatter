import * as types from './typeactions';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, updateProfile,signInWithPopup } from 'firebase/auth';
import { auth, googleProvider,faceBookProvider } from '../firebase/firebase';
// import { useNavigate } from 'react-router-dom';
import { Dispatch } from 'redux';

const loginStart = () => ({
  type: types.LOGIN_START,
});

const loginSuccess = (user: any) => ({
  type: types.LOGIN_SUCCESS,
  payload: user,
});

const loginFail = (error: any) => ({
  type: types.LOGIN_FAIL,
  payload: error,
});

const logoutStart = () => ({
  type: types.LOGOUT_START,
});

const logoutSuccess = () => ({
  type: types.LOGOUT_SUCCESS,
});

const logoutFail = (error: any) => ({
  type: types.LOGOUT_FAIL,
  payload: error,
});

const registerStart = () => ({
  type: types.REGISTER_START,
});

const registerSuccess = (user: any) => ({
  type: types.REGISTER_SUCCESS,
  payload: user,
});

const registerFail = (error: any) => ({
  type: types.REGISTER_FAIL,
  payload: error,
});

const googleInStart = () => ({
  type: types.GOOGLE_LOGIN_START,
});

const googleInSuccess = () => ({
  type: types.GOOGLE_LOGIN_SUCCESS,
});

const googleInFail = (error: any) => ({
  type: types.GOOGLE_LOGIN_FAIL,
  payload: error,
});
const facebookInStart = () => ({
  type: types.FACEBOOK_LOGIN_START,
});

const facebookInSuccess = () => ({
  type: types.FACEBOOK_LOGIN_SUCCESS,
});

const facebookInFail = (error: any) => ({
  type: types.FACEBOOK_LOGIN_FAIL,
  payload: error,
});

export const loginInitiate = (email: string, password: string) => {
  return function (dispatch: Dispatch) {
    dispatch(loginStart());
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(loginSuccess(user));
        console.log('Success');
      })
      .catch((error) => dispatch(loginFail(error.message)));
  };
};

export const registerInitiate = (email: string, password: string, displayName: string) => {
  return function (dispatch: Dispatch) {
    dispatch(registerStart());
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(registerSuccess(user));
        updateProfile(user, {
          displayName,
        });
      })
      .catch((error) => dispatch(registerFail(error.message)));
  };
};

export const googleInitiate =   () => {
  return async function (dispatch: Dispatch) {
    dispatch(googleInStart());
    await signInWithPopup(auth, googleProvider)
      .then(() => {
        dispatch(googleInSuccess());
        console.log('Success');
      })
      .catch((error) => dispatch(googleInFail(error.message)));
  };
};

export const facebookInitiate =   () => {
  return async function (dispatch: Dispatch) {
    dispatch(facebookInStart());
    await signInWithPopup(auth, faceBookProvider)
      .then(() => {
        dispatch(facebookInSuccess());
        console.log('Success');
      })
      .catch((error) => dispatch(facebookInFail(error.message)));
  };
};
export const logOut = () => {
  return function (dispatch: Dispatch) {
    dispatch(logoutStart());
    signOut(auth)
      .then(() => dispatch(logoutSuccess()))
      .catch((error) => dispatch(logoutFail(error.message)));
  };
};

export const setUser = (user: any) => ({
  type: types.SET_USER,
  payload: user,
});
