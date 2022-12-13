import '../App.scss'


function Work() {
    return (

        <div id='Arbeiten' className='wrapperWork'>
            <div>
                <h1 className='mainExp'>#Neueste Arbeiten</h1>
                <h2 className='subWork'>Flexibilität sowie das Sammeln von Erfahrung und Wissen sind Aspekte, die in
                    der digitalen Branche unabdingbar sind, um dem ständigen Wandel stand
                    halten zu können, deshalb freue ich mich darauf meine Stärken in Ihr Team einfließen zu
                    lassen. </h2>
            </div>

            <div className="work1 card">
                <div className="wrapper1">
                    <div className="header">
                        <div className="date">
                            <h3>Weather APP</h3>
                        </div>
                    </div>
                    <div className="data">
                        <div className="content">
                            <span className="author">TimothieMT</span>
                            <h2 className="title"><a href="https://thunderous-begonia-62b263.netlify.app/"
                                                     target='_blank'>Web und Softwareentwicklung</a></h2>
                            <article className="text"> Erstellen und Erarbeiten von Softwareanwendungen mit Java,
                                Python, Javascript/TypeScript, HTML und CSS. Implementierungen von Datenbanken zum Beispiel mit MongoDB und SQL.
                            </article>
                        </div>
                    </div>
                </div>
            </div>

            <div className="work2 card">
                <div className="wrapper2">
                    <div className="header">
                        <div className="date">
                            <h3>Blockchain</h3>
                        </div>
                    </div>
                    <div className="data">
                        <div className="content">
                            <span className="author">TimothieMT</span>
                            <h2 className="title"><a href="https://blockchain-crypto-7mgky75i6-timothiemt.vercel.app/"
                                                     target='_blank'>Blockchain Data</a></h2>
                            <article className="text"> Bearbeitung von großen Datenmengen, um diese strukturiert wiederzugeben. Für interne Präsentationen oder für den Endkunden. </article>
                        </div>
                    </div>
                </div>
            </div>

            <div className="work3 card">
                <div className="wrapper3">
                    <div className="header">
                        <div className="date">
                            <h3>Sicherheit & SEO</h3>
                        </div>
                    </div>
                    <div className="data">
                        <div className="content">
                            <span className="author">TimothieMT</span>
                            <h2 className="title"><a href="https://github.com/TimothieMT" target='_blank'>Internet
                                Sicherheit und Suchmaschinenoptimierung</a></h2>
                            <article className="text"> Die Sichtbarkeit Ihrer Unternehmenswebsite und ihrer Inhalte für Benutzer einer Websuchmaschine zu erhöhen </article>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Work