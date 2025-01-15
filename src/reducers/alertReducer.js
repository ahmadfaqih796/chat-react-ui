export const initialState = {
  isOpen: false,
  message: null,
  type: null,
};

export function alertReducer(state = initialState, action) {
  switch (action.type) {
    case "SUCCESS":
      return {
        ...state,
        isOpen: true,
        message: action.message,
        type: "success",
      };
    case "ERROR":
      return {
        ...state,
        isOpen: true,
        message: action.message,
        type: "error",
      };
    default:
      return state;
  }
}
