import './App.scss'
import './styles/Navbar.scss'
import Navbar from "./components/Navbar";
import * as React from "react";
import Home from "./components/Home";
import Work from "./components/Work";


function App() {

    return (
        <div className="App">
            <div className='wrapperContent'>

                <Navbar/>
                <Home/>
                <Work/>

            </div>
        </div>
    )
}

export default App