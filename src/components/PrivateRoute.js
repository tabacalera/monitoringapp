import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import  AuthService  from '../services/AuthService'
function PrivateRoute({ component: Component, ...rest }) {
  return(
    <Route {...rest} 
        render={props =>
          AuthService.loggedIn() ? (
            <Component {...props} />
            ) : (
            <Redirect to={{ pathname: "/login", state: { referer: props.location } }} />
            )
        }
    />
  );
}

export default PrivateRoute;