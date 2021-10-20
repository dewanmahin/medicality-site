import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import dctImg from '../../images/dct.png'
import ptnImg from '../../images/ptn.png'
import bedImg from '../../images/bed.png'
import awrdsImg from '../../images/awrds.png'
import aboutImg from '../../images/about.png'
import './About.css'

const About = () => {
    return (
        <div className="about">
            <div className="about-dtl">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7 col-12">
                            <img src={aboutImg} alt="" />
                        </div>
                        <div className="col-lg-5 col-12">
                            <div className="about-text">
                                <h2 className="title">We're setting Standards in Research what's more, Clinical Care.</h2>
                                <p>We provide the most full medical services, so every person could have the pportunity o receive qualitative medical help. Our Clinic has grown to provide a world class facility for the treatment of tooth loss, dental cosmetics and bore advanced restorative dentistry. We are among the most qualified implant providers in the AUS with over 30 years of uality training and experience.</p>
                                <button className="auth-button mt-3">Read More <FontAwesomeIcon icon={faArrowRight}/></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-counter my-2">
                <div className="container">
                    <div className="row">
                        <div className="counter col-lg-3 col-12">
                            <img src={dctImg} alt="Doctors" />
                            <h2>500+</h2>
                            <p>Doctors At Work</p>
                        </div>
                        <div className="counter col-lg-3 col-12">
                            <img src={ptnImg} alt="Patients" />
                            <h2>58796+</h2>
                            <p>Happy Patients</p>
                        </div>
                        <div className="counter col-lg-3 col-12">
                            <img src={bedImg} alt="Beds" />
                            <h2>500+</h2>
                            <p>Medical Beds</p>
                        </div>
                        <div className="counter col-lg-3 col-12">
                            <img src={awrdsImg} alt="Awards" />
                            <h2>200+</h2>
                            <p>Winning Awards</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;