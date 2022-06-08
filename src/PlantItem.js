import React from 'react';

export default function PlantItem({
  name,
  order,
  family,
  genus,
  species,
  boxColor,
})
{
  return (
    <div className='plant' style={{ background: boxColor }}>
      <p>Plant name is {name}</p>
      <p>Plant order is {order}</p>
      <p>Plant family is {family}</p>
      <p>Plant genus is {genus}</p>
      <p>Plant species is {species}</p>


    </div>
       
  );
}

//complete