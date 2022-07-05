import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';
const NavBar = () => {
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

                    <li className="nav-item">
                        <Link className="nav-link" to="/login">LoginPage</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/register">RegisterPage</Link>
                    </li>

                </ul>
            </div>
            <Outlet></Outlet>
        </div>
    </nav>);
}

export default NavBar;