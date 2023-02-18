import './App.css';
import NavBar from './components/NavBar';
import Filters from './components/Filters';
import Card from "./components/Card";
import properties from './DummyData/property';



function App() {
  return (
    <div className="App">
    <NavBar />
     <h1>Search properties to rent</h1>
    <div className="FilterDiv">

    <Filters />
    </div>
    <div className="test">
    {
      properties.map(item=>{
        return <Card key={item.id} id={item.id} url={item.url} price={item.price} place={item.place} address={item.address} beds={item.beds} bathrooms={item.beds} area={item.area}/>
      })
    }
    </div>
    </div>
  );
}

export default App;
