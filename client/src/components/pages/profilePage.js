import CreatePost from "../CreatePost";
import { useEffect, useState } from 'react';
import { fetchData } from '../../main'
function Profile() {
    const currentuser = JSON.parse(localStorage.getItem('username'));

    const [posts, updatePosts] = useState([]);
    const addPost = (post) => {
        console.log(post)
        fetchData('/post/create', {
            posttitle: post.posttitle,
            postcontent: post.postcontent,
            createdby: post.createdby
        }, "POST")
            .then((newpost) => {
                // console.log(newpost)
                updatePosts((prevData) => [...prevData, newpost]);
                console.log(posts)
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
            <PostList posts={posts}></PostList>
            <CreatePost currentuser={currentuser} onCreate={addPost} />
            {/* <button type="submit" onClick={() => addPost({
                posttitle: "text",
                postcontent: "edfvghjk",
                createdby: "nagaraju"
            })} className="btn btn-primary ">Submit</button> */}
        </div >
    );
}

const PostList = ({ posts }) => (
    <ul className='list-group'>
        {posts.map(post => (
            <li key={post._id} className='list-group-item'>
                <PostComponent post={post}></PostComponent>
            </li>
        ))}
    </ul>
);

const PostComponent = ({ post }) => {
    return (
        <div className="post">
            <h6>{post.posttitle}</h6>
            <p>{post.postcontent}</p>
            <h6>{post.createdby}</h6>
        </div>
    );
}


export default Profile;
