import CreatePost from "../CreatePost";
import { useEffect, useState } from 'react';
import { fetchData } from '../../main'
function Profile() {
    const [posts, setPosts] = useState([]);
    const userName = new URLSearchParams(window.location.search).get('user');
    const currentuser = JSON.parse(localStorage.presentuser);
    console.log(currentuser);
    const onCreate = (newPost) => {
        fetchData(`/user/${userName}`, {}, 'GET')
            .then((user) => {
                console.log(user)
                fetchData('/post', { title: newPost.type, body: newPost.content, authorId: user._id }, 'POST')
                    .then((data) => {
                        setPosts((oldPosts) => [
                            ...oldPosts,
                            data
                        ])
                    })
                    .catch((error) => {
                        console.log(`Error ${error.message}`)
                    });
            })
            .catch((error) => {
                console.log(`Error ${error.message}`)
            });
    };

    useEffect(() => {

        retrievePosts();
    }, [])
    const retrievePosts = () => {
        fetchData(`/post?user=${userName}`, {}, 'GET')
            .then((data) => {
                setPosts(data);
            })
            .catch((error) => {
                console.log(`Error ${error.message}`)
            });
    };

    return (
        <div className="profile">
            <div className="mt-3">
                <h1>Hello !! Welcome {userName}</h1>
            </div>
            <h4>Create New Post</h4>
            <CreatePost onCreate={onCreate} />
            <h4>List of {userName} Posts</h4>
            <PostsComponent list={posts}></PostsComponent>
        </div>
    );
}

const PostsComponent = ({ posts }) => (
    <ul className='list-group'>
        {posts.map(item => (
            <li key={item.id} className='list-group-item'>
                <Post data={item}></Post>
            </li>
        ))}
    </ul>
);

const Post = ({ post }) => {
    return (
        <>
            <h4>{post.type}</h4>
            <h6>{post.content}</h6>
        </>
    );
}

export default Profile;
