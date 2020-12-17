import * as types from '../types';
import axios from '../../config/axios';
import {CommonActions} from '@react-navigation/native';

export const register = (
  name,
  email,
  phoneNumber,
  password,
  navigation,
) => async (dispatch) => {
  dispatch({
    type: types.LOADING_START,
  });
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({name, email, phone: phoneNumber, password});

  try {
    const res = await axios.post(
      'https://coupontest.herokuapp.com/api/user/signup',
      body,
      config,
    );

    dispatch({
      type: types.REGISTER_SUCCESS,
      payload: res.data,
    });
    dispatch({
      type: types.LOADING_STOP,
    });
    navigation.navigate('Verification');
  } catch (err) {
    dispatch({
      type: types.LOADING_STOP,
    });
    // const errors = err.response.data.error.split(','); // WHat is this Talal ??
    // alert(errors ? errors : 'Something went wrong.Please try again');

    dispatch({
      type: types.REGISTER_FAIL,
      payload: err.response.data.message,
    });
    dispatch({
      type: types.SET_ERROR,
      payload: err.response.data.message,
    });
    setTimeout(() => dispatch({type: types.CLEAR_ERROR}), 10000);
  }
};

export const login = (email, password, navigation) => async (dispatch) => {
  try {
    dispatch({
      type: types.LOADING_START,
    });
    dispatch({
      type: types.CLEAR_COUPONS,
    });
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const body = JSON.stringify({
      email,
      password,
      // language: getSelectedLanguage().languageCode,
    });
    // alert(body);
    const res = await axios.post(
      'https://coupontest.herokuapp.com/api/user/signin',
      body,
      config,
    );

    console.log(res.data, 'ressssssss dataaaaaaaaaaa');

    dispatch({
      type: types.LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch({
      type: types.LOADING_STOP,
    });
    if (res.data.isVerified === false) {
      navigation.navigate('Verification');
    } else if (res.data.isPurchased === false) {
      dispatch({
        type: types.CHANGE_VERIFICATION,
      });
      navigation.navigate('Subsription');
    } else {
      dispatch({
        type: types.CHANGE_PURCHASED,
      });
      navigation.navigate('DrawerNavigation');
    }
    // dispatch(loadUser());
  } catch (err) {
    dispatch({
      type: types.LOADING_STOP,
    });
    dispatch({
      type: types.SET_ERROR,
      payload: err.response.data.message,
    });

    setTimeout(() => dispatch({type: types.CLEAR_ERROR}), 10000);
  }
};

export const verifyCode = (code, phone, navigation) => async (dispatch) => {
  try {
    dispatch({
      type: types.LOADING_START,
    });
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const body = JSON.stringify({
      phone,
      code,
    });

    const res = await axios.post(
      'https://coupontest.herokuapp.com/api/user/verify',
      body,
      config,
    );
    console.log(res.data);

    dispatch({
      type: types.VERIFIY_CODE_SUCCESS,
      payload: res.data,
    });
    dispatch({
      type: types.LOADING_STOP,
    });
    navigation.navigate('Subsription');
  } catch (err) {
    alert('error');
    dispatch({
      type: types.LOADING_STOP,
    });
    dispatch({
      type: types.SET_ERROR,
      payload: err.response.data.message,
    });

    setTimeout(() => dispatch({type: types.CLEAR_ERROR}), 10000);
    // alert(err.response.data.message);

    // const errors = err.response.data.error.split(',');
    // alert(errors);
    // dispatch({
    //   type: LOGIN_FAIL,
    //   errors: errors,
    // });
    // setTimeout(() => dispatch({type: EMPTY_ERROR}), 5000);
  }
};

export const resendVerificationCode = (phone) => async (dispatch) => {
  // alert(phone);
  try {
    dispatch({
      type: types.LOADING_START,
    });
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const body = JSON.stringify({
      phone,
    });

    const res = await axios.post(
      'https://coupontest.herokuapp.com/api/user/check-phone',
      body,
      config,
    );

    // dispatch({
    //   type: types.LOGIN_SUCCESS,
    //   payload: res.data,
    // });
    dispatch({
      type: types.LOADING_STOP,
    });
  } catch (err) {
    // alert(err.response.data.message);
    dispatch({
      type: types.LOADING_STOP,
    });
    // alert(err.response);
    // console.log(err.response);
    // const errors = err.response.data.error.split(',');
    // alert(errors);
    // dispatch({
    //   type: LOGIN_FAIL,
    //   errors: errors,
    // });
    // setTimeout(() => dispatch({type: EMPTY_ERROR}), 5000);
  }
};

export const logout = (navigation) => (dispatch) => {
  dispatch({
    type: types.CLEAR_AUTH,
  });
  // dispatch({
  //   type: types.CLEAR_CATEGORIES,
  // });
  dispatch({
    type: types.CLEAR_COUPONS,
  });
  dispatch({
    type: types.LOADING_STOP,
  });
  dispatch({
    type: types.CLEAR_FAVORITES,
  });
  dispatch({
    type: types.CLEAR_SUBSCRIPTION,
  });

  navigation.navigate('DrawerNavigation');
};

export const clearError = (navigation) => (dispatch) => {
  dispatch({
    type: types.CLEAR_ERROR,
  });
};

export const clearNotification = (navigation) => (dispatch) => {
  dispatch({
    type: types.CLEAR_NOTIFICATION,
  });
};
