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

    const[profile,setProfile]=useState(null);

    const handleMenuClick=(e)=>{
        setProfile(e.currentTarget);
        console.log("Click");
    }
    const handlemenuClose=(e)=>{
        setProfile(null);
    }

    // const handleLogOut=(e)=>{
    //     if(localStorage.key){
    //         localStorage.removeItem('token');
    //     }
    // }

    return (
        <div>
            <AppBar position="relative" style={{height:'57px', backgroundColor:'brown'}} >
                <Toolbar className='bar'>
                    <div>
                    <img src={Logo} alt='BookLogo' style={{width:'35px', display:'flex', justifyContent:'center', padding:'23px 23px 33px 23px'}}></img>
                    </div>
                    <div className='home-icon'>
                        <Typography
                          variant='h7'
                          style={{
                            flexGrow:1,
                            display:'flex',
                            height:'35px',
                            padding:'23px 23px 53px 8px'
                          }}
                        >
                        <p>BookStore</p>
                        </Typography>
                    </div>
                    <div className='searchBar' style={{height:'53%', backgroundColor:'white',display:'flex',justifyContent:'center', alignContent:'center',alignItems:'center',borderRadius:'5px'}}>
                        <search >
                        <SearchIconWrapper>
                            <SearchIcon style={{color:'grey',display:'flex',justifyContent:'center', alignContent:'center',alignItems:'center',paddingBottom:'17px'}}/>
                        </SearchIconWrapper>
                        <StyledInputBase
                          placeholder='Search...'
                          color='grey'
                          inputProps={{ 'aria-label': 'search' }}
                          sx={{
                              justifyItems: 'center',
                              alignContent: 'center',
                              color: 'grey',
                              paddingRight: '99px',
                              height:'10%',
                              }}
                        ></StyledInputBase>
                        </search>
                    </div>
                    <div className='account'>
                        <IconButton
                          size='small'
                          aria-label='account of current user'
                          aria-controls='menu-appbar'
                          aria-haspopup='true'
                         style={{
                            color:'white',
                            display:'flex',
                            flexWrap:'wrap',
                            flexDirection:'column',
                         }}
                         onClick={handleMenuClick}
                        >
                            <PermIdentityOutlinedIcon/>
                            profile
                        </IconButton>
                        <Menu
                         id='menu-appbar'
                         profile={profile}
                         anchorOrigin={{
                            vertical:'top',
                            horizontal:'right'
                         }}
                         keepMounted
                         transformOrigin={{
                            vertical:'bottom',
                            horizontal:'right',
                         }}
                         open={Boolean(profile)}
                         onClose={handlemenuClose}
                        >
                            <MenuItem onClick={handlemenuClose}>Profile</MenuItem>
                            <MenuItem >Logout</MenuItem>
                        </Menu>
                    </div>
                    <div className='cart'>
                        <IconButton
                         size='small'
                         style={{
                            color:'white',
                            display:'flex',
                            flexDirection:'wrap',
                            flexDirection:'column'
                         }}
                        >
                            <ShoppingCartOutlinedIcon/>
                            cart
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}