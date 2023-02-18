import React from "react";
import "../Filters.css";
import properties from "../DummyData/property";

function Filters(){
    // function handleChange(event){
    //     console.log(event.target.name);
    // }
    const [selectedLoc,setLoc]=React.useState("");
    function handleChange(event){
        
    }
    return(
        <div class="FiltersNav" >
        <div className="filterItems">
        <label className="filterLabel" for="loc">Location </label>
        <select onChange={handleChange} value={selectedLoc} id="loc">
            {properties.map(item=>{
                return <option value={item.location} >{item.location}</option>
            })}
        </select>
        </div>
        <div className= "vertical"></div>
        <div className="filterItems">
        <label className="filterLabel" htmlFor="when">When </label>
        <input id="when" type="date" />
        </div>
        <div className= "vertical"></div>
        <div className="filterItems">
        <label className="filterLabel" htmlFor="priceProp">Price </label>
        <select id="priceProp">
            <option value="1">$500-$2,500</option>
            <option value="2">$2,500-$4,000</option>
            <option value="3">$4,000-$6,500</option>
        </select>
        </div>
        <div className= "vertical"></div>
        <div className="filterItems">
        <label className="filterLabel" htmlFor="propType">Property type </label>
        <select id="propType">
        {properties.map(item=>{
                return <option value={item.type} >{item.type}</option>
            })}
        </select>
        </div>
        <button id="searchBtn" type="submit" >Search</button>
</div>
    );
}

export default Filters;
