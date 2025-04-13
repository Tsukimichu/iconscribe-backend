import React from "react";

function Offered({ label, imgSrc, description }) {
    return (
        <div className="offered-card">
            <h2>{label}</h2> 
            <img src={imgSrc} alt={label} className="service-img" /> 
            <p>{description}</p> 
        </div>
    );
}

export default Offered;
