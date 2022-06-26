import React from 'react';
import './Random.css';
const Random = ({ min, max }) => {
  let toto1 = Math.random() * (max - min) + min;

  let finalResult = `Random value between ${min} and ${max} =>${toto1} `;

  return (
    <div className="randomToto">
      <p>{finalResult}</p>
    </div>
  );
};

export default Random;
