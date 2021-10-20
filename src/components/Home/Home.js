import React from 'react';
import Appointment from '../Appointment/Appointment';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import Services from '../Services/Services';
import './Home.css'

const Home = () => {
    

    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Blog></Blog>
            <Appointment></Appointment>
        </div>
    );
};

export default Home;