import { connect } from 'react-redux';
import FileUpload from '../UI/file_upload';
import API from '../../../api'
const setFile = (file) => {
    return {
        type:"SET_FILE",
        payload:file
    }
}
const setFileUploadModalStatus = (status) => {
        return {
            type: "SET_FILE_UPLOAD_MODAL_STATUS",
            payload: status
        }   
}
const setFileUploadErrorAlert = (status) => {
    return {
        type: "SET_FILE_UPLOAD_MODAL_ERROR_ALERT",
        payload: status
    }
}

const mapStateToProps = (state) => {
    return {
        fileUploadModalStatus: state.dashboard.file === null? state.dashboard.fileUploadModalStatus:!state.dashboard.fileUploadModalStatus,
        fileUploadErrorAlert: state.dashboard.fileUploadErrorAlert
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        uploadFile: () => {
            dispatch(API.uploadFile());
        },
        setFile:(file) => {
            dispatch(setFile(file));
        },
        setFileUploadModalStatus:(status) => {
            dispatch(setFileUploadModalStatus(status));
        },
        setFileUploadErrorStatus: (status) => {
            dispatch(setFileUploadErrorAlert(status));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)(FileUpload);
