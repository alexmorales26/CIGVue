import { connect } from 'react-redux';
import logInModal from '../UI/logInModal.js';



const mapStateToProps = (state) => {
  return {
    user : state.header.user
  }
}
const mapDispatchToProps = ( dispatch, state) => {
  return {

  }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps)(logInModal);
