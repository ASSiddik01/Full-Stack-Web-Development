import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const FriendDetails = () => {
    const { friendId } = useParams();
    const [friend, setFriend] = useState({})
    const { name, phone, website, company } = friend;
    const history = useHistory()
    const clickHandler = () => {
        history.push('/friends')
    }
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data))
    }, [])
    return (
        <div>
            <h2>Friend details of: {friendId}</h2>
            <h4>{name}</h4>
            <p>{phone} </p>
            <p>{website} </p>
            <p>{company?.name} </p>
            <button onClick={clickHandler}>See All Friends</button>
        </div>
    );
};

export default FriendDetails;