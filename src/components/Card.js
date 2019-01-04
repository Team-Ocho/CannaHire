import React from 'react';
import "../styles/Card.css";

function Card() {
    return (
        <div className="job-card">
            <h4 classname="job-title">Job Title</h4>
            <div>
            <p className="summary">This is a summary of the job.</p>
            <p>Status: Waiting </p>
            <button className="read-more">View</button>
            </div>
        </div>
    );
}

export default Card