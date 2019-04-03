const initialState = {
    user: null,
    credentials: {},
    loginError: null
};

const headerReducer = (state=initialState, action) => {
    switch(action.type){
        case "STORE_CREDENTIALS":
          return {...state, credentials: action.credentials }
        case "SET_USER":
          return {...state, user: action.user, loginError: null}
        case "SET_LOGIN_ERROR":
          return {...state, user: null, loginError: action.error}
        default:
            return state;
    }
};
export default headerReducer;
