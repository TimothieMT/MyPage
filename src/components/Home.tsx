import {Grid, Paper, styled} from "@mui/material";
import Box from "@mui/material/Box";
import '../App.scss'
import '../styles/navbar.scss'
import * as React from "react";


const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#00E4B2' : '#111625',
    ...theme.typography.body2,
    textAlign: 'start',
    boxShadow: `none`
}));

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
                        <button className='headerBtn'>Kontakt</button>
                    </a>
                </div>
            </div>


        </div>
    )
}

export default Home