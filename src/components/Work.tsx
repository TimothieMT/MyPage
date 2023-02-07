import '../App.scss'
import * as React from "react";
import Card from "./Card";



function Work() {

    const cards = [
        {
            title: 'SweetStack',
            text: 'Command Line Interface (CLI) ist eine textbasierte Schnittstelle zur Interaktion mit einem Computer-System. Es ermöglicht es Benutzern, Aufgaben durch Eingabe von Befehlen auszuführen, die vom System verarbeitet werden, was im Vergleich zur GUI zu einer schnelleren und präziseren Kontrolle führt. CLI wird weit verbreitet von Entwicklern und Systemadministratoren verwendet und gilt als grundlegendes Werkzeug in der Informatik.',
            url: 'https://github.com/TimothieMT/sweetStack'
        },
        {
            title: 'Blockchain',
            text: 'Blockchain-Daten sind eine unveränderbare und sichere Aufzeichnung von Transaktionen. Es arbeitet über ein dezentrales Netzwerk von Knoten, was es unveränderbar und effizient macht. Diese Technologie hat die Art und Weise, wie Unternehmen ihre Daten speichern und verwalten, revolutioniert und führt zu größerer Transparenz und Vertrauen. Blockchain hat das Potenzial, zahlreiche Branchen zu disruptieren, von Finanzen bis hin zur Lieferkettendienstleistung.',
            url: 'https://blockchain-crypto-7mgky75i6-timothiemt.vercel.app/'
        },
        {
            title: 'SEO',
            text: 'Suchmaschinenoptimierung (SEO) ist der Prozess, mit dem die Sichtbarkeit und das Ranking einer Website in Suchmaschinen wie Google verbessert werden kann. Durch Optimierung des Website-Inhalts und -Aufbaus können Unternehmen die Menge an organischem Traffic, den sie von Suchmaschinen erhalten, erhöhen, was zu einer erhöhten Sichtbarkeit, Leads und Verkäufen führt. Angemessene SEO-Praktiken umfassen Keyword-Recherche, On-Page-Optimierung und Linkaufbau.',
            url: 'https://de.wikipedia.org/wiki/Suchmaschinenoptimierung'
        },
    ];

    return (

        <div id='Arbeiten' className='myWork'>

            <p>Meine Projekte</p>

            <div className="grid-container">
                {cards.map((card, index) => (
                    <div className={`cardWrapper${index}`}>
                        <Card className={`card${index}`} key={index}/>
                        <p className={`cardTitle`}>{card.title}</p>
                        <p className={`cardText`}>{card.text}</p>
                        <button className={`cardButton`}><a href={card.url} target={'_blank'}>Mehr Erfahren</a></button>
                    </div>

                ))}
            </div>

        </div>

    )
}

export default Work