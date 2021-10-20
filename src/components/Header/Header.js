import { faArrowCircleRight, faEnvelope, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {  } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const {user, logOut} = useAuth();

    return (
        <div>
            <div className="sub-header">
                <div className="container d-flex justify-content-between align-items-center">
                    <div className='d-flex'>
                        <div className='me-4'><FontAwesomeIcon icon={faEnvelope}/> <span className='ms-1'>info@example.com</span></div>
                        <div><FontAwesomeIcon icon={faPhone}/> <span className='ms-1'>+8 12 3456897</span></div>
                    </div>
                    <div className="d-flex align-items-center">
                        {user && <span className="userName"><FontAwesomeIcon style={{color: 'white'}} className='' icon={faUser}/> {user.displayName}</span>}
                        {!user.displayName ? 
                        <Link to='/login' className="btn auth-btn d-flex align-items-center">Login <FontAwesomeIcon className='ms-2' icon={faArrowCircleRight}/></Link> :
                        <button onClick={logOut} className="btn auth-btn d-flex align-items-center">Log Out <FontAwesomeIcon className='ms-2' icon={faArrowCircleRight}/></button>}
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light main-header">
                <div className="container">
                    {/* Logo */}
                    <div><Link className="navbar-brand" to="/home"><span className="logo">Medicality</span></Link></div>
                    {/* Toggle btn */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* Nav Links */}
                    <div>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item ms-4">
                                    <NavLink className="nav-link" activeStyle={{color: "black"}} to="/home">Home</NavLink>
                                </li>
                                <li className="nav-item ms-4">
                                    <NavLink className="nav-link" activeStyle={{color: "black"}} to="/about">About</NavLink>
                                </li>
                                <li className="nav-item ms-4">
                                    <NavLink className="nav-link" activeStyle={{color: "black"}} to="/doctors">Doctors</NavLink>
                                </li>
                                <li className="nav-item ms-4">
                                    <NavLink className="nav-link" activeStyle={{color: "black"}} to="/contact">Contact</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="divider"></div>
        </div>
    );
};

export default Header;