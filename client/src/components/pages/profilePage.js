import CreatePost from "../CreatePost";
import { useEffect, useState } from 'react';
import { fetchData } from '../../main'
function Profile() {
    const currentuser = JSON.parse(localStorage.getItem('username'));
    console.log(currentuser);

    const fetchArticles = () => {
        fetchData(`/post/getpost`, { currentuser }, 'GET')
            .then((articles) => {
                console.log(articles)
            })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        fetchArticles();
    }, []);

    return (
        <div className="profile">

            <h1>Welcome {currentuser} </h1>
            <CreatePost />
        </div>
    );
}



export default Profile;
