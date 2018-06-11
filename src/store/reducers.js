import { combineReducers } from 'redux';

// Here, import each individual reducer
import loginReducer from './login/reducers';

// Combine into the root reducer
const rootReducer = combineReducers({
    login: loginReducer
});

export default rootReducer;