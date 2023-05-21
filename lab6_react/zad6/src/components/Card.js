import React from "react";

const Card = (props) => {
    return (
        <div className="Card">
            <h2>{props.name}</h2>
            <img src={props.link} alt={props.name} />
            <p>{props.years}</p>
            <p>{props.specialization}</p>
            <p>{props.country}</p>
        </div>
    );
};

export default Card;
