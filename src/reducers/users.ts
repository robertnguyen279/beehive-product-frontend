import { Types } from 'actions/users';

const INITIAL_STATE = {};

interface Action {
  type: string;
  payload?: any;
}

export default function users(state = INITIAL_STATE, action: Action): any {
  switch (action.type) {
    case Types.GET_USER_SUCCESS: {
      return {
        ...state,
        user: action.payload,
        loginUserError: undefined,
        getUserError: undefined,
      };
    }
    case Types.GET_USER_ERROR: {
      return {
        ...state,
        getUserError: true,
      };
    }
    case Types.LOGIN_USER_ERROR: {
      return {
        ...state,
        loginUserError: action.payload.error,
      };
    }

    default: {
      return state;
    }
  }
}
