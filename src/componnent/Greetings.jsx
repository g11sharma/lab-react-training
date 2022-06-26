import React from 'react';
import './Greeting.css';

const Greetings = ({ lang, children }) => {
  let language = '';
  if (lang === 'fr') {
    language = 'Bonjour';
  }
  if (lang === 'de') {
    language = 'Hallo';
  }

  return (
    <article className="toto">
      <p>
        {language} {children}
      </p>
    </article>
  );
};

export default Greetings;
