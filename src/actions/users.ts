import { Action, LoginUser } from 'types';

export const Types = {
  GET_USER_SUCCESS: 'user/get-user-success',
  GET_USER: 'user/get-user',
  LOGIN_USER: 'user/login-user',
  GET_USER_ERROR: 'user/get-user-error',
};

export const getUser = (): Action => ({
  type: Types.GET_USER,
});

export const getUserSuccess = (user: any): Action => ({
  type: Types.GET_USER_SUCCESS,
  payload: {
    ...user,
  },
});

export const getUserError = (): Action => ({
  type: Types.GET_USER_ERROR,
});

export const loginUser = ({ email, password }: LoginUser): Action => ({
  type: Types.LOGIN_USER,
  payload: {
    email,
    password,
  },
});

export const loginUserError = (error: string): Action => ({
  type: Types.LOGIN_USER,
  payload: {
    error,
  },
});
