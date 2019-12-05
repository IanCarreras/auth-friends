import React, { useState } from 'react'
import styled from 'styled-components'
import api from '../utils/api'

const AddForm = styled.form`
    display: flex;
    flex-direction: column;
    margin: 2rem auto;
    width: 26%;
`
const Input = styled.input`
    height: 2rem;
    margin-top: .5rem;
`
const Button = styled.button`
    margin-top: .5rem;
`
const AddFriend = ({setFriends}) => {
    const [friend, setFriend] = useState({
        name: '',
        age: '',
        email: ''
    })

    const handleChange = e => {
        setFriend({
            ...friend,
            [e.target.name]: e.target.value

        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        api()
            .post('friends', friend)
            .then(res => {
                setFriends(res.data)
            })
            .catch(err => {
                return err.response
            })
    }

    return (
        <AddForm>
            <Input type='text' name='name' placeholder='Name' value={friend.name} onChange={handleChange} />
            <Input type='text' name='age' placeholder='Age' value={friend.age} onChange={handleChange} />
            <Input type='text' name='email' placeholder='Email' value={friend.email} onChange={handleChange} />

            <Button type='submit' onClick={handleSubmit}>Add Friend</Button>
        </AddForm>
    )
}

export default AddFriend