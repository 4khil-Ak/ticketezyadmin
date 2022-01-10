import React from 'react';
import { Route  } from 'react-router-dom';

export const PrivateRoute = ({ redirectPath, ...props }) => {
//   const { user } = useAuthState();
let user = null;
  if (!user) {
    // return <Navigate to={redirectPath} />;
    return  <></>
  }
  return <Route {...props} />;
};

export default PrivateRoute;