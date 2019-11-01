import React, { useState } from 'react'

const Login = props => {
    const [ user, setUser ] = useState({
        email: '',
        password: ''
    })

    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        })
    }
    return (
        <form>
            <input type='text' name='email' placeholder='email' value={user.email} onChange={handleChange} />
            <input type='password' name='password' placeholder='password' value={user.password} onChange={handleChange} />

            <button type='submit'>Login</button>
        </form>
    )
}

export default Login