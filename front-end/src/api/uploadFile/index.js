import Axios from 'axios';
import properties from '../../config/properties'

const uploadFile = () => (dispatch,getState) => {
    let {dashboard} = getState();
    let file = dashboard.file;
    let url = properties.FileUpload;
    Axios.post(
        url,
        file
    ).then(
        response => {
            console.log(response);
        }
    ).catch(
        error => {
            console.log(error);
        }
    )
}

export default uploadFile