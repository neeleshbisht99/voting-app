import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logOut} from '../store/actions/auth';
const Navbar = ({auth,logOut}) =>(
    <div>
        <ul>
       <li><Link to="/register">Register</Link></li>
       <li><Link to="/login">Login</Link></li>
       <li><Link to="/">Home</Link></li>
       <li><Link to="/test">Test</Link></li>
       <li><a onClick={logOut}>logout</a></li>
        </ul>
        {auth.isAuthenticated && (<p>Logged in as {auth.user.username}</p>)}
    </div>
)
 
export default connect(store=>({auth:store.auth}),{logOut})(Navbar);