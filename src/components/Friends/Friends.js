import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';
import './Friends.css'

const Friends = () => {
    const [users, setUsers]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res=>res.json())
            .then(data=>setUsers(data))
    },[])
    return (
        <div>
            <h1>Friends Page</h1>
            <h3>Total users: {users.length}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eum blanditiis dignissimos necessitatibus delectus, quia cumque reprehenderit, non nihil illo dicta in laboriosam a neque nesciunt pariatur id officiis facilis.</p>
            <div className="user-container">
                {
                    users.map(user=><Friend key={user.id} user={user}></Friend>)
                }
            </div>
        </div>
    );
};

export default Friends;