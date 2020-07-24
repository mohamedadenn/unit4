import React from 'react';
import './Circles.css';

const Circles = (props) => (

  <div className='Circles'>
    {props.circles.map((circle, idx) =>
      <div key={idx + 1}
      className={idx + 1 == props.currentCircle ? "selected" : ""}> {circle}</div> 
    )}
  
  </div>

);

export default Circles;