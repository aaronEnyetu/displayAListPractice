// import logo from './logo.svg';
import './App.css';
// import your arrays here
import { fruits } from './fruits.js';
import FruitsList from './FruitList';
console.log(fruits);

function App() {
  return (
    <div className="App">
      <FruitsList fruits={fruits} />
    </div>
  );
}

export default App;
