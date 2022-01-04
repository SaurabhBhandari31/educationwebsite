import React from 'react';
import { NavLink } from 'react-router-dom';

const Navabar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">Edu<span className="logostyle">cation</span></NavLink>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a><NavLink className="nav-link active" to="/" activeClassName="active_class">Home</NavLink></a>
                            </li>
                            <li className="nav-item">
                            <a><NavLink className="nav-link" to="/about" activeClassName="active_class">About us</NavLink></a>
                            </li>
                            <li className="nav-item">
                            <a><NavLink className="nav-link" to="/service" activeClassName="active_class">Services</NavLink></a>
                            </li>
                            <li className="nav-item">
                            <a><NavLink className="nav-link" to="/contact" activeClassName="active_class">Contact us</NavLink></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navabar;