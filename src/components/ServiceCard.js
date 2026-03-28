import React from 'react'
import "../styles/ServiceCard.css";
import { Link } from 'react-router-dom';

export default function ServiceCard({ image, icon, title, description, url }) {
    return (
        <div>
            <Link to={url}>
            <div className="service-card-single">
                <div className="service-card-wraper">
                    <div className="service-card-thumbnail">
                        <img src={image} alt={title} loading="lazy"/>
                    </div>
                    <div className="service-card-content">
                        <img src={icon} alt={`${title}-icon`} loading="lazy"/>
                        <h5 className="title">{title}</h5>
                        <p className="disc">{description}</p>
                    </div>
                </div>
                
            </div>
            </Link>
        </div>
    )
}


