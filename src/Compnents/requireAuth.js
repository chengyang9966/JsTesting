import React,{useEffect} from 'react';
import {Route,Redirect,} from 'react-router-dom'

function PrivateRoute({ component: Component, isAuthenticated, ...children }) {
    console.log('isAuthenticated: ', isAuthenticated);
    isAuthenticated&&( <Route {...children} render={props => <Component {...props} />} />)
       return <Redirect to="/" />;
    
  }
  
  export default PrivateRoute;

