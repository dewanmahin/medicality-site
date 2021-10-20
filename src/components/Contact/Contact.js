import React from 'react';
import contact from '../../images/touch.png'
import './Contact.css'

const Contact = () => {
    return (
        <div className='contact'>
            <h2 className='title'><span>Contact</span> Us</h2>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                        <img src={contact} alt="" />
                    </div>
                    <div className="col-lg-6 col-12 formArea">
                        <h2 className="contactForm-title">Get In Touch With Us</h2>
                        <form className="contactForm">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingText" placeholder="name@example.com" />
                                <label htmlFor="floatingText">Your Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label htmlFor="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingSubject" placeholder="Password" />
                                <label htmlFor="floatingSubject">I would like to discuss</label>
                            </div>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" placeholder='Write Comment'></textarea>
                            <button className="auth-button mt-4">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;