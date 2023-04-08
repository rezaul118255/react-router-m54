import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SinglePost from '../singlePost/SinglePost';

const Post = () => {
    const posts = useLoaderData();
    // console.log(posts)
    return (
        <div>
            <h2>All post hear:{posts.length} </h2>
            {
                posts.map(post => <SinglePost
                    key={post.id}
                    post={post}
                ></SinglePost>)
            }

        </div>
    );
};

export default Post;