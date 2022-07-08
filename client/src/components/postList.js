import React, { Component, useEffect } from 'react';
import PostComponent from "../components/postComponent";

const PostList = ({ posts, onDelete }) => {
    const hStyle = { color: 'red' };
    const leng = posts.length
    useEffect(() => {
        console.log()

    }, [posts])
    return (<ul className='list-group'>
        {(leng !== 0) && posts.map(post => (
            <li key={post._id} className='list-group-item'>
                <PostComponent post={post} onDelete={onDelete} />
            </li>
        ))}
        {
            (leng === 0) && <h2 style={hStyle}>No Posts Available </h2>
        }
    </ul >);
}

export default PostList;