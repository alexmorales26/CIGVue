/* Implemented by Alexander Morales 03/06/19 */

const initialState = {
    file: null,
    fileUploadModalStatus: true,
    fileUploadErrorAlert:false,
    serverData: [],
    serverDataHeaders: [],
    serverError:null
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
        case "SET_SERVER_RESPONSE":
            return Object.assign({},state,{
                serverData:action.payload.serverData,
                serverDataHeaders: action.payload.serverDataHeaders
            });
        case "SET_SERVER_ERROR":
            return Object.assign({},state,{
                serverError:action.payload
            });
        default:
            return state;
    }
};
export default dashboardReducer;