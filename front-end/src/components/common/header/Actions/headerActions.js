/* Implemented by Alexander Morales on 02/27/19 */
import { connect } from 'react-redux';
import Header from '../UI/header';

const mapStateToProps = (state) => {
    console.log(state.header.user)
    return {
        user: state.header.user && state.header.user.first_name || 'Admin'
    }
}

export default connect(
    mapStateToProps,
    null)(Header);
