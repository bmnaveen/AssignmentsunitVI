
import './App.css';
import { Link } from 'react-router-dom';
import DisplayCountry from "./components/displayCountry";
import {Routes,Route} from "react-router-dom"
import AddCountry from "./components/addCountry"
import AddCity from './components/addCity';
function App() {
  return (
    <div className="App">
      <nav className='navBar'>  <Link to={"/"}>Population Detailes</Link> <Link to={"/add-country"}>Add country </Link><Link to={"/add-city"}>Add city </Link></nav>
      <Routes>
        <Route path='/' element={<DisplayCountry></DisplayCountry>}/>
        <Route path='/add-country' element={<AddCountry></AddCountry>}/>
        <Route path='/add-city' element={<AddCity></AddCity>}/>
      </Routes>
    </div>
  );
}

export default App;
