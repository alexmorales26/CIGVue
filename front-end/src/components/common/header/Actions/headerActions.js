/* Implemented by Alexander Morales on 02/27/19 */
import { connect } from 'react-redux';
import Header from '../UI/header';

const mapStateToProps = (state) => {
    return {
        user: state.user || 'Admin'
    }
}

export default connect(
    mapStateToProps,
    null)(Header);