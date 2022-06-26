import React from 'react';
import './CreditCard.css';

const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) => {
  let totoColor = { bgColor };
  return (
    <div className="totoCard" style={{ totoColor, color }}>
      <h3>{type}</h3>
      <h3> **** **** **** {number.substr(number.length - 4)}</h3>
      <p>
        Expires {expirationMonth}/{expirationYear} {bank}
      </p>
      <p>{owner}</p>
    </div>
  );
};

export default CreditCard;
