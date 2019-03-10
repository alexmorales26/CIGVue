import { connect } from 'react-redux';
import FileUpload from '../UI/file_upload';
import API from '../../../api'
const setFile = (file) => {
    return {
        type:"SET_FILE",
        payload:file
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        uploadFile: () => {
            dispatch(API.uploadFile());
        },
        setFile:(file) => {
            dispatch(setFile(file));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)(FileUpload);