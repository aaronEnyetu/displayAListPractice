import React from 'react';

export default function FarmerItem({
  name,
  region,
  crops,
  
})
{
  return (
    <div>

      <p>Farmer Name: {name}</p>
      <p>Farmer Region: {region}</p>
      <p>Annual Crop: {crops.annual}</p>
      <p>Biennial Crop: {crops.biennial}</p>
      <p>perennial Crop: {crops.perennial}</p>
      <p>Farming Method: {crops.Technique.method} </p>
      <p>Irrigation Technique: {crops.Technique.irrigation}</p>
    </div>
  );
}
