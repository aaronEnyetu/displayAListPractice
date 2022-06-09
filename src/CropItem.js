import React from 'react';

export default function crops({ cropName, cropOrigin, cropVariety, boxColor }) {
  return (
    <div className='crop' style={{ background: boxColor }}>
      <p> Crop Name: {cropName}</p>
      <p> Crop Origin: {cropOrigin}</p>
      <p>Crop Variety:  {cropVariety}</p>
   
    </div>
  );
}


