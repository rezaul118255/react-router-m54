import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    // console.log(post)
    const navigate = useNavigate();
    const { id, title, useId, body } = post
    const handleGoBack = () => {
        navigate(-1);

    }
    return (
        <div>
            <h3>Details about your post:{id}</h3>
            <h3>{title}</h3>
            <h3>{useId}</h3>
            <p>{body}</p>
            <button onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default PostDetails;