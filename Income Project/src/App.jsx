import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import IncomePage from './pages/IncomePage';
import ExpensePage from './pages/ExpensePage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/income">Income</Link>
            </li>
            <li>
              <Link to="/expense">Expense</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/income" component={IncomePage} />
          <Route path="/expense" component={ExpensePage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
