import CreatePost from "../CreatePost";
import { useEffect, useState } from 'react';
import { fetchData } from '../../main'
function Profile() {
    const currentuser = JSON.parse(localStorage.getItem('username'));

    const [posts, updatePosts] = useState([]);
    const addPost = (post) => {
        console.log(post)
        fetchData('/post/create', {
            posttype: post.posttype,
            postcontent: post.postcontent,
            createdby: post.createdby
        }, "POST")
            .then((newpost) => {
                updatePosts((prevData) => [...prevData, newpost]);

            })
            .catch((err) => {
                console.error(err);
            });
    };

    const fetchPosts = () => {
        fetchData(`/post/getpost`, {}, 'GET')
            .then((posts) => {
                console.log(posts)
                updatePosts(posts)
            })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (

        < div className="profile" >
            <h1>Welcome {currentuser} </h1>
            <PostList posts={Array.from(posts)} />
            <CreatePost currentuser={currentuser} onCreate={addPost} />

        </div >
    );
}

const PostList = ({ posts }) => (
    <ul className='list-group'>
        {posts.map(post => (
            <li key={post._id} className='list-group-item'>
                <PostComponent post={post} />
            </li>
        ))}
    </ul>
);

const PostComponent = ({ post }) => {
    return (
        <div className="post">
            <h6>{post.posttype}</h6>
            <p>{post.postcontent}</p>
            <h6>{post.createdby}</h6>
        </div>
    );
}


export default Profile;
