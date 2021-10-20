import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="container d-flex justify-content-between align-items-center">
                <div>
                    <p className="footerText m-0">Copyright &copy; 2020 Medicality All Rights Reserved.</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <p className="m-0 ps-3 pe-3">Privacy Policy</p>
                    <p className="m-0 brd ps-3 pe-3">Contact</p>
                    <p className="m-0 ps-3">Supplier</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;