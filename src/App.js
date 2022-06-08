// import logo from './logo.svg';
import './App.css';
// import your arrays here
import { fruits } from './fruits.js';
import FruitsList from './FruitList';

import { plants } from './plants.js';
import PlantsList from './PlantsList';

import { farmers } from './farmers.js';
import FarmersList from './FarmersList';

console.log(fruits);

function App() {
  return (
    <div className="App">
      <FruitsList fruits={fruits} />
      <hr/>
      <PlantsList plants={plants}/>
      <hr/>
      <FarmersList farmers={farmers}/>
    </div>
  );
}

export default App;
