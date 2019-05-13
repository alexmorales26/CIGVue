/* Implemented by Alexander Morales 02/27/19 */
import React, { Component } from 'react';
import { Route, Switch,Redirect} from "react-router-dom";
import { Provider } from 'react-redux';
import {Store} from './store/store';
import {ConnectedRouter} from 'connected-react-router';
import history from './store/history' ;
import Dashboard from './routes/dashboard/index';
import Header from './components/common/header/Actions/headerActions'
import awsConfig from './auth/aws_config'
import Amplify from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react'

/*[AWS-AMPLIFY] (https://aws-amplify.github.io/amplify-js/media/authentication_guide#manual-setup)*/
Amplify.configure(awsConfig);
class App extends Component {
  render() {
    return (
      <Provider store={Store} >
        <ConnectedRouter history={history} >
          <div>
           <Header/>
            <Switch>
              <Route path="/home" exact component={Dashboard}/>
              <Redirect to="/home" from=""/>
            </Switch>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

const AuthoApp = withAuthenticator(
  (props) => (
    <App
      {...props}
    />
  ),
  false
);
export default AuthoApp;