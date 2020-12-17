import {
  // LOADING,
  LOADING_START,
  LOADING_STOP,
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,

  // EMAIL_RESEND_FAIL,
  VERIFIY_CODE_SUCCESS,
  VERIFIY_CODE_ERROR,
  RESEND_VERIFICATION_CODE_SUCCESS,
  RESEND_VERIFICATION_CODE_ERROR,
  CLEAR_AUTH,
  PAYMENT_SUCCESS,
  SET_ERROR,
  CLEAR_ERROR,
  CHANGE_PURCHASED,
  CHANGE_REGISTRATION,
  CHANGE_VERIFICATION,
  TEST_NOTIFICATION,
  CLEAR_NOTIFICATION,
} from '../types';

import {saveData, readData, clearStorage} from '../../utils/asyncStorage';

const savingtoken = async (token) => {
  await saveData(token);
};

const removingtoken = async (token) => {
  await clearStorage();
};

const initalState = {
  token: '',
  isAuthenticated: null,
  isRegistered: null,
  loading: true,
  user: null,
  error: '',
  verification: false,
  phone: '',
};

export default function async(state = initalState, action) {
  const {type, payload} = action;
  console.log(payload, 'payload');
  console.log(type, 'typeee');
  switch (type) {
    case LOADING_START:
      return {
        ...state,
        loading: true,
      };
    case CHANGE_VERIFICATION:
      return {
        ...state,
        loading: false,
        verification: true,
        isRegistered: true,
      };
    case CHANGE_REGISTRATION:
      return {
        ...state,
        loading: false,
        isRegistered: true,
      };

    case LOGIN_SUCCESS:
      savingtoken(payload.token);
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
        isRegistered: true,

        error: '',
      };

    case SET_ERROR: {
      return {
        ...state,
        error: payload,
      };
    }
    case CLEAR_ERROR: {
      return {
        ...state,
        error: '',
      };
    }

    case VERIFIY_CODE_SUCCESS:
      // savingtoken(payload.token);
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        // user: payload,
        error: '',
        verification: true,
        isRegistered: true,
      };
    case CLEAR_AUTH:
      removingtoken();
      return initalState;
    // // case LOGIN_FAIL:

    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        verification: false,
        userPayment: payload,
        isRegistered: true,
      };
    // case REGISTER_FAIL:
    // case RESET_AUTH:
    //   return initalState;

    // case EMAIL_VERIFICATION_SUCCESS:
    //   return {
    //     ...state,
    //     // ...payload,
    //     isVerified: true,
    //     isAuthenticated: true,
    //     loading: false,
    //     error: [],
    //   };
    // case EMAIL_VERIFICATION_FAIL:
    //   return {
    //     ...state,
    //     // ...payload,
    //     isVerified: false,
    //     loading: false,
    //     error: action.error,
    //   };
    case LOADING_START:
      return {
        ...state,
        loading: true,
      };
    case LOADING_STOP:
      return {
        ...state,
        loading: false,
      };

    // case EMAIL_RESEND_SUCCESS: {
    //   return {
    //     ...state,
    //     loading: false,
    //     // error: payload,
    //   };
    // }
    // case EMAIL_RESEND_FAIL: {
    //   return {
    //     ...state,
    //     loading: false,
    //     error: payload,
    //   };
    // }
    case LOADING_STOP: {
      return {
        ...state,
        loading: false,
      };
    }

    case VERIFIY_CODE_SUCCESS:
    case VERIFIY_CODE_ERROR:
      return {
        ...state,
        ...action.payload,
      };

    case RESEND_VERIFICATION_CODE_SUCCESS:
    case RESEND_VERIFICATION_CODE_ERROR:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}
