import React,{Component,Fragment} from 'react';
import {Provider} from 'react-redux'
import {store} from '../store';
import {setCurrentUser,addError,setToken} from '../store/actions';
import decode from 'jwt-decode';
import Auth from '../components/auth';
import ErrorMessage from '../components/ErrorMessage';
import {BrowserRouter as Router} from 'react-router-dom';
import RouteViews from './RouteViews';
import Navbar from './Navbar';
import TestPage from '../pages/TestPage';


if (localStorage.jwtToken) {
    setToken(localStorage.jwtToken);
    try{
        store.dispatch(setCurrentUser(decode(localStorage.jwtToken)));
    }
    catch(err){
         store.dispatch(setCurrentUser({}));
      //   store.dispatch(addError(err));
    }
}

class App extends Component {
    render(){
        return (<Provider store={store}>
       <Router>
           <Fragment>
              <Navbar/>
              <RouteViews/>
           </Fragment>
       </Router>
        </Provider>)
    }
}
export default App;