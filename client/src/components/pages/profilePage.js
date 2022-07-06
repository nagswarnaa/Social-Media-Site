import CreatePost from "../CreatePost";
import { useEffect, useState } from 'react';
import { fetchData } from '../../main'
function Profile() {
    const currentuser = JSON.parse(localStorage.getItem('username'));
    console.log(currentuser);



    return (
        <div className="profile">

            <h1>Welcome {currentuser} </h1>
            <CreatePost />
        </div>
    );
}



export default Profile;
