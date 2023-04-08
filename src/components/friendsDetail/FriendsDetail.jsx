import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendsDetail = () => {
    const friend = useLoaderData();
    console.log(friend)
    return (
        <div>
            <h3>this is a friends details tag</h3>
            <h4>name:{friend.name}</h4>
        </div>
    );
};

export default FriendsDetail;