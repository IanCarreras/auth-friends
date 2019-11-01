import React from 'react';
import { Link, Route } from 'react-router-dom'

import Login from './components/Login'

import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
      </nav>

      <Route exact path='/login' component={Login} />
    </div>
  );
}

export default App;