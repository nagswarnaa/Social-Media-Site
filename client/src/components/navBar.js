import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigate = useNavigate()
    const logOut = () => {
        localStorage.clear();
        navigate("/login")
    }
    const currentuser = JSON.parse(localStorage.getItem('username'));
    let loggedIn = !currentuser;

    return (<nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">UserInterface Project</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    {loggedIn &&
                        <li className="nav-item">
                            <Link className="nav-link" to="/login" >LoginPage</Link>
                        </li>}
                    {loggedIn &&
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">RegisterPage</Link>
                        </li>}
                    {!loggedIn &&
                        <li className="nav-item">
                            <Link className="nav-link" to="/profile" >ProfilePage</Link>
                        </li>}
                    {!loggedIn &&
                        <li className="nav-item">
                            <button type="button" className="btn btn-light nav-link" onClick={logOut}>Logout</button>
                        </li>}
                </ul>
            </div>
            <Outlet></Outlet>
        </div>
    </nav>);
}

export default NavBar;