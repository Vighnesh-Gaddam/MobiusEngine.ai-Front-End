import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import AppRoutes from './routes/AppRoute';

const App = () => {
  return (
    <Router>
      <div>
        <AppRoutes /> 
      </div>
    </Router>
  );
};

export default App;
