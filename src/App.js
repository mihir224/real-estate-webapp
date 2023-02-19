import './App.css';
import React from "react";
import NavBar from './components/NavBar';
import Card from "./components/Card";
import properties from './DummyData/property';
import "./styles/Filters.css";


function App() {
  const [selectedLoc,setLoc]=React.useState("All");
  const [selectedType,setType]=React.useState("All");
    function handleChange(event){
        console.log(event.target.value);
        setLoc(event.target.value);
    }
    function handleType(event){
      setType(event.target.value);
    }
  return (
    <div className="App">
    <NavBar />
     <h1>Search properties to rent</h1>
    <div className="FilterDiv">
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
            <option value="1">$2,500-$3,999</option>
            <option value="2">$4,000-$5,000</option>
            <option value="3">$5,100-$6,400</option>
            <option value="4">$6,500-$8,000</option>
        </select>
        </div>
        <div className= "vertical"></div>
        <div className="filterItems">
        <label className="filterLabel" htmlFor="propType">Property type </label>
        <select onChange={handleType} value={selectedType} id="propType">
        {properties.map(item=>{
                return <option value={item.type} >{item.type}</option>
            })}
        </select>
        </div>
        <button id="searchBtn" type="submit" >Search</button>
</div>
    </div>
    <div className="test">
    {
      properties.map(item=>{
        if(selectedLoc!=="All"){
           return item.location===selectedLoc&&<Card key={item.id} id={item.id} url={item.url} price={item.price} place={item.place} address={item.address} beds={item.beds} bathrooms={item.beds} area={item.area}/>
        }
        if(selectedType!=="All"){
          return item.type===selectedType&&<Card key={item.id} id={item.id} url={item.url} price={item.price} place={item.place} address={item.address} beds={item.beds} bathrooms={item.beds} area={item.area}/>
        }
        else {
          return <Card key={item.id} id={item.id} url={item.url} price={item.price} place={item.place} address={item.address} beds={item.beds} bathrooms={item.beds} area={item.area}/>
        }
      })
    }
    </div>
    </div>
  );
}

export default App;
