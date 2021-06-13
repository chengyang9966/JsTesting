// import {Route,Redirect} from 'react-router-dom';
// function PrivateRoute({ component: Component, isAuthenticated, ...children }) {
//     if (isAuthenticated === true) {
//       return <Route {...children} render={props => isAuthenticated ? (
//         <Redirect exact to="/home" />
//       ) : (
//         <Component {...props} {...children} />
//       )} />;
//     }
//     return <Redirect to="/" />;
//   }
  
//   export default PrivateRoute;
  
  import React, { useEffect} from 'react';
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component,isAuthenticated, ...rest }) => {
    console.log('isAuthenticated: ', isAuthenticated);


  if(isAuthenticated === null){
    return <></>
  }
  return (
    <Route {...rest} render={props =>
      !isAuthenticated ? (
        <Redirect to='/'/>
      ) : (
        <Component {...props} />
      )
    }
    />
  );
};
export default PrivateRoute;