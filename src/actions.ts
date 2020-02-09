export const showModal = (state: boolean) => ({
  type: 'SHOW_MODAL',
  payload: state,
});

export const changeTextInputBackgroundColor = (color?: string) => ({
  type: 'CHANGE_BACKGROUND_COLOR',
  payload: color,
});
