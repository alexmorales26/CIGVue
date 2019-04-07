/* Implemented by Alexander Morales 03/06/19 */

const initialState = {
    file: null,
    fileUploadModalStatus: true,
    fileUploadErrorAlert:false
};

const dashboardReducer = (state=initialState, action) => {
    switch(action.type){
        case "SET_FILE":
            return Object.assign({},state,{
                file:action.payload
            })
        case "SET_FILE_UPLOAD_MODAL_STATUS":
            return Object.assign({},state,{
                fileUploadModalStatus:action.payload
            })
        case "SET_FILE_UPLOAD_MODAL_ERROR_ALERT":
            return Object.assign({},state,{
                fileUploadErrorAlert:action.payload
            })
        default:
            return state;
    }
};
export default dashboardReducer;