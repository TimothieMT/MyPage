import '../App.scss'
import '../styles/navbar.scss'
import * as React from "react";

function Home() {

    return (

        <div className={'Startseite'}>


            <div className='wrapperHead'>
                <img className={'bgImage'} src={'../public/images/bg.jpg'}/>
                <div className={'wrapperHeadContent'}>
                    <h1 className='headTitle'>Web-Entwicklung in Berlin</h1>
                    <h2 className='title'>Ich bin ein Entwickler aus Berlin. Ich biete
                        qualitativ hochwertige Dienstleistungen in der Webentwicklung und haben mich auf die
                        Bereiche
                        Custom Web Development, Backend und Python spezialisiert. Ich freue mich darauf, Ihnen zu
                        helfen und Ihre Ideen zum Leben zu erwecken.</h2>
                    <a href='https://www.linkedin.com/in/tim-tolk-2091a7258/' target='_blank'>
                        <button className='headerBtn'><a href={'mailto:ttolk89@gmail.com?subject'} target={'_blank'}>Kontakt</a></button>
                    </a>
                </div>
            </div>


        </div>
    )
}

export default Home