import React, {Fragment} from 'react';
 import {connect} from 'react-redux';

 const ErrorMessage = ( {error}) => (<Fragment>
     {
         error.message && <div> {error.message.err}</div>
     }
 </Fragment>);

 export default connect(store => ({error:store.error}))(ErrorMessage);