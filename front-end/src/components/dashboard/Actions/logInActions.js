import { connect } from 'react-redux';
import LogInModal from '../UI/logInModal';
import API from '../../../api'

const storeCredentials = ({email, password}) => {
  return {
    type: "STORE_CREDENTIALS",
    credentials: {email, password}
  }
}

export const setUser = (user) => {
  return {
    type: "SET_USER",
    user
  }
}

export const setLoginError = (error) => {
  return {
    type: "SET_LOGIN_ERROR",
    error
  }
}

const mapStateToProps = (state) => {
  return {
    user : state.header.user,
    loginError: state.header.loginError
  }
}

const mapDispatchToProps = ( dispatch, state) => {
  return {
    storeCredentials: ({email, password}) => {
      dispatch(storeCredentials({email, password}));
    },
    attemptLogin: () => {
        dispatch(API.userLogin())
          // remove me when actual implementation in place
          .then((response) => { dispatch(setUser(response)) })
          .catch((err) => {dispatch(setLoginError(err)) });
          // end
    },
  }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps)(LogInModal);
