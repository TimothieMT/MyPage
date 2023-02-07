import * as React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {FaNpm, FaXingSquare} from "react-icons/all";


function Navbar() {

    return (
        <>
            <nav>
                <div className="left">
                    <a className='icon' href='https://github.com/TimothieMT' target={'_blank'}><GitHubIcon/></a>
                    <a className='icon' href='https://www.linkedin.com/in/tim-tolk-2091a7258/'
                       target={'_blank'}><LinkedInIcon/></a>
                    <a className='icon' href='https://www.xing.com/profile/Tim_Tolk/cv'
                       target={'_blank'}><FaXingSquare/></a>
                    <a className='icon' href='https://www.npmjs.com/package/sweetstack?activeTab=readme'
                       target={'_blank'}><FaNpm/></a>

                </div>
                <div className="center">
                    <p className={'logoTitle'}>testtest</p>
                </div>
                <div className="right">

                    <button className={'callUsButton'}><a href='mailto:ttolk89@gmail.com?subject' target={'_blank'}>Kontaktiere Mich</a></button>

                </div>


            </nav>

        </>

    )
}

export default Navbar