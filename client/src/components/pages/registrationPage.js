import React, { Component } from 'react';
import { useState } from 'react';
import { fetchData } from '../../main';
import { useNavigate } from 'react-router-dom';

const RegistrationPage = () => {
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
        console.log(e)
        e.preventDefault();
        fetchData('/user/register', {
            username,
            password
        }, "POST").then((data) => {
            if (!data.message) {
                localStorage.setItem('username', JSON.stringify(data._doc.username))
                navigate("/profile")
            }
        }).catch((error) => {
            console.log(`Error ${error.message}`)
        })
    }
    return (<form onSubmit={onSubmit}>
        <h3>Registration Component</h3>
        <div className="mx-auto w-25 p-3">
            <label htmlFor="username" className="form-label">Email ID</label>
            <input type="username" onChange={onChange} name="username" className="form-control" id="username" placeholder="username" />
        </div>
        <div className="mx-auto w-25 p-3">
            <label htmlFor="userPassword" className="form-label">Password</label>
            <input type="password" onChange={onChange} name="password" className="form-control" id="password" placeholder="password" />
        </div>
        <div className="mx-auto w-25 p-3">
            <button type="submit" className="btn btn-primary">Register</button>
        </div>
    </form>);
}

export default RegistrationPage;