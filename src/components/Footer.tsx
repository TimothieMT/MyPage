import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import {Link} from "@mui/material";
import {Status} from "@googlemaps/react-wrapper";
import Home from "./Home";

function Footer() {

    function Copyright(props: any) {
        return (
            <Typography variant="body2" color="#00E4B2" align="center" {...props}>
                {'Copyright © '}
                <Link color="inherit" href="#" target={'_blank'}>
                    Tim´s Page
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        );
    }

    const render = (status: Status) => {
        return <h1>{status}</h1>;
    };

    return (
            <Box
                component="footer"
                sx={{
                    backgroundColor: '#111625',
                    display: 'flex',
                    justifyContent: 'center',
                    pb: 3
                }}
            >
                <Container maxWidth="sm" sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexWrap: 'nowrap',
                    alignItems: 'center',
                }}
                >


                    <Typography className='footerWrapper' variant="body1" sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        borderTop: '1px solid #191E34',
                        padding: '10px 0 0 0'
                    }}>

                        <ul>
                            <li className='iconFooter'><a href='https://github.com/TimothieMT' target={'_blank'}><GitHubIcon />/Github.com</a></li>
                            <li className='iconFooter'><a href='https://www.linkedin.com/in/tim-tolk-2091a7258/' target={'_blank'}><LinkedInIcon />/linkedin.com</a></li>
                            <li className='iconFooter'><a href='mailto:ttolk89@gmail.com?subject' target={'_blank'}><AlternateEmailIcon />/ttolk89@gmail.com</a></li>
                        </ul>
                    </Typography>

                    <Copyright/>

                </Container>
            </Box>
    )
}

export default Footer