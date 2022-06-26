import React from 'react';
import './IdCard.css';
const IdCard = ({ picture, lastName, firstName, gender, height, birth }) => {
  return (
    <div className="IdCard">
      <div>
        <img src={picture} />
      </div>
      <div>
        <p>
          <strong>lastName:</strong> {lastName}{' '}
        </p>
        <p>
          <strong>firstName:</strong> {firstName}{' '}
        </p>
        <p>
          <strong>gender: </strong>
          {gender}
        </p>
        <p>
          <strong>height:</strong>
          {height}
        </p>
        <p>
          <strong>birth:</strong>
          {birth.toString()}
        </p>
      </div>
    </div>
  );
};

export default IdCard;
