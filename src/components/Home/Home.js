import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import './Home.css'

const Home = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <Banner></Banner>
            {
                <Services services={services}></Services>
            }
        </div>
    );
};

export default Home;