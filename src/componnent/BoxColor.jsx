import React from 'react';

import './BoxColor.css';

const BoxColor = ({ r, g, b }) => {
  const divStyle = { backgroundColor: `rgb(${r},${g},${b})` };

  return (
    <article className="toto2" style={divStyle}>
      RBG ({r},{b},{g})
    </article>
  );
};

export default BoxColor;
