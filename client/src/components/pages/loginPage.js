import React, { Component } from 'react';
import { useState } from 'react';
import { fetchData } from '../../main';
import { useNavigate } from 'react-router-dom';
import NavBar from '../navBar';

const LoginForm = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        username: '',
        password: ''
    })
    const { username, password } = user

    const onChange = (e) => setUser({
        ...user, [e.target.name]: e.target.value
    })
    const onSubmit = (e) => {
        e.preventDefault();
        fetchData('/user/login', {
            username,
            password
        }, "POST").then((data) => {
            if (!data.message) {
                console.log(data)
                localStorage.setItem('username', JSON.stringify(data._doc.username))
                navigate("/profile")
            }
        }).catch((error) => {
            console.log(`Error ${error.message}`)
        })
    }
    return (<form onSubmit={onSubmit}>
        <NavBar />
        <h3>Login Component</h3>
        <div className="mx-auto w-25 p-3">
            <label htmlFor="username" className="form-label">User Name</label>
            <input type="username" onChange={onChange} name="username" className="form-control" id="username" aria-describedby="emailHelp" />
        </div>
        <div className="mx-auto w-25 p-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" onChange={onChange} name="password" className="form-control" id="password" />
        </div>
        <button type="submit" className="btn btn-primary ">Submit</button>
    </form>);
}
export default LoginForm;