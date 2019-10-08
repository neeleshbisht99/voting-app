import React,{Component} from 'react';
import {Provider} from 'react-redux'
import {store} from '../store';
import {setCurrentUser,addError,setToken} from '../store/actions';
import decode from 'jwt-decode';

if (localStorage.jwtToken) {
    setToken(localStorage.jwtToken);
    try{
         store.dispatch(setCurrentUser(decode(localStorage.jwtToken)));
    }
    catch(err){
         store.dispatch(setCurrentUser({}));
         store.dispatch(addError(err));
    }
}

class App extends Component {
    render(){
        return (<Provider store={store}>
        <div>App works</div>
        </Provider>)
    }
}
export default App;