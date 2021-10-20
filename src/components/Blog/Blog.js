import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import blog1 from '../../images/blog1.jpg';
import blog2 from '../../images/blog2.jpg';
import blog3 from '../../images/blog3.jpg';
import './Blog.css'

const Blog = () => {
    return (
        <div className="blog">
            <div className="container">
                <h2 className='title'>Stay Updated To Our <span>Blog & News</span></h2>
                <div className="row">
                    <div className="col-lg-4 col-12" style={{width: "24rem", margin: "auto"}}>
                        <div className="blog-img">
                            <img src={blog1} alt="" />
                        </div>
                        <div className="blog-text">
                            <h2>User Experience Psychology And Performance Smashing</h2>
                            <p>How can we design in a way to help visitors rather than frustrate them? How do we know that a great user experience is really working well? We think about  from two very different angles.</p>
                            <Link to='/home'><span className="me-1">Read More </span> <FontAwesomeIcon icon={faArrowRight}/></Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12" style={{width: "24rem", margin: "auto"}}>
                        <div className="blog-img">
                            <img src={blog2} alt="" />
                        </div>
                        <div className="blog-text">
                            <h2>User Experience Psychology And Performance Smashing</h2>
                            <p>How can we design in a way to help visitors rather than frustrate them? How do we know that a great user experience is really working well? We think about  from two very different angles.</p>
                            <Link to='/home'><span className="me-1">Read More </span> <FontAwesomeIcon icon={faArrowRight}/></Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12" style={{width: "24rem", margin: "auto"}}>
                        <div className="blog-img">
                            <img src={blog3} alt="" />
                        </div>
                        <div className="blog-text">
                            <h2>User Experience Psychology And Performance Smashing</h2>
                            <p>How can we design in a way to help visitors rather than frustrate them? How do we know that a great user experience is really working well? We think about  from two very different angles.</p>
                            <Link to='/home'><span className="me-1">Read More </span> <FontAwesomeIcon icon={faArrowRight}/></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;