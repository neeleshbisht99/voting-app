import error from './error';
import { combineReducers }  from 'redux';
import auth from './auth';

const rootReducer=combineReducers({
       error,
       auth
});

export default rootReducer;