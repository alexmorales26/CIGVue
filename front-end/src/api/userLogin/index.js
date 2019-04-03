import Axios from 'axios';
import properties from '../../config/properties'
import { setUser , setLoginError } from "../../components/dashboard/Actions/logInActions";

/* FOR TEST PURPOSES GET RID OF ME WHEN LOGIN IMPLEMENTED */
const userLogin = () => (dispatch, getState) => {

  const {header: { credentials } } = getState();

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(credentials.email === "e@example.com") {
        resolve({ first_name: "Evelin", email: "e@example.com" });
      }
      reject("Invalid login.");
    }, 1000);
  });
}

/* END TEST */

// const userLogin = ({email, password}) => (dispatch,getState) => {
//     let url = properties.UserLogin;
//     const {header: { credentials } } = getState();
//
//     Axios.post(
//         url,
//         {...credentials}
//     ).then(
//         response => {
              // dispatch(setUser(response))
//         }
//     ).catch(
//         error => {
//             dispatch(setLoginError(err))
//         }
//     )
// }

export default userLogin;
