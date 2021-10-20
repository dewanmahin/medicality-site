import React from 'react';
import dct1 from '../../images/dct-1.png'
import dct2 from '../../images/dct-2.png'
import dct3 from '../../images/dct-3.png'
import dct4 from '../../images/dct-4.png'
import dct5 from '../../images/dct-5.png'
import dct6 from '../../images/dct-6.png'
import './Doctors.css'

const Doctors = () => {
    return (
        <div className='doctors'>
            <h2 className="title">Our Dedicated <span>Doctors</span></h2>
            <div className="container">
                <div className="row mb-4">
                    <div className="col-lg-4 col-12">
                        <div className="card">
                            <img src={dct1} className="card-img-top" alt="Photos" />
                            <div className="card-body">
                                <h5 className="card-title">Emily Haden</h5>
                                <p className="card-text">Dental Surgeon</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12">
                        <div className="card">
                            <img src={dct2} className="card-img-top" alt="Photos" />
                            <div className="card-body">
                                <h5 className="card-title">Audrey Button</h5>
                                <p className="card-text">Neurologists</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12">
                        <div className="card">
                            <img src={dct3} className="card-img-top" alt="Photos" />
                            <div className="card-body">
                                <h5 className="card-title">Hellen Hill</h5>
                                <p className="card-text">Gynecologists</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-12">
                        <div className="card">
                            <img src={dct4} className="card-img-top" alt="Photos" />
                            <div className="card-body">
                                <h5 className="card-title">Hellen Hill</h5>
                                <p className="card-text">Ophthalmologist</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12">
                        <div className="card">
                            <img src={dct5} className="card-img-top" alt="Photos" />
                            <div className="card-body">
                                <h5 className="card-title">Audrey Button</h5>
                                <p className="card-text">Cardiologist</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12">
                        <div className="card">
                            <img src={dct6} className="card-img-top" alt="Photos" />
                            <div className="card-body">
                                <h5 className="card-title">Emily Haden</h5>
                                <p className="card-text">Dermatology</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctors;