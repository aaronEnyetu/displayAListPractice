import CropItem from './CropItem';
import React from 'react';

export default function CropsList({ crops }) {
  return (

    <div className='crop-list'>
      {
        crops.map((crop, i) => <CropItem {...crop} key={crop.cropName + i} />)
      }
    </div>
  );
}
