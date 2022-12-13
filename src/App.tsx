import './App.scss'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import * as React from "react";
import Home from "./components/Home";
import Work from "./components/Work";
import Container from "@mui/material/Container";


function App() {

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);


    return (
        <div className="App">

            <div className='wrapperContent'>
                <Container maxWidth="xl">
                {/*Home - About Me - Work - Gallery - LogIn*/}
                <Navbar setAnchorElNav={setAnchorElNav}
                        setAnchorElUser={setAnchorElUser} anchorElNav={anchorElNav} anchorElUser={anchorElUser}/>

                <Home/>

                <div className='break'></div>

                <Work/>


                {/*Google Maps(location) - Formular{Name/Email/Text} - Social Media*/}
                <Footer/>
            </Container>
            </div>

        </div>
    )
}

export default App


/*
* ToDo
*
* - design: color = dark theme[dark grey, grey, white] - one-pager - font[robot sans-serif] - responsible focus on iphone 6 and greater
* - API: MUI - typescript - react - sass
* - header[animation and code snippets integrated / home,about,work, gallery?]
* - main[section, image 1/3 , text 2/3]
* - footer[google map, formular, social media and copyright]
*
*
* Function:
* -Login and booking a date with me to talk about you project
* -display data in chart [bitcoin, gas, etherium etc..]
* */