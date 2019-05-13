const initialState = {
  user: null,
  credentials: {},
  loginError: null
};

const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_AUTHORIZED_USER":
      return { ...state, user: action.payload, loginError: null }
    case "SET_LOGIN_ERROR":
      return { ...state, user: null, loginError: action.error }
    case "SIGN_OUT_USER":
      return initialState
    default:
      return state;
  }
};
export default headerReducer;
