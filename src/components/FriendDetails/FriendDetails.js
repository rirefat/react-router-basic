import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetails = () => {
    const {id} = useParams()
    const url =`https://jsonplaceholder.typicode.com/users/${id}`;
    const [user, setUser]=useState({});
    useEffect(()=>{
        fetch(url)
            .then(res=>res.json())
            .then(data=>setUser(data))
    },[])
    return (
        <div>
            <h1>User Details.</h1>
            <h4>Id: {id}</h4>
            <div className="user-details">
                <h2>{user.name}</h2>
                <p><strong>Username: </strong>{user?.username}</p>
                <p><strong>Email: </strong>{user?.email}</p>
                <p><strong>Address: </strong>{user.address?.city}</p>
                <p><strong>Phone: </strong>{user.phone}</p>
                <p><strong>Website: </strong>{user.website}</p>
                <p><strong>Company Name: </strong>{user.company?.name}</p>
            </div>
        </div>
    );
};

export default FriendDetails;