import {colors} from './colors';

interface Action {
  type: string;
  payload: boolean;
}

const initialState = {
  showModal: false,
  color: colors.white,
};

export const toggleModal = (state: object = initialState, action: Action) => {
  switch (action.type) {
    case 'SHOW_MODAL':
      return {
        ...state,
        showModal: action.payload,
      };
    default:
      return state;
  }
};

export const toggleBackgroundColor = (
  state: object = initialState,
  action: Action,
) => {
  switch (action.type) {
    case 'CHANGE_BACKGROUND_COLOR':
      return {
        ...state,
        color: action.payload,
      };
    default:
      return state;
  }
};
