import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from './UserContext';

const DashboardPage: React.FC = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    return null;
  }

  return (
    <div>
      <h1>Welcome, {user.name}!</h1>
      <h2>Your Todos:</h2>
      <ul>
        {user.todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
      <Link to="/logout">Logout</Link>
    </div>
  );
};

export default DashboardPage;