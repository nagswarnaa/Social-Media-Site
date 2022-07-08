import CreatePost from "../CreatePost";
import { useEffect, useState } from 'react';
import { fetchData } from '../../main'
import PostList from "../postList";
import NavBar from "../navBar";



function Profile() {
    const currentuser = JSON.parse(localStorage.getItem('username'));

    const [posts, updatePosts] = useState([]);
    const deletePost = (id) => {
        fetchData('/post/delete', {
            postId: id
        }, "DELETE")
            .then(() => {
                fetchPosts();
            })
            .catch((err) => {
                console.error(err);
            });
    }
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
                let allPosts = Object.values(posts)
                let newData = allPosts.filter(item => item.createdby == currentuser)
                updatePosts(newData);
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
            <NavBar />
            <h1>Welcome {currentuser} </h1>
            <h3>List of Posts </h3>
            <PostList posts={posts ? posts : []} onDelete={deletePost} />
            <CreatePost currentuser={currentuser} onCreate={addPost} />

        </div >
    );
}






export default Profile;
