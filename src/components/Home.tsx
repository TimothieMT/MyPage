import {Grid, Paper, styled} from "@mui/material";
import Box from "@mui/material/Box";
import '../App.scss'
import {CodeBlock} from "./SyntaxHighlighter";
import React, {useState} from 'react'


const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#00E4B2' : '#111625',
    ...theme.typography.body2,
    textAlign: 'start',
    boxShadow: `none`
}));

function Home() {

    const [isOpen, setIsOpen] = useState(false)


    const codeString = `
//Introduce yourself
class YourSelf {
name: string = 'Tim'
stadt: string = 'Berlin'
fähigkeiten: [ ] = ['typescript', 'html', 'css', 
'express.js', 'node.js', 'react', 'javascript', 
'python', 'java', 'mongodb', 'lua', 'wordpress']
}

const person1: any = new Person()
`


    return (

        <div className={'Startseite'}>
            <Box sx={{
                flexGrow: 1,
                paddingBottom: 10,
                height: 'auto'
            }}>

                <div className='wrapperTitle'>
                    <h1 className='firstTitle'>Hello</h1>
                    <h2 className='secondTitle'> I´m Tim</h2>

                    <img src='/Users/timtolk/Desktop/MyPage/images/avatar.png' alt='Mann mit Brille, kurzen Haaren und Bart'></img>

                    <CodeBlock codeString={codeString}/>

                    <h2 className='secondTitle underTitle'>Fullstack Developer</h2>
                    <a href='https://www.linkedin.com/in/tim-tolk-2091a7258/' target='_blank'>
                        <button className='headerBtn'>Besuche mich auf LinkedIn</button>
                    </a>
                </div>


                <p className='numberOfYear'>#16</p>
                <p className='years'>Years</p>

                <Grid container spacing={3}>
                    <Grid item xs>
                        <Item>
                            <div className='boxExp'>
                                <h2 className='mainExp'>2022</h2>
                                <h3 className='subExp'>Weiterbildung Fullstack Entwickler</h3>
                                <article>
                                    Im Jahr 2022 habe ich mich für den Weg der Webentwicklung entschieden und meine
                                    Weiterbildung beim DCI erfolgreich abgeschlossen und mein Wissen stark verbessert
                                    und vertieft.
                                </article>
                            </div>
                        </Item>
                    </Grid>
                    <Grid item xs>
                        <Item sx={{paddingTop: 10}}>
                            <div className='boxExp'>
                                <h2 className='mainExp'>2021</h2>
                                <h3 className='subExp'>Lernphase Programmierung</h3>
                                <article>
                                    Da ich ein starkes Interesse an der Softwareentwicklung habe und der Bereich der
                                    Sicherheit und Anwendungsprogrammierung eine große Rolle spielt. Habe ich mich intensiv mit Python beschäftigt.
                                </article>
                            </div>
                        </Item>
                    </Grid>
                    <Grid item xs>
                        <Item>
                            <div className='boxExp'>
                                <h2 className='mainExp'>2020</h2>
                                <h3 className='subExp'>Lernphase Programmierung</h3>
                                <article>
                                    Jeder Anfang ist schwer! Daher habe ich mich ein Jahr lang mit Java und der OOP
                                    Programmierung beschäftigt.
                                    Und meine Kenntnisse in der Anwendungsprogrammierung verbessert.
                                </article>
                            </div>
                        </Item>
                    </Grid>
                    <Grid item xs>
                        <Item sx={{paddingTop: 10}}>
                            <div className='boxExp'>
                                <h2 className='mainExp'>2006 - 2019</h2>
                                <h3 className='subExp'>Ausbildung und Berufserfahrung</h3>
                                <article>
                                    Da ich vielseitig interessiert bin, wollte ich zunächst mein wirtschaftliches Wissen
                                    beruflich vertiefen. Daher habe ich mich entschieden, eine
                                    Ausbildung im Einzelhandel zu machen. Anschließend spezialisierte ich mich auf die
                                    Automatisierungstechnik, dort habe ich Blueprints mit CAD programmiert.
                                </article>
                            </div>
                        </Item>
                    </Grid>
                </Grid>
            </Box></div>
    )
}

export default Home