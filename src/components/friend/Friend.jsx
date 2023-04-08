import React from 'react';
import './Friend.css';
import { Link } from 'react-router-dom';


const Friend = ({ friend }) => {
    // console.log(friend)
    const { email, id, name, phone } = friend
    return (
        <div className='friend'>
            <h3>this is a friend tag</h3>
            <h3>email:{email}</h3>
            <h3>name:{name}</h3>
            <h3>phone:{phone}</h3>
            <p><Link to={`/friend/${id}`}>Show me details</Link></p>

        </div>
    );
};

export default Friend;