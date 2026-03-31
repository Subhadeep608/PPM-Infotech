import React from 'react'
import "../styles/ProjectCard.css";
import { Link } from 'react-router-dom';


export default function ProjectCard({image, title, description, url}) {
    return (
        <div className="ProjectCard-holder">
            <img src={image} alt={title} className='ProjectCard-thumbnail' loading="lazy"/>
            <Link className="ProjectCard-thumbnail-icon" to={url}>
                <i className="far fa-eye"></i>
            </Link>
            <div className="ProjectCard-content">
                <div className="ProjectCard-content-wrap">
                    <Link to={url}>
                        <h5 className="title">{title}</h5>
                    </Link>
                    <span>{description}</span>
                </div>
            </div>
        </div>
    )
}
