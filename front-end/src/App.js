/* Implemented by Alexander Morales 02/27/19 */
import React, { Component } from 'react';
import { Route, Switch,Redirect} from "react-router-dom";
import { Provider } from 'react-redux';
import {Store} from './store/store';
import {ConnectedRouter} from 'connected-react-router';
import history from './store/history' ;
import Dashboard from './routes/dashboard/index';
import Filters from './routes/filters/index';
import Header from './components/common/header/Actions/headerActions'
import StartOver from './routes/startover/index'
import Graphs from './routes/graphs/index'
import Export from './routes/export/index'


export default class App extends Component {
  render() {
    return (
      <Provider store={Store} >
        <ConnectedRouter history={history} >
          <div>
           <Header/>
            <Switch>
              <Route path="/home" exact component={Dashboard}/>


              <Route path="/startOver"  component={StartOver} />
              <Route path="/filters" component={Filters} />
              <Route path="/graphs" component={Graphs} />
              <Route path="/exports" component={Export} />
              <Redirect to="/home" from=""/>

            </Switch>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}
