import React from 'react';
import { useLoaderData, } from 'react-router-dom';
import Friend from '../friend/Friend';
import './Friends.css'

const Friends = () => {
    const friends = useLoaderData();
    // console.log(friends)
    return (
        <div>
            <h3>this is  friends tag:{friends.length}</h3>
            <div className='friend'>
                {
                    friends.map(friend => <Friend
                        key={friend.id}
                        friend={friend}
                    ></Friend>)
                }
            </div>
        </div>
    );
};

export default Friends;