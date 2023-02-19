import React from "react";
import "../styles/Card.css";
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import SquareFootIcon from '@mui/icons-material/SquareFoot';

function Card(props){
    const customStyling={
        background: `url("${props.url}")`,
        backgroundPosition: "50% 0%",
        backgroundSize: "100% 50%",
        backgroundRepeat: "no-repeat",
        backgroundColor: "white"
    }
    const custom={
        fontSize:"20px",
        verticalAlign:"bottom",
        paddingRight:"6px",
        color: "#6D67E4",
    }
    return (
    <div id="cardDiv">
        <button id="card" style={customStyling}>
        <div id="cardBody">
        <h3 id="priceTitle"><span id="price">${props.price}</span><span id="pm">/month</span></h3>
        <h2 id="place">{props.place}</h2>
        <h3 id="address">{props.address}</h3>
        <hr />
        <ul>
            <li><BedIcon style={custom} />{props.beds} Beds</li>
            <li><BathtubIcon style={custom} />{props.bathrooms} Bathrooms</li>
            <li><SquareFootIcon style={custom} />{props.area}</li>
        </ul>
        </div>
        </button>
    </div>
    )
}

export default Card;
