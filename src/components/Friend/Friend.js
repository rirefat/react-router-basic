import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Friend.css'

const Friend = (props) => {
    const {name, username, id, email}=props.user;

    const navigate = useNavigate();
    const showDetails = () =>{
        const path = `/friends/${id}`;
        navigate(path);
        
    }
    return (
        <div className='friend-card'>
            <h2>{name}</h2>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
            <button onClick={showDetails}>See More: ID - {id}</button>
        </div>
    );
};

export default Friend;