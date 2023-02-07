import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {Link} from "@mui/material";
import '../styles/footer.scss'
import {FaNpm, FaXingSquare} from "react-icons/all";

function Footer() {

    function Copyright(props: any) {
        return (
            <Typography variant="body2" color="white" align="center" {...props}>
                {'Copyright © '}
                <Link color="inherit" href="#" target={'_blank'}>
                    Tim´s Page
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        );
    }

    return (

        <div className={'footerWrapper'}>

            <p className={'footerText'}>TimothieDev</p>


            <a className='iconFooter' href='https://github.com/TimothieMT' target={'_blank'}><GitHubIcon/></a>
            <a className='iconFooter' href='https://www.linkedin.com/in/tim-tolk-2091a7258/'
               target={'_blank'}><LinkedInIcon/></a>
            <a className='iconFooter' href='https://www.xing.com/profile/Tim_Tolk/cv'
               target={'_blank'}><FaXingSquare/></a>
            <a className='iconFooter' href='https://www.npmjs.com/package/sweetstack?activeTab=readme'
               target={'_blank'}><FaNpm/></a>

            <Copyright/>

        </div>


    )
}

export default Footer