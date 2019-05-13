/* Implemented by Alexander Morales on 02/27/19 */
import { connect } from 'react-redux';
import Header from '../UI/header';
import { Auth } from 'aws-amplify'

const setUser = (username) => {
    return {
        type: "SET_AUTHORIZED_USER",
        payload: username
    }
}
const signOutUser = () => {
    return {
        type: "SIGN_OUT_USER",
        payload: null
    }
}

const signOut = () => (dispatch) => {
    Auth.signOut().then(
        dispatch(signOutUser())
    )
}

const getAuthorizedUser = () => (dispatch) => {
    Auth.currentUserInfo().then(
        (info) => {

            dispatch(setUser(info.username))
        }
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.header.user || 'Admin'
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        setAuthUser: () => {
            dispatch(getAuthorizedUser());
        },
        signOutUser: () => {
            dispatch(signOut());
        }
    }

}

export default connect(
    mapStateToProps,
    mapDispatchToProps)(Header);
