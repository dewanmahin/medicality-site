import { faEnvelopeOpen, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import googleLogo from '../../images/google.png'
import './Login.css'

const Login = () => {
    const { handleEmailChnage, handlePassChnage, handleLogin, error } = useAuth();

    return (
        <div className="form-box">
            <div className="container">
                <h1 className="text-danger text-center my-4">{error}</h1>
                <div className="form py-4">
                    <h2 className='mb-5'>Login</h2>
                    <form onSubmit={handleLogin}>
                        <div className="form-floating mb-3">
                            <input onBlur={handleEmailChnage} type="email" className="form-control rounded-3" id="floatingInput" placeholder="name@example.com" />
                            <label htmlFor="floatingInput"><FontAwesomeIcon style={{color: '#1A2BA8'}} className='me-1' icon={faEnvelopeOpen}/> Your Email</label>
                        </div>
                        <div className="form-floating">
                            <input onBlur={handlePassChnage} type="password" className="form-control rounded-3" id="floatingPassword" placeholder="Password" />
                            <label htmlFor="floatingPassword"><FontAwesomeIcon style={{color: '#1A2BA8'}} className='me-1' icon={faLock}/> Your Password</label>
                        </div>
                        <input type="submit" className="btn mt-4 auth-button" value="Login" />
                        <div className='or'>----------------- OR -----------------</div>
                        <div className='googleBtn d-flex align-items-center justify-content-between'><span className="gBtn"><img src={googleLogo} alt="" /></span> <span>Login with Google</span></div>
                    </form>
                    <p className='toggleText mt-4'>Don't have an account? <Link to="/register">Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;