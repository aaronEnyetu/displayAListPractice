import React from 'react';
import PlantItem from './PlantItem';

export default function PlantsList({ plants }) {
  return (
    <div className='plant-list'>
      {
        plants.map((plant, i) => <PlantItem {...plant} key={plant.name + i} />)
      }
    </div>
  );
}

