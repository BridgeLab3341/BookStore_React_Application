import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Logo from '../Assets/education@2x.png';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import '../Header/Header.css';
import { useState } from 'react';
import { Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router';
import MarkunreadMailboxOutlinedIcon from '@mui/icons-material/MarkunreadMailboxOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

export default function SearchBar() {
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: 10,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.black, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '10%',
        padding: '0.5%',
        paddingRight: '290px',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: '50vw',
        },
    }));
    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        paddingBottom: '15px',
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));
    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '58ch',
            },
        },
    }));

    const [profile, setProfile] = useState(null);

    const handleMenuClick = (e) => {
        setProfile(e.currentTarget);
        console.log("Click");
    }
    const handlemenuClose = (e) => {
        setProfile(null);
    }

    const navigate = useNavigate();

    const handleLogOut = () => {
        if (localStorage.key) {
            localStorage.removeItem('Token');
            navigate("/dashboard")
        }
    }


    return (
        <div>
            <AppBar position="relative" style={{ height: '65px', width: '100%', backgroundColor: 'brown', paddingLeft: '100px' }} >
                <Toolbar className='bar'>
                    <div>
                        <img src={Logo} alt='BookLogo' style={{ width: '35px', display: 'flex', justifyContent: 'center', padding: '23px 23px 33px 23px' }}></img>
                    </div>
                    <div className='home-icon'>
                        <Typography
                            variant='h7'
                            style={{
                                flexGrow: 1,
                                display: 'flex',
                                height: '35px',
                                padding: '23px 23px 53px 8px'
                            }}
                        >
                            <p>BookStore</p>
                        </Typography>
                    </div>
                    <div className='searchBar' style={{ height: '53%', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center', borderRadius: '5px', width: '40%' }}>
                        <search >
                            <SearchIconWrapper>
                                <SearchIcon style={{ color: 'grey', display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center', paddingBottom: '17px', paddingLeft: '16px' }} />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder='Search...'
                                color='grey'

                                inputProps={{ 'aria-label': 'search' }}
                                style={{
                                    justifyItems: 'center',
                                    alignContent: 'center',
                                    color: 'grey',
                                    paddingLeft: '1px',
                                    height: '10%',
                                }}
                            ></StyledInputBase>
                        </search>
                    </div>
                    <div className='account'  >
                        {localStorage.getItem('Token') ? (
                            <div >
                                <IconButton
                                    size='small'
                                    aria-label='account of current user'
                                    aria-controls='primary-search-account-menu'
                                    aria-haspopup='true'
                                    color='inherit'
                                    style={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        flexDirection: 'column',
                                    }}
                                    onClick={handleMenuClick}
                                >
                                    <PermIdentityOutlinedIcon />
                                    profile
                                </IconButton>
                                <Menu className='menu-item'
                                    id='menu-appbar'
                                    profile={profile}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                        position: 'relative',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}

                                    style={{ top: '6vh', left: '-12vw', paddingLeft: '1px', marginLeft: '1px', margin: '1px' }}
                                    open={Boolean(profile)}
                                    onClose={handlemenuClose}
                                >
                                    <div style={{ width: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', alignContent: 'flex-start' }}>
                                        <div className='name'>
                                            <MenuItem style={{ width: '190px', display: 'flex', justifyContent: 'center' }}><b>Hello,name</b></MenuItem>
                                        </div>
                                        <div className='profi'>
                                            <MenuItem onClick={handlemenuClose} style={{ color: 'grey', width: '160px', display: 'flex', justifyContent: 'center', paddingLeft: '-10px' }}><PermIdentityOutlinedIcon />Profile</MenuItem>
                                        </div>
                                        <div className='order'>
                                            <MenuItem style={{ color: 'grey', width: '190px', display: 'flex', justifyContent: 'center', }}><MarkunreadMailboxOutlinedIcon />My Orders</MenuItem>
                                        </div>
                                        <div>
                                            <MenuItem style={{ color: 'grey', width: '200px', display: 'flex', justifyContent: 'center', paddingLeft: '15px' }} ><FavoriteBorderOutlinedIcon />My WishList</MenuItem>
                                        </div>
                                        <div className='logout' style={{ paddingLeft: '32px' }}>
                                            <MenuItem onClick={handleLogOut} style={{ color: 'brown', border: '1px solid brown', borderRadius: '4px', width: '130px', display: 'flex', justifyContent: 'center', alignContent: 'center', borderWidth: '2px 2px 2px 2px', paddingLeft: '10px' }}>Logout</MenuItem>
                                        </div>
                                    </div>
                                </Menu>
                            </div>
                        ) : (
                            <div>
                                <IconButton
                                    size='small'
                                    aria-label='account of current user'
                                    aria-controls='primary-search-account-menu'
                                    aria-haspopup='true'
                                    color='inherit'
                                    style={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        flexDirection: 'column',
                                    }}
                                    onClick={handleMenuClick}
                                >
                                    <PermIdentityOutlinedIcon />
                                    profile
                                </IconButton>
                                <Menu
                                    id='menu-appbar'
                                    profile={profile}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                        position: 'relative',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}

                                    style={{ top: '6vh', left: '-7vw', paddingLeft: '10px', marginLeft: '1px', margin: '1px' }}
                                    open={Boolean(profile)}
                                    onClose={handlemenuClose}
                                >
                                    <div className='message' style={{ width: '340px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', flexWrap: 'nowrap', letterSpacing: '1px', wordSpacing: '1px' }}>
                                        <h4 style={{ height: '1px', paddingLeft: '14px' }}>Welcome</h4>
                                        <p style={{ color: 'grey', paddingLeft: '14px' }}>To access account and manage Orders</p>
                                        <div style={{ color: 'brown', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignContent: 'center', alignItems: 'center', paddingLeft: '14px', paddingBottom: '5px' }}>
                                            <MenuItem onClick={() => navigate('/')} style={{ border: '2px solid brown', borderRadius: '4px', width: '69px', height: '30px', borderWidth: '2px 2px 2px 2px', paddingLeft: '10px' }}>LOGIN</MenuItem>/<MenuItem onClick={() => navigate('/signup')} style={{ border: '2px solid brown', borderRadius: '4px', width: '79px', height: '30px', borderWidth: '2px 2px 2px 2px', paddingLeft: '10px' }}>SIGNUP</MenuItem>
                                        </div>
                                        <div style={{ borderTop: '1px solid #ccc', margin: '8px 0', width: '340px' }}></div>
                                        <div >
                                            <MenuItem style={{ color: 'grey', width: '190px', display: 'flex', justifyContent: 'center', letterSpacing: '1px', wordSpacing: '1px' }}><MarkunreadMailboxOutlinedIcon />My Orders</MenuItem>
                                            <MenuItem style={{ color: 'grey', width: '200px', display: 'flex', justifyContent: 'center', letterSpacing: '1px', wordSpacing: '1px' }} ><FavoriteBorderOutlinedIcon />My WishList</MenuItem>
                                        </div>
                                    </div>
                                </Menu>
                            </div>
                        )}
                    </div>
                    <div className='cart'>
                        <IconButton
                            size='small'
                            style={{
                                color: 'white',
                                display: 'flex',
                                flexDirection: 'wrap',
                                flexDirection: 'column'
                            }}
                        >
                            <ShoppingCartOutlinedIcon />
                            cart
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}