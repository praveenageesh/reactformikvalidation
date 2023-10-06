import React from 'react';
import Dashboard from './Dashboard';
import './App.css'; // Import your CSS file for styling
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Library Management System</h1>
        </header>
        <div className="container">
          <Switch>
            {/* Define routes for different views */}
            <Route path="/" component={Dashboard} />
            {/* Add more routes for other views if necessary */}
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
