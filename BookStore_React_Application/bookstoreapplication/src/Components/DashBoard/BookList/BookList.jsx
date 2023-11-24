import * as React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Book1 from '../../Assets/Book1.png';
import '../BookList/BookList.css'
import Star from '@mui/icons-material/Star';

export default function BookList({data}) {

    const{author,bookName,descrption,discountprice,image,language,price,quantity,status}=data;

    return (
        <div className='main-cont'>
            <Box className='container'
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    

                    '& > :not(style)': {
                        m: 2,
                        width: 228,
                        height: 268,
                        position:'relative',
                    },
                }}
            >
                <Paper elevation={1} >
                    <div className='image'>
                        <img style={{ height: '123px' }} src={image}></img>
                    </div>
                    <div className='bname'>
                        <p style={{ paddingBottom: '3px' }}><b>{bookName}</b></p>
                    </div>
                    <div className='auth'>
                        <p style={{ paddingBottom: '12px' }}>{author}</p>
                    </div>
                    <div className='rating'>
                        <p style={{
                            paddingLeft: '10px',
                            display: 'flex',
                            flexDirection: 'row',
                            border: '2px solid green',
                            backgroundColor: 'green',
                            borderRadius: '4px',
                            width: '96%',
                            height: '90%'
                        }}
                        >4.5<Star /></p>
                    </div>
                    <div className='price'>
                        <p style={{}}>Rs.{discountprice} Rs.<del>{price}</del></p>
                    </div>
                </Paper>
            </Box>
        </div>
    )
}