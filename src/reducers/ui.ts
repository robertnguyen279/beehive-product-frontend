import { Types } from 'actions/ui';

const INITIAL_STATE = {
  openMenuSlider: undefined,
};

interface Action {
  type: string;
  payload?: any;
}

export default function users(state = INITIAL_STATE, action: Action): any {
  switch (action.type) {
    case Types.OPEN_MENU_SLIDER: {
      return {
        ...state,
        openMenuSlider: !state.openMenuSlider,
      };
    }

    default: {
      return state;
    }
  }
}
