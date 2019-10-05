export * from './error';
import {createStore} from 'redux';

import rootReducer from './reducers';

const DEFAULT_STATE ={
    error:{message:null}
};

export const store = createStore(
    rootReducer,
    DEFAULT_STATE
);
