import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom'
import { getToken } from './utils/api'

import Login from './components/Login'
import Friends from './components/Friends'
import Logout from './components/Logout'

import './App.css';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const loggedIn = getToken()

  return (
    <div className="App">
      <nav>
        <Link to='/'>Home</Link>

        {!loggedIn && <Link to='/login'>Login</Link>}
        {loggedIn && <Link to='/friends'>Friends</Link>}
        {loggedIn && <Link to='/logout'>Logout</Link>}
      </nav>

      <Route exact path='/login' component={Login} />
      <ProtectedRoute exact path='/friends' component={Friends} />
      <ProtectedRoute exact path='/logout' component={Logout} />
    </div>
  );
}

export default withRouter(App)