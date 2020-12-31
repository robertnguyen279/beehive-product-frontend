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
      };
    }

    default: {
      return state;
    }
  }
}
