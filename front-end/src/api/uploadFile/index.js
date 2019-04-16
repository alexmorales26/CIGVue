import Axios from 'axios';
import properties from '../../config/properties'

const setServerResponse = (dataHeaders,dataResponse) =>{
    return {
        type: "SET_SERVER_RESPONSE",
        payload: {
            serverData: dataResponse,
            serverDataHeaders: dataHeaders
        }
    }
}
const setServerError = (error) => {
    return {
        type: "SET_SERVER_ERROR",
        payload: error
    }
}
const uploadFile = () => (dispatch,getState) => {
    let {dashboard} = getState();
    let file = dashboard.file;
    let url = properties.FileUpload;
    Axios.post(
        url,{
            data:{file}
        }
    ).then(
        response => {
            dispatch(setServerResponse(response.data.columnHeaders,response.data.data));
        }
    ).catch(
        error => {
            dispatch(setServerError(error));            
            dispatch(setServerResponse([],[]));
        }
    )
}

export default uploadFile