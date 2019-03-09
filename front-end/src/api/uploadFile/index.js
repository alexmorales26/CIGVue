import Axios from 'axios';
import properties from '../../config/properties'

const uploadFile = () => (dispatch,getState) => {
    console.log('Im in the API call');
    let {dashboard} = getState();
    const data = new FormData();
    let file = dashboard.file.File
    //console.log(file);
     data.append('file', file, file.name);
     //console.log(JSON.stringify(data))
    let url = properties.FileUpload
    Axios.post(
        url,
        data
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