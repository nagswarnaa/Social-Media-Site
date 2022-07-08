import React, { Component } from 'react';

const PostComponent = ({ post, onDelete }) => {
    return (
        <div className="post">
            <h6>{"Post Type :" + post.posttype}</h6>
            <p>{"Content  :" + post.postcontent}</p>
            <button type="button" className="btn btn-danger" onClick={() => onDelete(post._id)}>Delete</button>
        </div>
    );
}

export default PostComponent;