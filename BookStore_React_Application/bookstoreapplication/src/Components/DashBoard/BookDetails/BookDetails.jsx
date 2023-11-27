import React from "react";
import Book from '../../Assets/Book1.png';
import '../BookDetails/BookDetails.css';
import { Button } from "@mui/material";
import Star from '@mui/icons-material/Star';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';


export default function BookDetails(data) {

    // const { author, bookName, descrption, discountprice, image, language, price, quantity, status } = book;

    return (
        <div className="book">
            
            <div className="img-btn">
                <div className="book-image" left='18%'>
                    <img src={Book} style={{ width: '20vw', height: '45vh', left: '18%' }}></img>
                </div>
                <div className="buttons">
                    <Button>ADD TO BAG</Button>
                    <Button>WISHLIST</Button>
                </div>
            </div>
            <div className="b-data">
                <div style={{ paddingBottom: '3px' }}>
                    <b>{data.name}</b>
                </div>
                <div style={{ paddingBottom: '4px' }}>Author</div>
                <div className='rate'>
                    <p style={{ display: 'flex', alignItems: 'center' }}>4.5<Star style={{ width: '14px', paddingLeft: '2px' }} /></p>
                </div>
                <div className='prce'>
                    <p style={{ fontSize: '19px' }}><b>Rs.3200</b></p><p style={{ fontSize: '12px', paddingLeft: '12px' }}>Rs.<del>3400</del></p>
                </div>
                <div style={{ borderTop: '2px solid #ccc', margin: '8px 0', width: '500px' }}></div>
                <div>
                    <p style={{ color: 'grey' }}>Book Detail</p>
                </div>
                <div className="desc">
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat autem aliquid suscipit doloribus minus laudantium dolores libero praesentium? Sequi delectus eius aspernatur? Facere libero officia neque quis hic, deleniti inventore!</div>
                </div>
                <div style={{ borderTop: '2px solid #ccc', margin: '8px 0', width: '500px' }}></div>
                <div className="f-back">
                    Customer Feedback
                </div>
                <div className="ov-ra">
                    <p style={{ paddingLeft: '4px', display: 'flex', alignItems: 'flex-start', paddingRight: '412px' }}>Overall rating</p>
                    <div className="fb" style={{}}>
                        <StarBorderOutlinedIcon /><StarBorderOutlinedIcon /><StarBorderOutlinedIcon /><StarBorderOutlinedIcon /><StarBorderOutlinedIcon />
                    </div>
                    <div className="write-r">
                        <div style={{ border: '2px solid white', backgroundColor: 'white', width: '90%', paddingRight: '15px', borderRadius: '10px', color: 'grey' }}>Write Your Review</div>
                    </div>
                    <div className="sbm">
                        <button style={{ backgroundColor: '#4FC3F7', borderRadius: '9%', width: '120%', height: '110%' }}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}