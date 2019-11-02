import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import api from '../utils/api'
import Friend from './Friend';

const FriendsDiv = styled.div`
    display: flex;
    flex-flow: wrap row;
    margin: 5rem auto;
    width: 90%;
`

const Friends = () => {
    const [error, setError] = useState('')
    const [friends, setFriends] = useState([])

    useEffect(() => {
        api()
            .get('/friends')
            .then(res => {
                setFriends(res.data)
            })
            .catch(err => {
                setError(err.response)
            })
    }, [])

    return (
        <FriendsDiv>
            {error && <div>{error}</div>}

            {friends &&
                friends.map((friend, indx) => {
                    return <Friend
                            key={indx}
                            data={friend} />
                })
            }
        </FriendsDiv>        
    )
}

export default Friends