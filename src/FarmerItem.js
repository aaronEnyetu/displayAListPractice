import React from 'react';

export default function FarmerItem({
  name,
  state,
  crops
})
{
  return (
    <div className='farmer'>

      <p>Farmer Name: {name}</p>
      <p>Farmer Region: {state}</p>
      <p>Annual Crop: {crops.annual}</p>
      <p>Biennial Crop: {crops.biennial}</p>
      <p>perennial Crop: {crops.perennial}</p>
      <p>Farming Method: {crops.Technique.method} </p>
      <p>Irrigation Technique: {crops.Technique.irrigation}</p>
    </div>
  );
}
