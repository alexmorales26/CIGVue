/* Implemented by Alexander Morales 03/06/19 */

const initialState = {
    file: null
};

const dashboardReducer = (state=initialState, action) => {
    switch(action.type){
        case "SET_FILE":
            return Object.assign({},state,{
                file:action.payload
            })
        default:
            return state;
    }
};
export default dashboardReducer;