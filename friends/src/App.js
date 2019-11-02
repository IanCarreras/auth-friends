import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom'
import { getToken } from './utils/api'
import styled from 'styled-components'

import Home from './components/Home'
import Login from './components/Login'
import Friends from './components/Friends'
import Logout from './components/Logout'

import './App.css';
import ProtectedRoute from './components/ProtectedRoute';

const NavLink = styled(Link)`
  margin: 1rem 1rem;
`

function App() {
  const loggedIn = getToken()

  return (
    <div className="App">
      <nav>
        <NavLink to='/'>Home</NavLink>

        {!loggedIn && <NavLink to='/login'>Login</NavLink>}
        {loggedIn && <NavLink to='/friends'>Friends</NavLink>}
        {loggedIn && <NavLink to='/logout'>Logout</NavLink>}
      </nav>

      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
      <ProtectedRoute exact path='/friends' component={Friends} />
      <ProtectedRoute exact path='/logout' component={Logout} />
    </div>
  );
}

export default withRouter(App)