import React from 'react'

 function Childcomponent() {
  return (
    <div>
        <button onClick={props.greetHandler}>Greet parent</button>
    </div>
  )
}
export default Childcomponent;
