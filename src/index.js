import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { HashRouter, Switch, Route } from 'react-router-dom';

import LoginScreenContainer from './containers/LoginScreenContainer';
import rootReducer from './store/reducers';

// Create a store from the rootReducer, and allow the devtools to hook in
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render((
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route path='/' component={LoginScreenContainer} />
            </Switch>
        </HashRouter>
    </Provider>
), document.getElementById('root'));
