import error from './error';
import { combineReducers }  from 'redux';
import auth from './auth';
import {polls,currentPoll} from './polls';
const rootReducer=combineReducers({
       error,
       auth,
       polls,
       currentPoll
});
 
export default rootReducer;