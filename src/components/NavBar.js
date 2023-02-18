import React from "react";
import "../NavBar.css";

function NavBar(){
    return(
       <div id="navbar">
       <ul>
       <li><h2>MyEstate</h2></li>
       <li><a>Rent</a></li>
       <li><a>Buy</a></li>
       <li><a>Sell</a></li>
       <li><a>Manage Property</a></li>
       <li><a>Resources</a></li>
       </ul>
       </div>
    )
}
export default NavBar;