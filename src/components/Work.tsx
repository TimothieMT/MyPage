import '../App.scss'
import * as React from "react";
import Card from "../components/card.tsx";


function Work() {

    const cards = [
        {title: 'Card 1', text: 'Text for card 1'},
        {title: 'Card 2', text: 'Text for card 2'},
        {title: 'Card 3', text: 'Text for card 3'},
    ];

    return (

        <div id='Arbeiten' className='myWork'>

            <p>Meine Projekte</p>

            <div className="grid-container">
                {cards.map((card, index) => (
                    <Card key={index} title={card.title} text={card.text}/>
                ))}
            </div>

        </div>

    )
}

export default Work