import React from 'react';
import '../styles/card.scss';

const Card = (props) => {
    return (
        <div className="card-container">
            <h3 className="card-title">{props.title}</h3>
            <p className="card-text">{props.text}</p>
        </div>
    );
}

export default Card;
