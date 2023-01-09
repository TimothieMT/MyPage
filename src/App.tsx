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

                    <Home/>

                    <div className='break'></div>

                    <Work/>

                    <div className='break'></div>

                    <Footer/>
                </Container>
            </div>

        </div>
    )
}

export default App