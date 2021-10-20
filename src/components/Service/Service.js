import React from 'react';
import { NavLink } from 'react-router-dom';
import './Service.css'

// const [singleDtl, setSingleDtl] = useState([]);

// useEffect(() => {
//     fetch('./')
// }, [])

const Service = (props) => {
    const {id, picture, name, desc} = props.service;

    return (
        <div className="service">
            <div className="card" style={{width: "22rem", margin: "auto"}}>
                <img src={picture} className="card-img-top" alt="servicesImage"/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{desc.slice(0, 220)}</p>
                    <NavLink to={`/servicedtl/${id}`} className="btn dtl-btn">Show Details</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Service;