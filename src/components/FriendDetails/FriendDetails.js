import React from 'react';
import { useParams } from 'react-router-dom';

const FriendDetails = () => {
    const params = useParams()
    return (
        <div>
            <h1>User Details.</h1>
            <h4>Id: {params.id}</h4>
        </div>
    );
};

export default FriendDetails;