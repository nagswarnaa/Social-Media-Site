import React, { Component } from 'react';
import { useState } from 'react';
import { fetchData } from '../../main';
import { useNavigate } from 'react-router-dom';

const RegistrationPage = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        userName: '',
        Password: ''
    })
    const { userName, Password } = user

    const onChange = (e) => setUser({
        ...user, [e.target.name]: e.target.value
    })
    const onSubmit = (e) => {
        e.preventDefault();
        fetchData('/user/register', {
            userName,
            Password
        }, "POST").then((data) => {
            if (!data.message) {
                navigate("/profile")
            }
        }).catch((error) => {
            console.log(`Error ${error.message}`)
        })
    }
    return (<form onSubmit={onSubmit}>
        <h3>Registration Component</h3>
        <div className="mx-auto w-25 p-3">
            <label htmlFor="userEmail" className="form-label">Email ID</label>
            <input type="email" onChange={onChange} name="userName" className="form-control" id="userEmail" placeholder="Email" />
        </div>
        <div className="mx-auto w-25 p-3">
            <label htmlFor="userPassword" className="form-label">Password</label>
            <input type="password" onChange={onChange} name="Password" className="form-control" id="userPassword" placeholder="Password" />
        </div>
        <div className="mx-auto w-25 p-3">
            <label htmlFor="userAddress" className="form-label">Address</label>
            <input type="text" onChange={onChange} className="form-control" id="userAddress" placeholder="Street Address" />
        </div>
        <div className="mx-auto w-25 p-3">
            <label htmlFor="Address" className="form-label">Address 2</label>
            <input type="text" onChange={onChange} className="form-control" id="Address" placeholder="Suite,Apartment" />
        </div>
        <div className="mx-auto w-25 p-3">
            <label htmlFor="userCity" className="form-label">City</label>
            <input type="text" onChange={onChange} className="form-control" id="userCity" placeholder="City" />
        </div>

        <div className="mx-auto w-25 p-3">
            <label htmlFor="Zipcode" className="form-label">Zip Code</label>
            <input type="text" onChange={onChange} className="form-control" id="Zipcode" placeholder="Zip Code" />
        </div>

        <div className="mx-auto w-25 p-3">
            <button type="submit" className="btn btn-primary">Register</button>
        </div>
    </form>);
}

export default RegistrationPage;