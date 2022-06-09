import FruitItem from './FruitItem';
import React from 'react';

export default function FruitsList({ fruits }) { 
  console.log(fruits);
  return <div>
    {
      fruits.map((fruit, i) => <FruitItem fruit={fruit} key={fruit + i} />)
    }
  </div>;
}

//completed FruitList 