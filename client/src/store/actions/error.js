import {ADD_ERROR,REMOVE_ERROR} from '../actionTypes';

export const addError = error =>({
    Type:ADD_ERROR,
    error
})

export const removeError = () =>({
    Type:REMOVE_ERROR
})