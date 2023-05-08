import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from './UserContext';

const LoginPage: React.FC = () => {
  const { user, setUser } = useContext(UserContext) || {}; // Provide a default empty object for user context
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (user && username === user.username && password === user.password) {
      const updatedUser = { ...user, loggedIn: true };
      setUser(updatedUser);
      const token = 'exampleToken';
      localStorage.setItem('token', token);
      history.push('/dashboard');
    } else {
      alert('Invalid username or password');
    }
  };

  if (user && user.loggedIn) {
    history.push('/dashboard');
  }

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="text-center">
        <h1 style={{ color: 'red' }} className="text-danger">Login Page</h1>
        <form onSubmit={handleSubmit}>
          <label style={{ color: 'blue' }}>Username: </label>
          <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
          <br/><br/>
          <label style={{ color: 'blue' }}>Password: </label>
          <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
          <br/><br/>
          <button type="submit" className="btn btn-success mt-3" style={{ color: 'yellow', backgroundColor: 'green' }}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;