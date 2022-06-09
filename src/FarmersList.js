import React from 'react';
import FarmerItem from './FarmerItem';

export default function FarmersList({ farmers }) {
  return (
    <div>
      {
        
        farmers.map((farmer, i) => <FarmerItem {...farmer} key={farmer.name + i}/>)
      }
    </div>
  );
}
