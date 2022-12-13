import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import {Link} from "react-scroll";


const pages: any = ['Startseite', 'Arbeiten'];


function Navbar(props: any) {
    const {setAnchorElNav, setAnchorElUser, anchorElNav} = props


    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };


    return (
        <>
            <nav>
                <AppBar position="fixed" sx={{boxShadow: 0, borderBottom: '1px solid #191E34'}}>
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            <Box sx={{
                                flexGrow: 1
                                , display: {xs: 'flex', md: 'none'}
                            }}>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                    color="inherit"
                                    sx={{color: '#00E4B2'}}
                                >
                                    <MenuIcon/>
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorElNav}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    open={Boolean(anchorElNav)}
                                    onClose={handleCloseNavMenu}
                                    sx={{
                                        display: {xs: 'block', md: 'none'}
                                    }}
                                >

                                    {pages.map((page:string, index:number) => (
                                        <Link key={page[index]} style={{padding: 20, display: 'flex'}} to={page}>{page}</Link>
                                    ))}
                                </Menu>
                            </Box>

                            <Box sx={{
                                flexGrow: 1,
                                display: {xs: 'none', md: 'flex', justifyContent: 'center'},
                                gap: '180px'
                            }}
                            >

                                {pages.map((page:string, index:number) => (
                                    <Link key={page[index]} className='navLinks' to={page}>{page}</Link>
                                ))}

                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
            </nav>
        </>

    )
}

export default Navbar