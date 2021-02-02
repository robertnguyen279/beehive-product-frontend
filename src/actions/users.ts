import { Action, LoginUser, LoginByGoogle, LoginByFacebook, CreateUser } from 'types';

export const Types = {
  GET_USER_SUCCESS: 'user/get-user-success',
  GET_USER: 'user/get-user',
  LOGIN_USER: 'user/login-user',
  GET_USER_ERROR: 'user/get-user-error',
  LOGIN_USER_ERROR: 'user/login-user-error',
  LOGIN_BY_GOOGLE: 'user/login-by-google',
  LOGIN_BY_FACEBOOK: 'user/login-by-facebook',
  CREATE_USER: 'user/create-user',
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

export const loginUser = ({ email, password, remember }: LoginUser): Action => ({
  type: Types.LOGIN_USER,
  payload: {
    email,
    password,
    remember,
  },
});

export const loginUserError = (error: string): Action => ({
  type: Types.LOGIN_USER_ERROR,
  payload: {
    error,
  },
});

export const loginByGoogle = ({ firstName, lastName, avatar, email, token }: LoginByGoogle): Action => ({
  type: Types.LOGIN_BY_GOOGLE,
  payload: {
    firstName,
    lastName,
    avatar,
    email,
    token,
  },
});

export const loginByFacebook = ({ name, email, avatar }: LoginByFacebook): Action => ({
  type: Types.LOGIN_BY_FACEBOOK,
  payload: {
    name,
    email,
    avatar,
  },
});

export const createUser = ({ password, email }: CreateUser): Action => ({
  type: Types.CREATE_USER,
  payload: {
    password,
    email,
  },
});
