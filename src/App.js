// import logo from './logo.svg';
import './App.css';
// import your arrays here
import { fruits } from './fruits.js';
import FruitsList from './FruitList';

import { plants } from './plants.js';
import PlantsList from './PlantsList';

console.log(fruits);

function App() {
  return (
    <div className="App">
      <FruitsList fruits={fruits} />
      <hr/>
      <PlantsList plants={plants}/>
    </div>
  );
}

export default App;
