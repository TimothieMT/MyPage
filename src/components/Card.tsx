import React from 'react';
import '../styles/card.scss';

interface ICards {
    className?: string;
}

const Card = (props: ICards) => {

    return (
        <div className={`card-container ${props.className}`}>

        </div>
    );
}

export default Card;
