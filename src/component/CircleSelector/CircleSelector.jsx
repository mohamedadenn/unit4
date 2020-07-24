import React from 'react';
import './CircleSelector.css';


const CircleSelectors = (props) => {
function check(z) {
    if(z == props.currentCircle) {
        console.log(`state: ${props.currentCircle}`)
        console.log(`current: ${z}`)
        return 'selected';
    } else {
      
        // console.log('')
    }
}
return(
    <div className='CircleSelector'>
     
      {
      props.circles.map((circle, idx) =>
        <button
         key={idx}
          id={idx + 1}
        className={check(idx + 1)}
          onClick={e => props.selectCircle(e.target.id)}
      >Selected Circle {circle}</button> 
      )}
    </div>
)
  };

export default CircleSelectors;