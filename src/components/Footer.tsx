import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import {Link} from "@mui/material";

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


                            <a className='iconFooter' href='https://github.com/TimothieMT' target={'_blank'}><GitHubIcon />/Github.com</a>
                            <a className='iconFooter' href='https://www.linkedin.com/in/tim-tolk-2091a7258/' target={'_blank'}><LinkedInIcon />/linkedin.com</a>
                            <a className='iconFooter' href='mailto:ttolk89@gmail.com?subject' target={'_blank'}><AlternateEmailIcon />/ttolk89@gmail.com</a>


                    </Typography>

                    <Copyright/>

                </Container>
            </Box>
    )
}

export default Footer