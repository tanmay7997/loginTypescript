import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserContextProvider } from './UserContext';
import Logout from './Logout';
import LoginPage from './Loginpage';
import DashboardPage from './Dashboardpage';

const App = () => {
  return (
    <Router>
      <UserContextProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </UserContextProvider>
    </Router>
  );
};

export default App;