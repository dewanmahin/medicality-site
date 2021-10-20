import React from 'react';
import appointmentImg from '../../images/appointment.png';
import './Appointment.css'

const Appointment = () => {
    return (
        <div className="appointment">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <img src={appointmentImg} alt="" />
                    </div>
                    <div className="col-lg-6 col-12 d-flex flex-column justify-content-center">
                        <div className="appointment-info mt-5">
                            <h2 className="title">Make An Appointment For <span>Emergency</span></h2>
                            <button className="auth-button">Appointment</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointment;