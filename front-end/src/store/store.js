/* Implemented by Alexander Morales 2/27/19 */ 
/* Documentation: [React-Router-redux V4] https://github.com/kurt-hardy/react-router-redux-issue/blob/master/src/configureStore.js */
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createLogger } from 'redux-logger'
import history from './history';
/* Documentation: [Redux-Persist] https://github.com/rt2zz/redux-persist#readme */
/*import {persistStore,persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
*/
/* Imported component reducers */
import {headerReducer} from '../components/common/header';
import {dashboardReducer} from '../components/dashboard'
const rootReducer = combineReducers(
    {
        router: connectRouter(history),
        header: headerReducer,
        dashboard:dashboardReducer
    }
);

const middleware = [thunk];
const composeEnhancers = [];

/* Checking if Developer has Redux extension tools */
var redux_tools =  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(): compose

if (process.env.NODE_ENV === "development") {
  composeEnhancers.push(redux_tools);
  middleware.push(createLogger())
  middleware.push(routerMiddleware(history))
}
/*
const persistedReducer = persistReducer(persistConfig,rootReducer);
 */
export const Store = createStore(
    //connectRouter(history)(persistedReducer),
    connectRouter(history)(rootReducer),
    {},
    compose(
        applyMiddleware(...middleware),
        ...composeEnhancers
    )
);
//export const persistorStore = persistStore(Store);