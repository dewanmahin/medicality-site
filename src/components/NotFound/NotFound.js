import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div>
            <h1 className="error">404 error</h1>
            <Link to='/home' className="auth-button text-center">Go to home</Link>
        </div>
    );
};

export default NotFound;