import { Action } from 'types/main';

export const Types = {
  GET_USER_SUCCESS: 'user/get-user-success',
  GET_USER: 'user/get-user',
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
