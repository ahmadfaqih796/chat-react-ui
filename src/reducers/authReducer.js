export const initialState = {
  loggedIn: false,
  user: null,
  token: null,
};

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        loggedIn: true,
        user: action.payload.user,
        token: action.payload.accessToken,
      };
    case "LOGOUT":
      return initialState;
    default:
      return state;
  }
}
