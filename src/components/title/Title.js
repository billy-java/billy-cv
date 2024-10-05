import React from 'react';
import './Title.css';

export default function Title(props) {
  return (
    <div className="text-center">
      <h2 className="my_color">{props.title}</h2>
      <p className="my_p">
        Tel : <a href="tel:+4917634364986">+49 176 34 36 49 86</a>
        <br />
        Email :{' '}
        <a href="mailto:billybabou007@gmail.com">billybabou007@gmail.com</a>
      </p>
    </div>
  );
}
