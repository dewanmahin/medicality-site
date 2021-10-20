import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../../images/banner-illustration.png';
import signature from '../../images/signature.png'
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                        <div className='bannner-text'>
                            <h1>Get Better Care For Your <span>Health.</span></h1>
                            <p>Our Clinic has grown to provide a world class facility for the treatment of tooth loss, dental cosmetics and bore advanced restorative dentistry. We are among the most qualified implant providers in the AUS with over 30 years of uality training and experience.</p>
                            <div className="d-flex align-items-center">
                                <img className="sig-img" src={signature} alt="" />
                                <Link className='btn auth-button' to='/about'>About Us</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="banner-img">
                            <img src={bannerImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;