import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from './UserContext';

interface PrivateRouteProps {
  path: string;
  element: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ path, element }) => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Redirect to="/login" />;
  }

  return <Route path={path} element={element} />;
};

export default PrivateRoute;