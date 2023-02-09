import './App.scss'
import './styles/navbar.scss'
import './styles/card.scss'
import './styles/footer.scss'
import Navbar from "./components/Navbar";
import * as React from "react";
import Home from "./components/Home";
import Work from "./components/Work";
import Footer from "./components/Footer";
import MapBox from "./components/MapBox";



function App() {

    return (
        <div className="App">
            <div className='wrapperContent'>

                <Navbar/>
                <Home/>
                <Work/>
                <MapBox/>
                <Footer/>


            </div>
        </div>
    )
}

export default App