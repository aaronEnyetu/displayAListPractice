import FruitItem from './FruitItem';
import React from 'react';

export default function FruitsList({ fruits }) { 

  return <div>
    {
      fruits.map((fruit, i) => <FruitItem fruit={fruit} key={fruit + i} />)
    }
  </div>;
}

//completed FruitList 