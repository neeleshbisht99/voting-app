import {ADD_ERROR,REMOVE_ERROR} from '../actionTypes';
export default (state={message:null} , action) => {
    console.log(action);
    switch(action.type)
    {
        case ADD_ERROR:
            return {...state,message:action.error};
            break;
        case REMOVE_ERROR:
            return {...state,message:null};
            break;
        default:
            return state;
    }
}