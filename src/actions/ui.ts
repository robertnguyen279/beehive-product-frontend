import { Action } from 'types';

export const Types = {
  OPEN_MENU_SLIDER: 'ui/open-menu-slider',
};

export const toggleMenuSldier = (): Action => {
  return {
    type: Types.OPEN_MENU_SLIDER,
  };
};
