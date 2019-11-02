import React from 'react'
import { Redirect } from 'react-router-dom'

const Logout = props => {
    localStorage.removeItem('token')
    return <Redirect to='/home' />

}

export default Logout