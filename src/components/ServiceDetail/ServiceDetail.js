import React , { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import './ServiceDetail.css'

const ServiceDetail = () => {
    let {id} = useParams();

    const [serviceDetails, setServiceDetails] = useState([]);

    const [singleDtl, setSingleDtl] = useState({})

    useEffect(() => {
        fetch("/service-details.json")
            .then(res => res.json())
            .then(data => setServiceDetails(data.serviceDetails))
    }, [])

    useEffect(() => {
        const foundDtl = serviceDetails.find(serviceDetail => serviceDetail.id === id)
        setSingleDtl(foundDtl)
    }, [serviceDetails])


    return (
        <div>
            <div className="container">
                <div className="card srvDtl w-50 mx-auto">
                    <img src={singleDtl?.picture} className="card-img-top" alt="ServiceImage" />
                    <div className="card-body">
                        <h5 className="card-title fs-2">{singleDtl?.name}</h5>
                        <p className="card-text">{singleDtl?.desc}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;