import * as types from '../actions/typeactions';

interface AuthState {
  authError: null | string;
  loading: boolean;
  Cuser: null | any;
  Profile:any
  logout: boolean;
}

const initState: AuthState = {
  authError: null,
  loading: false,
  Cuser: null,
  logout: false,
  Profile: {}
};

const authReducer = (state = initState, action: any): AuthState => {
  switch (action.type) {
    case types.LOGIN_START:
      return {
        ...state,
        loading: true,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        authError: null,
        Cuser: action.payload,
      };
      case 'UPLOAD_PROFILE_SUCCESS':
      return {
        ...state,
        authError: '',
        Cuser: action.payload,
      };
      case 'UPLOAD_PROFILE_FAILURE':
      return {
        ...state,
        authError: action.payload,
        Cuser: {},
      };
    case types.LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        authError: action.payload,
      };
    case types.REGISTER_START:
      return {
        ...state,
        loading: true,
      };
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        authError: null,
        Cuser: action.payload,
      };
    case types.REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        authError: action.payload,
      };
    case types.LOGOUT_START:
      return {
        ...state,
        loading: true,
        logout: true,
      };
    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        Cuser: null,
        loading: false,
      };
    case types.LOGOUT_FAIL:
      return {
        ...state,
        loading: false,
        authError: action.payload,
      };
    case types.SET_USER:
      return {
        ...state,
        loading: false,
        Cuser: action.payload,
      };
      case types.GOOGLE_LOGIN_START:
      return {
        ...state,
        loading: true,
      };
    case types.GOOGLE_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        authError: null,
        Cuser: action.payload,
      };
    case types.GOOGLE_LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        authError: action.payload,
      };
      case types.FACEBOOK_LOGIN_START:
      return {
        ...state,
        loading: true,
      };
    case types.FACEBOOK_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        authError: null,
        Cuser: action.payload,
      };
    case types.FACEBOOK_LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        authError: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
