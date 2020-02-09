interface Action {
  type: string;
  payload: boolean;
}

const initialState = {
  showModal: false,
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
