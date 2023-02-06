import * as React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import {useState} from "react";


function Navbar(props: any) {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <nav>
                <div className="left">
                    <a className='icon' href='https://github.com/TimothieMT' target={'_blank'}><GitHubIcon/></a>
                    <a className='icon' href='https://www.linkedin.com/in/tim-tolk-2091a7258/'
                       target={'_blank'}><LinkedInIcon/></a>
                    <a className='icon' href='mailto:ttolk89@gmail.com?subject' target={'_blank'}><AlternateEmailIcon/></a>
                </div>
                <div className="center">
                    <p className={'logoTitle'}>TimothieDev</p>
                </div>
                <div className="right">

                    <button className={'callUsButton'}>Kontaktiere Mich</button>

                    <button

                        className="sandwich-button"

                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                    </button>
                </div>
                {menuOpen && (
                    <ul className="menu">
                        <li><a href="#">Item 1</a></li>
                        <li><a href="#">Item 2</a></li>
                        <li><a href="#">Item 3</a></li>
                    </ul>
                )}
            </nav>

        </>

    )
}

export default Navbar