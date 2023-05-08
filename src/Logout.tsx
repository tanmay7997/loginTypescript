import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from './UserContext';

const Logout: React.FC = () => {
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    setUser(null); // Clear the user object in the UserContext
    localStorage.removeItem('token'); // Remove the token from localStorage
  }, [setUser]);

  return <Redirect to="/login" />;
};

export default Logout;