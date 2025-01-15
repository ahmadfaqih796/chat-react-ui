export const initialState = {
  isOpen: false,
  message: null,
  type: null,
  title: null,
};

export function alertReducer(state = initialState, action) {
  console.log("aaaaaa", action);
  switch (action.type) {
    case "SHOW_ALERT":
      return {
        ...state,
        isOpen: true,
        message: action.payload.message,
        type: action.payload.type,
        title: action.payload.title,
      };
    case "CLOSE_ALERT":
      return {
        ...state,
        isOpen: false,
        message: null,
        type: null,
        title: null,
      };
    default:
      return state;
  }
}
